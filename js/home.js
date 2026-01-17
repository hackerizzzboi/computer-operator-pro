function homePage() {
  return `
    <!-- Welcome Card -->
    <div class="card">
      <h2><i class="fas fa-user-circle"></i> Welcome to Computer Operator Pro</h2>
      <p class="welcome-text">Prepare smartly for Computer Operator 5th Level Examination with our comprehensive resources and tools.</p>
      
      <div class="quick-actions">
        <a class="quick-action-btn" onclick="loadPage('mcq')">
          <i class="fas fa-play-circle" style="color: var(--primary);"></i>
          <span>Start Practice</span>
        </a>
        <a class="quick-action-btn" onclick="loadPage('videos')">
          <i class="fas fa-video" style="color: var(--secondary);"></i>
          <span>Watch Videos</span>
        </a>
        <a class="quick-action-btn" onclick="loadPage('progress')">
          <i class="fas fa-chart-bar" style="color: var(--accent);"></i>
          <span>View Progress</span>
        </a>
        <a class="quick-action-btn" onclick="loadPage('premium')">
          <i class="fas fa-crown" style="color: var(--warning);"></i>
          <span>Go Premium</span>
        </a>
      </div>
    </div>

    <!-- Stats and Clock Grid -->
    <div class="card-grid">
      <!-- Today's Stats Card -->
      <div class="card">
        <h3><i class="fas fa-chart-line"></i> Today's Stats</h3>
        <div class="stats-rings">
          <div class="ring-container">
            <svg class="progress-ring" width="140" height="140">
              <circle class="progress-ring-circle" stroke="#6366f1" stroke-width="10" fill="transparent" r="60" cx="70" cy="70"/>
            </svg>
            <div class="ring-content">
              <span class="ring-value" id="questionsSolved">14</span>
              <span class="ring-label">Solved Today</span>
            </div>
          </div>
          
          <div class="ring-container">
            <svg class="progress-ring" width="140" height="140">
              <circle class="progress-ring-circle" stroke="#10b981" stroke-width="10" fill="transparent" r="60" cx="70" cy="70"/>
            </svg>
            <div class="ring-content">
              <span class="ring-value" id="streakDays">28</span>
              <span class="ring-label">Day Streak</span>
            </div>
          </div>
        </div>
        
        <!-- Goal Tracker -->
        <div class="goal-tracker">
          <div class="goal-header">
            <span>Daily Goal Progress</span>
            <span class="goal-percentage">65%</span>
          </div>
          <div class="goal-progress">
            <div class="progress-fill animated">
              <div class="progress-sparkles"></div>
            </div>
          </div>
          <div class="goal-stats">
            <span>13/20 questions</span>
            <span class="time-left">2h 30m remaining</span>
          </div>
        </div>
      </div>

      <!-- Enhanced Nepali Clock with 3D Effects -->
      <div class="card">
        <h3><i class="fas fa-clock"></i> नेपाली मिति र समय</h3>
        <div class="clock-3d">
          <div class="nepali-date-display">
            <div class="date-badge">
              <span class="day-name" id="nepaliDay">हानिबार</span>
              <div class="date-main">
                <span class="date-number" id="nepaliDate">१७</span>
                <div class="date-details">
                  <span class="month" id="nepaliMonth">वैशाख</span>
                  <span class="year" id="nepaliYear">२०८३</span>
                </div>
              </div>
            </div>
            <div class="time-display">
              <div class="time-segment">
                <div class="digit" id="nepaliHours">०२</div>
                <span class="label">घण्टा</span>
              </div>
              <div class="colon">:</div>
              <div class="time-segment">
                <div class="digit" id="nepaliMinutes">०४</div>
                <span class="label">मिनेट</span>
              </div>
              <div class="colon">:</div>
              <div class="time-segment">
                <div class="digit" id="nepaliSeconds">१०</div>
                <span class="label">सेकेन्ड</span>
              </div>
            </div>
          </div>
        </div>
        <div id="englishClock" style="text-align: center; margin-top: 20px; color: var(--gray); font-size: 0.9rem;">
          Loading English time...
        </div>
      </div>
    </div>

    <!-- AI Study Assistant -->
    <div class="ai-assistant">
      <div class="ai-header">
        <div class="ai-avatar">
          <div class="ai-pulse"></div>
          <i class="fas fa-robot"></i>
        </div>
        <div class="ai-info">
          <h4>Study Assistant</h4>
          <p>AI-powered recommendations based on your progress</p>
        </div>
        <div class="ai-status">
          <span class="status-dot active"></span>
          <span>Online</span>
        </div>
      </div>
      
      <div class="ai-recommendations">
        <div class="recommendation active" onclick="loadPage('mcq')">
          <i class="fas fa-brain"></i>
          <span>Focus on Database Management - 35% weak</span>
        </div>
        <div class="recommendation" onclick="loadPage('videos')">
          <i class="fas fa-clock"></i>
          <span>Watch 2 videos to complete daily goal</span>
        </div>
        <div class="recommendation" onclick="loadPage('progress')">
          <i class="fas fa-chart-line"></i>
          <span>Your accuracy improved by 12% this week</span>
        </div>
      </div>
    </div>

    <!-- Leaderboard -->
    <div class="leaderboard">
      <div class="leaderboard-header">
        <h4><i class="fas fa-trophy"></i> Live Leaderboard</h4>
        <span class="refresh-btn" onclick="refreshLeaderboard()">
          <i class="fas fa-sync-alt"></i>
        </span>
      </div>
      
      <div class="leaderboard-list" id="leaderboardContent">
        <div class="leaderboard-item you">
          <div class="rank">#4</div>
          <div class="user">
            <div class="avatar">You</div>
            <div class="user-info">
              <span class="name">Your Progress</span>
              <span class="score">2,450 points</span>
            </div>
          </div>
          <div class="trend up">↑ 2</div>
        </div>
        <!-- More items will be loaded dynamically -->
      </div>
    </div>

    <!-- Study Timeline -->
    <div class="study-timeline">
      <div class="timeline-header">
        <h4><i class="fas fa-road"></i> Your Study Journey</h4>
        <div class="timeline-stats">
          <span>45% Complete</span>
          <span>28/62 days</span>
        </div>
      </div>
      
      <div class="timeline-track">
        <div class="timeline-milestones">
          <div class="milestone completed">
            <div class="milestone-dot">
              <i class="fas fa-check"></i>
            </div>
            <span>Syllabus Review</span>
          </div>
          <div class="milestone current">
            <div class="milestone-dot pulse">
              <i class="fas fa-play"></i>
            </div>
            <span>MCQ Practice</span>
          </div>
          <div class="milestone">
            <div class="milestone-dot">
              <i class="fas fa-flag"></i>
            </div>
            <span>Mock Tests</span>
          </div>
          <div class="milestone">
            <div class="milestone-dot">
              <i class="fas fa-graduation-cap"></i>
            </div>
            <span>Final Review</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Loksewa Updates -->
    <div class="updates-container">
      <h3><i class="fas fa-bullhorn"></i> लोक सेवा आयोग अपडेट्स</h3>
      <div id="loksewaUpdates">
        <div class="updates-list">
          <div class="update-item" onclick="window.open('https://psc.gov.np', '_blank')">
            <div class="update-date">
              <i class="far fa-calendar"></i> २०८० माघ १५
            </div>
            <div class="update-title">सूचना प्रविधि सहायक पदको परीक्षा तिथि घोषणा</div>
            <div class="update-desc">कम्प्युटर अपरेटर ५थ स्तरको लिखित परीक्षा २०८० चैत्रमा हुने घोषणा</div>
          </div>
          <div class="update-item" onclick="window.open('https://psc.gov.np/notice', '_blank')">
            <div class="update-date">
              <i class="far fa-calendar"></i> २०८० माघ १०
            </div>
            <div class="update-title">सिलेबस परिवर्तन सूचना</div>
            <div class="update-desc">नयाँ सिलेबस अनुसार पाठ्यक्रममा केही परिवर्तन गरिएको छ</div>
          </div>
          <div class="update-item" onclick="window.open('https://psc.gov.np', '_blank')">
            <div class="update-date">
              <i class="far fa-calendar"></i> २०८० पुष २८
            </div>
            <div class="update-title">भर्ना प्रक्रिया सुरु</div>
            <div class="update-desc">यस वर्षको भर्ना प्रक्रिया अर्को महिना देखि सुरु हुने</div>
          </div>
        </div>
      </div>
    </div>

    <!-- Latest News -->
    <div class="card">
      <h3><i class="fas fa-newspaper"></i> Latest News from Nepal</h3>
      <div id="newsContainer">
        <div class="loading-spinner" style="margin: 40px auto;"></div>
      </div>
    </div>

    <!-- Today's Challenge -->
    <div class="card">
      <h3><i class="fas fa-trophy"></i> Today's Challenge</h3>
      <p style="margin: 20px 0;">Complete 20 MCQ questions to unlock the <span class="text-gradient">Golden Badge</span>!</p>
      
      <div class="stats-rings" style="margin: 30px 0;">
        <div class="ring-container">
          <svg class="progress-ring" width="120" height="120">
            <circle class="progress-ring-circle" stroke="#f59e0b" stroke-width="8" fill="transparent" r="50" cx="60" cy="60"/>
          </svg>
          <div class="ring-content">
            <span class="ring-value">8</span>
            <span class="ring-label">Completed</span>
          </div>
        </div>
        
        <div class="ring-container">
          <svg class="progress-ring" width="120" height="120">
            <circle class="progress-ring-circle" stroke="#10b981" stroke-width="8" fill="transparent" r="50" cx="60" cy="60"/>
          </svg>
          <div class="ring-content">
            <span class="ring-value">12</span>
            <span class="ring-label">Remaining</span>
          </div>
        </div>
      </div>
      
      <div class="goal-progress" style="height: 8px; margin: 20px 0;">
        <div class="progress-fill" style="background: linear-gradient(90deg, #f59e0b, #10b981); width: 40%;"></div>
      </div>
      
      <button class="btn" onclick="loadPage('mcq')" style="width: 100%; margin-top: 20px; background: linear-gradient(135deg, #f59e0b, #ef4444);">
        <i class="fas fa-bolt"></i> Continue Challenge
      </button>
    </div>
  `;
}

