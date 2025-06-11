document.addEventListener("DOMContentLoaded", () => {
  const searchIcon = document.getElementById("searchIcon");
  const searchSubheader = document.getElementById("searchSubheader");
  const searchInput = document.getElementById("searchInput");
  const clearSearch = document.getElementById("clearSearch");
  const suggestionsBox = document.getElementById("suggestionsBox");
  const darkModeToggle = document.getElementById("darkModeToggle");
  const addIcon = document.getElementById("addIcon");
  const alertBox = document.getElementById("alertBox");
  const body = document.body;

  let userLoggedIn = false;
  let searchScope = null;
  let selectedIndex = -1;

  const genres = [...new Set(allShows.flatMap(s => s.genre.split(',').map(g => g.trim())))].sort();
  const cast = [...new Set(allShows.flatMap(s => s.cast.split(',').map(c => c.trim())))].sort();
  const years = [...new Set(allShows.map(s => s.releaseDate.match(/\d{4}/)?.[0]).filter(Boolean))].sort((a, b) => b - a);
  const categories = [...new Set(allShows.flatMap(s => s.categories))].sort();

  function showInitialSuggestions() {
    suggestionsBox.innerHTML = `
      <div class="suggestion-group"><strong>Top Searches</strong></div>
      ${["Dune 2", "Stranger Things", "Breaking Bad", "Squid Game"].map(title =>
        `<div class="suggestion-item">${title}</div>`).join("")}

      <div class="suggestion-group"><strong>Categories</strong></div>
      ${categories.map(cat =>
        `<div class="suggestion-item" data-scope="category:${cat}">${cat} (Category)</div>`).join("")}

      <div class="suggestion-group"><strong>Genres</strong></div>
      ${genres.map(g =>
        `<div class="suggestion-item" data-scope="genre:${g}">${g} (Genre)</div>`).join("")}

      <div class="suggestion-group"><strong>Years</strong></div>
      ${years.map(y =>
        `<div class="suggestion-item" data-scope="year:${y}">${y} Releases</div>`).join("")}

      <div class="suggestion-group"><strong>People</strong></div>
      ${cast.slice(0, 10).map(p =>
        `<div class="suggestion-item" data-scope="people:${p}">${p} (Cast)</div>`).join("")}
    `;
  }

  function filterShows(query) {
    const q = query.toLowerCase().trim();
    let results = [...allShows];

    if (searchScope) {
      const [type, value] = searchScope.split(":");
      const val = value.toLowerCase();
      results = results.filter(s => {
        if (type === "genre") return s.genre.toLowerCase().includes(val);
        if (type === "year") return s.releaseDate.includes(val);
        if (type === "people") return s.cast.toLowerCase().includes(val);
        if (type === "category") return s.categories.map(c => c.toLowerCase()).includes(val);
        return true;
      });
    }

    return results.filter(s =>
      s.title.toLowerCase().includes(q) ||
      s.genre.toLowerCase().includes(q) ||
      s.cast.toLowerCase().includes(q) ||
      s.releaseDate.toLowerCase().includes(q)
    );
  }

  function showSearchResults(query) {
    const results = filterShows(query);
    suggestionsBox.innerHTML = results.length === 0
      ? `<div class="suggestion-item">No matches found.</div>`
      : results.slice(0, 10).map(s =>
          `<div class="suggestion-item">${s.title} (${s.releaseDate})</div>`).join("");
  }

  function resetScope() {
    searchScope = null;
    searchInput.placeholder = "Search movies, shows, actors, genres, years...";
  }

  searchIcon.addEventListener("click", () => {
    searchSubheader.classList.toggle("hidden");
    if (!searchSubheader.classList.contains("hidden")) {
      searchInput.focus();
      showInitialSuggestions();
    } else {
      suggestionsBox.innerHTML = "";
    }
  });

  clearSearch.addEventListener("click", () => {
    searchInput.value = "";
    resetScope();
    showInitialSuggestions();
  });

  darkModeToggle.addEventListener("click", () => {
    body.classList.toggle("dark-mode");
  });

  addIcon.addEventListener("click", () => {
    if (!userLoggedIn) {
      alertBox.classList.remove("hidden");
      setTimeout(() => alertBox.classList.add("hidden"), 3000);
    }
  });

  document.addEventListener("click", e => {
    if (!searchSubheader.contains(e.target) && e.target !== searchIcon) {
      searchSubheader.classList.add("hidden");
      suggestionsBox.innerHTML = "";
    }
  });

  searchInput.addEventListener("keydown", e => {
    const items = Array.from(suggestionsBox.querySelectorAll(".suggestion-item"));
    if (e.key === "ArrowDown") {
      selectedIndex = (selectedIndex + 1) % items.length;
    } else if (e.key === "ArrowUp") {
      selectedIndex = (selectedIndex - 1 + items.length) % items.length;
    } else if (e.key === "Enter" && selectedIndex >= 0) {
      items[selectedIndex].click();
      selectedIndex = -1;
      return;
    } else if (e.key === "Escape") {
      searchSubheader.classList.add("hidden");
      return;
    }

    items.forEach((item, idx) => {
      item.style.backgroundColor = idx === selectedIndex ? "#eee" : "";
    });
  });

  suggestionsBox.addEventListener("click", (e) => {
    const target = e.target.closest(".suggestion-item");
    const scope = target.getAttribute("data-scope");

    if (scope) {
      searchScope = scope;
      const [, val] = scope.split(":");
      searchInput.placeholder = `Search within: ${val}`;
      searchInput.value = "";
      showSearchResults("");
    } else if (target.textContent) {
      const title = encodeURIComponent(target.textContent.split(" (")[0]);
      window.location.href = `details.html?title=${title}`;
    }
  });

  searchInput.addEventListener("input", () => {
    selectedIndex = -1;
    const val = searchInput.value.trim();
    if (!val) {
      showInitialSuggestions();
    } else {
      showSearchResults(val);
    }
  });
});
