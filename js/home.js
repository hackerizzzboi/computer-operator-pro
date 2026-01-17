function homePage() {
  return `
    <div class="card">
      <h2><i class="fas fa-user-circle"></i> Welcome to Computer Operator Pro</h2>
      <p>Prepare smartly for Computer Operator 5th Level Examination with our comprehensive resources and tools.</p>
    </div>

    <div class="card-grid">
      <div class="card">
        <h3><i class="fas fa-calendar-alt"></i> Today's Stats</h3>
        <div class="stats-grid" style="margin: 20px 0;">
          <div class="stat-card">
            <div class="number" id="questionsSolved">0</div>
            <div class="label">Solved Today</div>
          </div>
          <div class="stat-card">
            <div class="number" id="streakDays">0</div>
            <div class="label">Day Streak</div>
          </div>
        </div>
        <div class="progress-bar">
          <div class="progress-fill" style="width: 65%"></div>
        </div>
        <p style="margin-top: 10px; font-size: 0.9rem;">Daily goal: 65% completed</p>
      </div>

      <div class="card">
        <h3><i class="fas fa-clock"></i> नेपाली मिति र समय</h3>
        <div id="nepaliClock" class="nepali-clock">
          Loading Nepali time...
        </div>
        <div id="englishClock" style="text-align: center; margin-top: 10px; color: var(--gray);">
          Loading English time...
        </div>
      </div>
    </div>

    <div class="updates-container">
      <h3><i class="fas fa-bullhorn"></i> लोक सेवा आयोग अपडेट्स</h3>
      <div id="loksewaUpdates">
        <div class="updates-list">
          <div class="update-item">
            <div class="update-date">२०८० माघ १५</div>
            <div class="update-title">सूचना प्रविधि सहायक पदको परीक्षा तिथि घोषणा</div>
            <div class="update-desc">कम्प्युटर अपरेटर ५थ स्तरको लिखित परीक्षा २०८० चैत्रमा हुने घोषणा</div>
          </div>
          <div class="update-item">
            <div class="update-date">२०८० माघ १०</div>
            <div class="update-title">सिलेबस परिवर्तन सूचना</div>
            <div class="update-desc">नयाँ सिलेबस अनुसार पाठ्यक्रममा केही परिवर्तन गरिएको छ</div>
          </div>
          <div class="update-item">
            <div class="update-date">२०८० पुष २८</div>
            <div class="update-title">भर्ना प्रक्रिया सुरु</div>
            <div class="update-desc">यस वर्षको भर्ना प्रक्रिया अर्को महिना देखि सुरु हुने</div>
          </div>
        </div>
      </div>
    </div>

    <div class="card">
      <h3><i class="fas fa-newspaper"></i> Latest News from Nepal</h3>
      <div id="newsContainer">
        Loading news...
      </div>
    </div>

    <div class="card-grid">
      <div class="card">
        <h3><i class="fas fa-fire"></i> Quick Actions</h3>
        <div style="display: flex; flex-direction: column; gap: 10px; margin-top: 20px;">
          <button class="btn" onclick="loadPage('mcq')" style="width: 100%; justify-content: center;">
            <i class="fas fa-play-circle"></i> Start Practice Test
          </button>
          <button class="btn" onclick="loadPage('videos')" style="width: 100%; justify-content: center; background: var(--accent);">
            <i class="fas fa-video"></i> Watch Latest Video
          </button>
          <button class="btn" onclick="loadPage('progress')" style="width: 100%; justify-content: center; background: var(--secondary);">
            <i class="fas fa-chart-bar"></i> View Progress Report
          </button>
        </div>
      </div>
      
      <div class="card">
        <h3><i class="fas fa-trophy"></i> Today's Challenge</h3>
        <p style="margin: 15px 0;">Complete 20 MCQ questions to unlock achievement!</p>
        <div class="progress-bar">
          <div class="progress-fill" style="width: 40%"></div>
        </div>
        <p style="margin-top: 10px; font-size: 0.9rem;">8/20 questions completed</p>
        <button class="btn" onclick="loadPage('mcq')" style="margin-top: 15px; width: 100%;">
          <i class="fas fa-bolt"></i> Continue Challenge
        </button>
      </div>
    </div>
  `;
}

// Update startNepaliClock function in app.js
function startNepaliClock() {
  const nepaliClock = document.getElementById("nepaliClock");
  const englishClock = document.getElementById("englishClock");
  
  if (!nepaliClock) return;
  
  // Nepali months and days
  const nepaliMonths = [
    "बैशाख", "जेठ", "असार", "श्रावण", "भदौ", "असोज", 
    "कार्तिक", "मंसिर", "पुष", "माघ", "फाल्गुन", "चैत्र"
  ];
  
  const nepaliDays = ["आइतबार", "सोमबार", "मंगलबार", "बुधबार", "बिहिबार", "शुक्रबार", "शनिबार"];
  
  function updateClocks() {
    const now = new Date();
    
    // English time
    const engOptions = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false
    };
    
    // Simulate Nepali time (add 15 minutes for Nepal time)
    const nepaliTime = new Date(now.getTime() + (5*60 + 45)*60*1000);
    
    // Calculate approximate Nepali date (this is simplified)
    const dayOfWeek = now.getDay();
    const day = now.getDate();
    const month = now.getMonth();
    const year = now.getFullYear() + 57; // Convert to BS
    
    const nepaliDate = `${nepaliDays[dayOfWeek]}, ${year} ${nepaliMonths[month]} ${day}`;
    
    // Format time in Nepali numerals
    const hours = String(nepaliTime.getHours()).padStart(2, '०');
    const minutes = String(nepaliTime.getMinutes()).padStart(2, '०');
    const seconds = String(nepaliTime.getSeconds()).padStart(2, '०');
    
    if (nepaliClock) {
      nepaliClock.innerHTML = `
        <div style="font-size: 1.4rem; margin-bottom: 5px;">${nepaliDate}</div>
        <div style="font-size: 1.8rem; font-weight: 700;">${hours}:${minutes}:${seconds}</div>
      `;
    }
    
    if (englishClock) {
      englishClock.textContent = now.toLocaleString('en-US', engOptions);
    }
  }
  
  updateClocks();
  setInterval(updateClocks, 1000);
  
  // Update stats
  const questionsSolved = document.getElementById('questionsSolved');
  const streakDays = document.getElementById('streakDays');
  
  if (questionsSolved) {
    const randomSolved = Math.floor(Math.random() * 20) + 5;
    questionsSolved.textContent = randomSolved;
    
    // Animate counting
    let count = 0;
    const interval = setInterval(() => {
      count++;
      questionsSolved.textContent = count;
      if (count >= randomSolved) clearInterval(interval);
    }, 50);
  }
  
  if (streakDays) {
    const randomStreak = Math.floor(Math.random() * 30) + 1;
    streakDays.textContent = randomStreak;
  }
}