// Enhanced Nepali Clock Function
function startNepaliClock() {
  const nepaliMonths = [
    "वैशाख", "जेठ", "असार", "श्रावण", "भदौ", "असोज", 
    "कार्तिक", "मंसिर", "पुष", "माघ", "फाल्गुन", "चैत्र"
  ];
  
  const nepaliDays = ["आइतबार", "सोमबार", "मंगलबार", "बुधबार", "बिहिबार", "शुक्रबार", "शनिबार"];
  
  const englishMonths = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  
  const englishDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  
  function convertToNepaliNumerals(number) {
    const nepaliNumerals = ['०', '१', '२', '३', '४', '५', '६', '७', '८', '९'];
    return number.toString().split('').map(digit => nepaliNumerals[parseInt(digit)] || digit).join('');
  }
  
  function updateClock() {
    const now = new Date();
    
    // Get Nepal Time (UTC+5:45)
    const nepalOffset = 5.75 * 60 * 60 * 1000;
    const nepalTime = new Date(now.getTime() + nepalOffset);
    
    // Get English time
    const englishDay = englishDays[now.getDay()];
    const englishDate = now.getDate();
    const englishMonth = englishMonths[now.getMonth()];
    const englishYear = now.getFullYear();
    const englishHours = String(now.getHours()).padStart(2, '0');
    const englishMinutes = String(now.getMinutes()).padStart(2, '0');
    const englishSeconds = String(now.getSeconds()).padStart(2, '0');
    
    // Calculate Nepali date (simplified approximation)
    // Note: This is a simplified conversion. For accurate conversion, use a proper library
    const dayIndex = now.getDay();
    const nepaliDay = nepaliDays[dayIndex];
    
    // Simulate Nepali date progression (adding days to a base Nepali date)
    const baseNepaliDate = new Date(2024, 0, 17); // Base date
    const daysDiff = Math.floor((now - baseNepaliDate) / (1000 * 60 * 60 * 24));
    
    let nepaliDayNum = 17 + daysDiff;
    let nepaliMonthIndex = 0; // Baishakh
    let nepaliYearNum = 2080;
    
    // Simple month adjustment (30 days per month for simplicity)
    const nepaliMonthDays = 30;
    if (nepaliDayNum > nepaliMonthDays) {
      nepaliMonthIndex = Math.floor((nepaliDayNum - 1) / nepaliMonthDays);
      nepaliDayNum = ((nepaliDayNum - 1) % nepaliMonthDays) + 1;
    }
    
    // Year adjustment
    if (nepaliMonthIndex >= 12) {
      nepaliYearNum += Math.floor(nepaliMonthIndex / 12);
      nepaliMonthIndex = nepaliMonthIndex % 12;
    }
    
    // Update DOM elements
    const elements = {
      nepaliDay: document.getElementById('nepaliDay'),
      nepaliDate: document.getElementById('nepaliDate'),
      nepaliMonth: document.getElementById('nepaliMonth'),
      nepaliYear: document.getElementById('nepaliYear'),
      nepaliHours: document.getElementById('nepaliHours'),
      nepaliMinutes: document.getElementById('nepaliMinutes'),
      nepaliSeconds: document.getElementById('nepaliSeconds'),
      englishClock: document.getElementById('englishClock')
    };
    
    if (elements.nepaliDay) elements.nepaliDay.textContent = nepaliDay;
    if (elements.nepaliDate) elements.nepaliDate.textContent = convertToNepaliNumerals(nepaliDayNum);
    if (elements.nepaliMonth) elements.nepaliMonth.textContent = nepaliMonths[nepaliMonthIndex];
    if (elements.nepaliYear) elements.nepaliYear.textContent = convertToNepaliNumerals(nepaliYearNum);
    
    // Get Nepal time (UTC+5:45)
    const hours = now.getUTCHours() + 5;
    const minutes = now.getUTCMinutes() + 45;
    const seconds = now.getUTCSeconds();
    
    let nepaliHours = hours;
    if (minutes >= 60) {
      nepaliHours += 1;
    }
    nepaliHours = nepaliHours % 24;
    
    const nepaliMinutes = minutes % 60;
    const nepaliSeconds = seconds;
    
    if (elements.nepaliHours) elements.nepaliHours.textContent = convertToNepaliNumerals(String(nepaliHours).padStart(2, '0'));
    if (elements.nepaliMinutes) elements.nepaliMinutes.textContent = convertToNepaliNumerals(String(nepaliMinutes).padStart(2, '0'));
    if (elements.nepaliSeconds) elements.nepaliSeconds.textContent = convertToNepaliNumerals(String(nepaliSeconds).padStart(2, '0'));
    
    if (elements.englishClock) {
      elements.englishClock.innerHTML = `
        <div style="margin-bottom: 5px;">${englishDay}, ${englishMonth} ${englishDate}, ${englishYear}</div>
        <div style="font-weight: 600; color: var(--primary);">${englishHours}:${englishMinutes}:${englishSeconds}</div>
      `;
    }
    
    // Animate the digits
    animateDigits();
  }
  
  function animateDigits() {
    const digits = document.querySelectorAll('.digit');
    digits.forEach(digit => {
      digit.style.transform = 'rotateX(5deg)';
      setTimeout(() => {
        digit.style.transform = 'rotateX(0deg)';
      }, 300);
    });
  }
  
  updateClock();
  const clockInterval = setInterval(updateClock, 1000);
  
  // Animate progress rings
  animateProgressRings();
  
  // Initialize live stats
  initLiveStats();
  
  // Load leaderboard
  loadLeaderboard();
  
  return () => clearInterval(clockInterval);
}

