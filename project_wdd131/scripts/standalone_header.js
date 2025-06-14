// scripts/standalone_header.js
// Handles search functionality, dark mode, and header interactions for CineWatch.

document.addEventListener("DOMContentLoaded", () => {
  const searchIcon = document.getElementById("searchIcon");
  const searchSubheader = document.getElementById("searchSubheader");
  const searchInput = document.getElementById("searchInput");
  const clearSearch = document.getElementById("clearSearch");
  const suggestionsBox = document.getElementById("suggestionsBox");
  const darkModeToggle = document.getElementById("darkModeToggle");
  const addIcon = document.getElementById("addIcon");
  const body = document.body;
  const logoLink = document.querySelector(".logo a"); // Select the link within the logo div

  // New elements for account dropdown
  const accountIcon = document.getElementById("accountIcon");
  const accountDropdown = document.getElementById("accountDropdown");

  // Placeholder for user login status. In a real app, this would come from authentication.
  // Set to `true` for testing the logged-in menu, `false` for login/signup options.
  let userLoggedIn = true; // <-- SET THIS TO `true` OR `false` FOR TESTING
  let currentUsername = "CineFan123"; // Placeholder username if logged in

  let searchScope = null; // searchScope can be null (initial), a primary type (e.g., "category"), or a specific filter (e.g., "category:Hollywood")
  let selectedIndex = -1; // For keyboard navigation of suggestions

  // Ensure allShows is accessible from app_core.js
  if (typeof allShows === 'undefined') {
    console.error("allShows data is not available. Please ensure scripts/app_core.js is loaded before scripts/standalone_header.js.");
    // Disable search features if data is missing to prevent errors
    if (searchIcon) searchIcon.style.display = 'none';
    if (searchSubheader) searchSubheader.style.display = 'none';
    return; // Exit if essential data is not present
  }
    // Ensure showMessageBox is accessible from app_core.js
    if (typeof showMessageBox === 'undefined') {
        console.error("showMessageBox function is not available. Ensure scripts/app_core.js is loaded correctly.");
        // Fallback to alert if showMessageBox is missing (though it shouldn't be with correct loading)
        window.showMessageBox = (msg, icon) => alert(msg);
    }


  // Pre-process unique data for suggestions from allShows for efficiency
  const uniqueGenres = [...new Set(allShows.flatMap(s => s.genre.split(',').map(g => g.trim())))].filter(Boolean).sort();
  const uniqueYears = [...new Set(allShows.map(s => s.releaseDate.match(/\d{4}/)?.[0]).filter(Boolean))].sort((a, b) => b - a);
  const uniqueCategories = [...new Set(allShows.flatMap(s => s.categories))].filter(Boolean).sort();
  // Normalize network names to match what's in the data (e.g., 'netflixlogo.webp' -> 'netflix')
  const uniqueNetworks = [...new Set(allShows.map(s => s.networkLogo.replace('.webp', '').replace('logo', '').trim().toLowerCase()).filter(n => n !== 'n/a' && n !== 'expected'))]
                         .map(n => n.charAt(0).toUpperCase() + n.slice(1)) // Capitalize first letter for display
                         .sort();


  // --- Core Search & Suggestion Rendering Functions ---

  /**
   * Displays the primary search scope suggestions (Category, Genre, Year, Network).
   */
  function showPrimarySuggestions() {
    suggestionsBox.innerHTML = `
      <div class="suggestion-group"><strong>Search By:</strong></div>
      <div class="suggestion-item" data-scope="category">Category</div>
      <div class="suggestion-item" data-scope="genre">Genre</div>
      <div class="suggestion-item" data-scope="year">Release Year</div>
      <div class="suggestion-item" data-scope="network">Network</div>
    `;
    selectedIndex = -1; // Reset keyboard selection
  }

  /**
   * Renders specific suggestions based on the current search scope and user query.
   * This is for when a primary scope (e.g., "category") has been selected, and the user is typing values.
   * @param {string} query The user's input query.
   */
  function renderScopedValueSuggestions(query) {
    const q = query.toLowerCase().trim();
    let values = [];

    if (searchScope === 'category') {
      values = uniqueCategories.filter(cat => cat.toLowerCase().includes(q));
    } else if (searchScope === 'genre') {
      values = uniqueGenres.filter(g => g.toLowerCase().includes(q));
    } else if (searchScope === 'year') {
      values = uniqueYears.filter(y => y.includes(q));
    } else if (searchScope === 'network') {
      values = uniqueNetworks.filter(net => net.toLowerCase().includes(q));
    }

    // Generate HTML for the scoped values
    suggestionsBox.innerHTML = values.length === 0
      ? `<div class="suggestion-item">No matches found.</div>`
      : values.slice(0, 10).map(item =>
          `<div class="suggestion-item" data-scope-value="${item}" data-scope-type="${searchScope}">${item}</div>`
        ).join("");
    selectedIndex = -1; // Reset keyboard selection
  }

  /**
   * Renders show title suggestions, optionally filtered by a specific scope:value.
   * @param {string} query The user's input query.
   * @param {string|null} currentFilterScope A specific filter like "category:Hollywood"
   */
  function renderShowTitleSuggestions(query, currentFilterScope = null) {
    const q = query.toLowerCase().trim();
    let filteredShows = [...allShows];

    if (currentFilterScope) {
        const [type, value] = currentFilterScope.split(':');
        const val = value.toLowerCase();
        filteredShows = filteredShows.filter(s => {
            if (type === "category") return s.categories.map(c => c.toLowerCase()).includes(val);
            if (type === "genre") return s.genre.toLowerCase().includes(val);
            if (type === "year") return s.releaseDate.includes(val);
            if (type === "network") {
                const networkName = s.networkLogo.replace('.webp', '').replace('logo', '').trim().toLowerCase();
                return networkName.includes(val);
            }
            return false;
        });
    }

    // Now filter by user's query against the remaining shows
    const results = filteredShows.filter(s =>
        s.title.toLowerCase().includes(q) ||
        s.genre.toLowerCase().includes(q) ||
        s.cast.toLowerCase().includes(q) ||
        s.releaseDate.toLowerCase().includes(q)
    );

    suggestionsBox.innerHTML = results.length === 0
      ? `<div class="suggestion-item">No matches found.</div>`
      : results.slice(0, 10).map(s =>
          `<div class="suggestion-item" data-type="show" data-title="${encodeURIComponent(s.title)}">${s.title} (${s.releaseDate.match(/\d{4}/)?.[0]})</div>`
        ).join("");
    selectedIndex = -1; // Reset keyboard selection
  }

  /**
   * Populates and toggles the account dropdown menu based on login status.
   */
  function toggleAccountDropdown() {
      if (accountDropdown.classList.contains('visible')) {
          accountDropdown.classList.remove('visible');
      } else {
          accountDropdown.innerHTML = ''; // Clear previous content

          if (userLoggedIn) {
              // Logged in menu
              accountDropdown.innerHTML = `
                  <a href="#"><i class="fas fa-user"></i> <span id="dropdownUsername">${currentUsername}</span></a>
                  <a href="#"><i class="fas fa-list-ul"></i> Playlist</a>
                  <a href="#"><i class="fas fa-bookmark"></i> Bookmarks</a>
                  <a href="#"><i class="fas fa-heart"></i> Favorites</a>
                  <a href="#"><i class="fas fa-cog"></i> Settings</a>
                  <a href="#" class="logout-item"><i class="fas fa-sign-out-alt"></i> Logout</a>
              `;
              // Add click listeners for logged-in menu items (placeholders for now)
              accountDropdown.querySelectorAll('a').forEach(item => {
                  if (item.classList.contains('logout-item')) {
                      item.addEventListener('click', (e) => {
                          e.preventDefault();
                          userLoggedIn = false; // Simulate logout
                          showMessageBox("You have been logged out.", "fas fa-check-circle");
                          toggleAccountDropdown(); // Close and re-render dropdown for logged-out state
                      });
                  } else {
                      item.addEventListener('click', (e) => {
                          e.preventDefault();
                          const text = item.textContent.trim();
                          showMessageBox(`${text} functionality is coming soon!`, "fas fa-info-circle");
                      });
                  }
              });

          } else {
              // Not logged in menu
              accountDropdown.innerHTML = `
                  <a href="signup.html"><i class="fas fa-user-plus"></i> Sign Up</a>
                  <a href="login.html"><i class="fas fa-sign-in-alt"></i> Login</a>
              `;
          }
          accountDropdown.classList.add('visible');
      }
  }


  // --- Event Listeners ---

  // CineWatch logo/name click to homepage
  if (logoLink) {
    logoLink.addEventListener("click", (e) => {
      e.preventDefault(); // Prevent default link behavior
      window.location.href = "discover.html"; // Navigate to homepage
    });
  }

  // Search icon click to toggle search subheader
  searchIcon.addEventListener("click", (e) => {
    e.stopPropagation(); // Prevent document click from immediately closing it
    searchSubheader.classList.toggle("hidden");
    if (!searchSubheader.classList.contains("hidden")) {
      searchInput.focus();
      searchScope = null; // Reset scope when opening search bar
      searchInput.placeholder = "Search movies, shows..."; // Reset placeholder
      searchInput.value = ""; // Clear any previous input
      showPrimarySuggestions(); // Show primary search options
      // Close account dropdown if open
      accountDropdown.classList.remove('visible');
    } else {
      suggestionsBox.innerHTML = ""; // Clear suggestions when closing
      searchScope = null; // Ensure scope is reset
      searchInput.placeholder = "Search movies, shows..."; // Reset placeholder
    }
  });

  // Clear search input and reset scope
  clearSearch.addEventListener("click", (e) => {
    e.stopPropagation(); // Prevent document click from closing it
    searchInput.value = "";
    searchScope = null; // Reset current search scope
    searchInput.placeholder = "Search movies, shows..."; // Reset placeholder
    showPrimarySuggestions(); // Show initial search options
    searchInput.focus(); // Keep focus for user convenience
  });

  // Dark mode toggle
  darkModeToggle.addEventListener("click", () => {
    body.classList.toggle("dark-mode");
    localStorage.setItem('theme', body.classList.contains('dark-mode') ? 'dark' : 'light');
  });

  // Add to Watchlist icon (placeholder functionality)
  addIcon.addEventListener("click", () => {
    // showMessageBox is now global from app_core.js
    showMessageBox(userLoggedIn ? "Add to Watchlist functionality is coming soon!" : "You must be logged in to add shows!", "fas fa-info-circle");
  });

  // Account icon click to toggle dropdown
  accountIcon.addEventListener("click", (e) => {
      e.stopPropagation(); // Prevent document click from immediately closing it
      toggleAccountDropdown();
      // Close search subheader if open
      searchSubheader.classList.add('hidden');
  });

  // Click outside search subheader or account dropdown to close them
  document.addEventListener("click", e => {
    // Close search subheader if click is outside search area and not on search icon
    if (!searchSubheader.contains(e.target) && e.target !== searchIcon) {
      searchSubheader.classList.add("hidden");
      suggestionsBox.innerHTML = "";
      searchScope = null; // Reset scope
      searchInput.placeholder = "Search movies, shows..."; // Reset placeholder
    }
    // Close account dropdown if click is outside dropdown and not on account icon
    if (!accountDropdown.contains(e.target) && e.target !== accountIcon) {
        accountDropdown.classList.remove('visible');
    }
  });

  // Keyboard navigation for suggestions
  searchInput.addEventListener("keydown", e => {
    const items = Array.from(suggestionsBox.querySelectorAll(".suggestion-item"));
    if (items.length === 0) return; // No items to navigate

    if (e.key === "ArrowDown") {
      e.preventDefault(); // Prevent cursor from moving in input
      selectedIndex = (selectedIndex + 1) % items.length;
    } else if (e.key === "ArrowUp") {
      e.preventDefault(); // Prevent cursor from moving in input
      selectedIndex = (selectedIndex - 1 + items.length) % items.length;
    } else if (e.key === "Enter") {
      e.preventDefault(); // Prevent form submission
      if (selectedIndex >= 0) {
        items[selectedIndex].click(); // Simulate click on the selected item
      }
      return;
    } else if (e.key === "Escape") {
      searchSubheader.classList.add("hidden");
      searchScope = null; // Reset scope
      searchInput.placeholder = "Search movies, shows..."; // Reset placeholder
      return;
    }

    // Update background for selected item
    items.forEach((item, idx) => {
      item.style.backgroundColor = idx === selectedIndex ? "var(--search-bg)" : ""; // Use theme variable
    });
  });

  // Handle clicks on suggestions
  suggestionsBox.addEventListener("click", (e) => {
    const target = e.target.closest(".suggestion-item");
    if (!target) return;

    e.stopPropagation(); // IMPORTANT: Prevent document click from closing the search bar

    if (target.dataset.scope) {
      // User selected a primary search scope (e.g., "category", "genre")
      searchScope = target.dataset.scope; // Store the type, e.g., "category"
      searchInput.placeholder = `Search within: ${searchScope.charAt(0).toUpperCase() + searchScope.slice(1)}`;
      searchInput.value = ""; // Clear input after selecting scope
      suggestionsBox.innerHTML = ""; // Clear suggestions, wait for user to type
      searchInput.focus(); // Keep focus for immediate typing
    } else if (target.dataset.scopeType) {
      // User selected a specific value within a scope (e.g., "Hollywood" after "Category")
      const selectedValue = target.dataset.scopeValue;
      const scopeType = target.dataset.scopeType; // e.g., 'category'

      // Update the searchScope to include the specific value and its type
      searchScope = `${scopeType}:${selectedValue}`;
      searchInput.placeholder = `Searching within: ${selectedValue}`;
      searchInput.value = ""; // Clear input for the next search step

      // Immediately display shows filtered by this new scope
      renderShowTitleSuggestions("", searchScope); // Display all matching shows (empty query)
      searchInput.focus(); // Keep focus for refinement
    } else if (target.dataset.type === "show") {
      // User selected a specific show title (direct navigation)
      const title = target.dataset.title;
      window.location.href = `details.html?title=${title}`;
    }
    selectedIndex = -1; // Reset keyboard selection after click
  });

  // Handle input changes in the search bar
  searchInput.addEventListener("input", () => {
    selectedIndex = -1; // Reset keyboard selection on input
    const val = searchInput.value.trim();

    if (!searchScope) {
      // No search scope selected yet
      if (val === "") {
        showPrimarySuggestions(); // Show primary filters if input is empty
      } else {
        renderShowTitleSuggestions(val); // Directly search and suggest show titles
      }
    } else {
      // A search scope is active (e.g., "category" or "category:Hollywood")
      if (searchScope.includes(':')) {
        // If it's a specific filter (e.g., "category:Hollywood"), now search for show titles within that filter
        renderShowTitleSuggestions(val, searchScope);
      } else {
        // If it's just a primary type (e.g., "category"), show values for that type
        renderScopedValueSuggestions(val);
      }
    }
  });

  // Initial setup for dark mode based on localStorage
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
      body.classList.add('dark-mode');
  } else {
      body.classList.remove('dark-mode');
  }
});