function animateProgressRings() {
  const rings = document.querySelectorAll('.progress-ring-circle');
  rings.forEach((ring, index) => {
    const radius = ring.r.baseVal.value;
    const circumference = radius * 2 * Math.PI;
    
    ring.style.strokeDasharray = `${circumference} ${circumference}`;
    ring.style.strokeDashoffset = circumference;
    
    // Animate to different values
    const progress = index === 0 ? 0.7 : 0.8; // 70% and 80%
    const offset = circumference - (progress * circumference);
    
    setTimeout(() => {
      ring.style.transition = 'stroke-dashoffset 1.5s ease';
      ring.style.strokeDashoffset = offset;
    }, 500 + (index * 200));
  });
}

function initLiveStats() {
  // Animate question count
  const questionsElement = document.getElementById('questionsSolved');
  if (questionsElement) {
    let count = 0;
    const target = parseInt(questionsElement.textContent);
    const increment = target / 50;
    
    const timer = setInterval(() => {
      count += increment;
      if (count >= target) {
        count = target;
        clearInterval(timer);
      }
      questionsElement.textContent = Math.floor(count);
    }, 20);
  }
  
  // Update goal progress animation
  const progressFill = document.querySelector('.progress-fill.animated');
  if (progressFill) {
    setTimeout(() => {
      progressFill.style.width = '65%';
    }, 1000);
  }
}

function loadLeaderboard() {
  const leaderboardContent = document.getElementById('leaderboardContent');
  if (!leaderboardContent) return;
  
  const leaderboardData = [
    { rank: 1, name: "Rajesh Sharma", score: "3,850", trend: "up", avatar: "RS" },
    { rank: 2, name: "Sunita Rai", score: "3,420", trend: "down", avatar: "SR" },
    { rank: 3, name: "Anil Karki", score: "3,150", trend: "up", avatar: "AK" },
    { rank: 5, name: "Bina Thapa", score: "2,380", trend: "up", avatar: "BT" },
    { rank: 6, name: "Ramesh Gurung", score: "2,150", trend: "down", avatar: "RG" }
  ];
  
  let html = '';
  leaderboardData.forEach(item => {
    html += `
      <div class="leaderboard-item">
        <div class="rank">#${item.rank}</div>
        <div class="user">
          <div class="avatar">${item.avatar}</div>
          <div class="user-info">
            <span class="name">${item.name}</span>
            <span class="score">${item.score} points</span>
          </div>
        </div>
        <div class="trend ${item.trend}">${item.trend === 'up' ? '↑' : '↓'} 1</div>
      </div>
    `;
  });
  
  leaderboardContent.innerHTML += html;
}

function refreshLeaderboard() {
  const refreshBtn = document.querySelector('.refresh-btn');
  if (refreshBtn) {
    refreshBtn.style.animation = 'spin 0.5s linear';
    setTimeout(() => {
      refreshBtn.style.animation = '';
      // In a real app, you would fetch new data here
    }, 500);
  }
}

// Enhanced news loader with fallback
async function loadNepaliNews() {
  const container = document.getElementById("newsContainer");
  if (!container) return;

  try {
    // Try to fetch real news
    const response = await fetch('https://api.rss2json.com/v1/api.json?rss_url=https://thehimalayantimes.com/feed/');
    
    if (!response.ok) throw new Error('Network response was not ok');
    
    const data = await response.json();
    
    if (data.items && data.items.length > 0) {
      let html = '<div class="news-grid">';
      
      data.items.slice(0, 4).forEach((item, index) => {
        const title = item.title || 'No title';
        const link = item.link || '#';
        const pubDate = item.pubDate ? new Date(item.pubDate).toLocaleDateString('en-NP') : 'Recent';
        const description = item.description ? item.description.replace(/<[^>]*>/g, '').substring(0, 100) + '...' : '';
        
        html += `
          <div class="news-card" style="animation-delay: ${index * 0.1}s">
            <h4>${title}</h4>
            <p><i class="far fa-clock"></i> ${pubDate}</p>
            ${description ? `<p style="margin: 10px 0; font-size: 0.9rem;">${description}</p>` : ''}
            <a href="${link}" target="_blank" rel="noopener noreferrer">
              <i class="fas fa-external-link-alt"></i> Read Full Story
            </a>
          </div>
        `;
      });
      
      html += '</div>';
      container.innerHTML = html;
    } else {
      throw new Error('No news items found');
    }
    
  } catch (error) {
    console.log('Using fallback news data:', error);
    
    // Fallback news data
    const fallbackNews = [
      {
        title: "Computer Operator Exam Preparation Tips",
        date: "1 hour ago",
        description: "Expert tips for acing the Computer Operator exam",
        link: "#"
      },
      {
        title: "New Syllabus Updates for 2080",
        date: "3 hours ago",
        description: "Important changes in the syllabus for upcoming exams",
        link: "#"
      },
      {
        title: "Digital Literacy Program Launched",
        date: "5 hours ago",
        description: "Government launches new digital literacy initiative",
        link: "#"
      },
      {
        title: "Tech Jobs in Government Sector",
        date: "Yesterday",
        description: "Growing opportunities for IT professionals in government",
        link: "#"
      }
    ];
    
    let html = '<div class="news-grid">';
    fallbackNews.forEach((news, index) => {
      html += `
        <div class="news-card" style="animation-delay: ${index * 0.1}s">
          <h4>${news.title}</h4>
          <p><i class="far fa-clock"></i> ${news.date}</p>
          <p style="margin: 10px 0; font-size: 0.9rem; color: var(--gray);">${news.description}</p>
          <a href="${news.link}" onclick="return false;">
            <i class="fas fa-external-link-alt"></i> Read More
          </a>
        </div>
      `;
    });
    html += '</div>';
    
    container.innerHTML = html;
  }
}

// Add this to app.js to make sure functions are available globally
window.refreshLeaderboard = refreshLeaderboard;
window.startNepaliClock = startNepaliClock;
window.loadNepaliNews = loadNepaliNews;
