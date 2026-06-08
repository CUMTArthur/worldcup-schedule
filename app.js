// ==========================================================================
// 1. 数据定义：巴萨世界杯国脚与赛程数据 (2026美加墨世界杯背景)
// ==========================================================================

// 10位出征世界杯的巴萨主力球员数据 (头像使用高精度免版权球员真实肖像照片)
const BARCA_PLAYERS = [
  { id: 'olmo', name: '奥尔莫', engName: 'Dani Olmo', num: 20, pos: '前锋', country: '西班牙', flag: '🇪🇸', photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop' },
  { id: 'pedri', name: '佩德里', engName: 'Pedri', num: 26, pos: '中场', country: '西班牙', flag: '🇪🇸', photo: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=150&h=150&fit=crop' },
  { id: 'gavi', name: '加维', engName: 'Gavi', num: 6, pos: '中场', country: '西班牙', flag: '🇪🇸', photo: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop' },
  { id: 'lewy', name: '莱万多夫斯基', engName: 'Lewandowski', num: 9, pos: '前锋', country: '波兰', flag: '🇵🇱', photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop' },
  { id: 'dejong', name: '德容', engName: 'Frenkie de Jong', num: 21, pos: '中场', country: '荷兰', flag: '🇳🇱', photo: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&h=150&fit=crop' },
  { id: 'stegen', name: '特尔施特根', engName: 'Ter Stegen', num: 1, pos: '门将', country: '德国', flag: '🇩🇪', photo: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=150&h=150&fit=crop' },
  { id: 'kounde', name: '孔德', engName: 'Jules Kounde', num: 23, pos: '后卫', country: '法国', flag: '🇫🇷', photo: 'https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?w=150&h=150&fit=crop' },
  { id: 'raphinha', name: '拉菲尼亚', engName: 'Raphinha', num: 11, pos: '前锋', country: '巴西', flag: '🇧🇷', photo: 'https://images.unsplash.com/photo-1513956589380-bad6acb9b9d4?w=150&h=150&fit=crop' },
  { id: 'araujo', name: '阿劳霍', engName: 'Ronald Araujo', num: 4, pos: '后卫', country: '乌拉圭', flag: '🇺🇾', photo: 'https://images.unsplash.com/photo-1504257404764-5a9b0ad04e28?w=150&h=150&fit=crop' },
  { id: 'christensen', name: '克里斯滕森', engName: 'Christensen', num: 15, pos: '后卫', country: '丹麦', flag: '🇩🇰', photo: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=150&h=150&fit=crop' }
];

// 2026年6月世界杯小组赛首轮赛程数据 (含完赛/比分与未开赛状态)
const WC_SCHEDULE = [
  {
    id: 'm3',
    date: '06月12日 星期五',
    time: '20:00',
    stage: '🔥 世界杯小组赛 B组第1轮',
    teamA: '西班牙',
    flagA: '🇪🇸',
    teamB: '克罗地亚',
    flagB: '🇭🇷',
    platform: 'CCTV5',
    hotTip: '斗牛士青年军阻击狂想曲，西班牙巴萨三杰迎来世界杯大考！',
    barcaStars: ['olmo', 'pedri', 'gavi'],
    status: 'finished', // 已完赛
    scoreA: 3,
    scoreB: 0
  },
  {
    id: 'm6',
    date: '06月13日 星期六',
    time: '18:00',
    stage: '🔥 世界杯小组赛 C组第1轮',
    teamA: '德国',
    flagA: '🇩🇪',
    teamB: '乌拉圭',
    flagB: '🇺🇾',
    platform: 'CCTV5',
    hotTip: '巴萨德比打响！德意志战车碰撞南美坚冰！',
    barcaStars: ['stegen', 'araujo'],
    status: 'finished', // 已完赛
    scoreA: 1,
    scoreB: 2
  },
  {
    id: 'm_holland',
    date: '06月13日 星期六',
    time: '22:00',
    stage: '🔥 世界杯小组赛 A组第1轮',
    teamA: '荷兰',
    flagA: '🇳🇱',
    teamB: '塞内加尔',
    flagB: '🇸🇳',
    platform: 'CCTV5',
    hotTip: '德容回归领衔橙衣军团中场，防线铁闸直面非洲雄狮冲击',
    barcaStars: ['dejong'],
    status: 'upcoming' // 未开赛
  },
  {
    id: 'm7',
    date: '06月14日 星期日',
    time: '03:00',
    stage: '🔥 世界杯小组赛 D组第1轮',
    teamA: '法国',
    flagA: '🇫🇷',
    teamB: '波兰',
    flagB: '🇵🇱',
    platform: 'CCTV5',
    hotTip: '卫冕热门迎击东欧铁骑，姆巴佩搭档孔德联手合围莱万多夫斯基',
    barcaStars: ['kounde', 'lewy'],
    status: 'upcoming' // 未开赛
  },
  {
    id: 'm8',
    date: '06月14日 星期日',
    time: '09:00',
    stage: '🔥 世界杯小组赛 E组第1轮',
    teamA: '巴西',
    flagA: '🇧🇷',
    teamB: '丹麦',
    flagB: '🇩🇰',
    platform: 'CCTV5',
    hotTip: '桑巴军团揭开神秘面纱，防线领袖克里斯滕森全力盯防拉菲尼亚',
    barcaStars: ['raphinha', 'christensen'],
    status: 'upcoming' // 未开赛
  }
];

// 动态计算海报及赛程中的巴萨球星出征备注文案列表
// 只是一边有球员：['佩德里、加维（西班牙）']
// 两边都有球员：['佩德里、加维（西班牙）', '阿劳霍（乌拉圭）']
function getBarcaStarsRemarkList(match) {
  const starsA = [];
  const starsB = [];
  match.barcaStars.forEach(starId => {
    const player = BARCA_PLAYERS.find(p => p.id === starId);
    if (player) {
      if (player.country === match.teamA) {
        starsA.push(player.name);
      } else if (player.country === match.teamB) {
        starsB.push(player.name);
      }
    }
  });

  const list = [];
  
  // 格式化单侧球员列表：超出 3 个球员时进行名字缩略，保留完整的国籍名
  const formatSide = (stars, teamName) => {
    if (stars.length === 0) return '';
    let text = stars.join('、');
    if (stars.length > 3) {
      text = stars.slice(0, 3).join('、') + '...';
    }
    return `${text}（${teamName}）`;
  };

  const textA = formatSide(starsA, match.teamA);
  const textB = formatSide(starsB, match.teamB);

  if (textA) list.push(textA);
  if (textB) list.push(textB);

  return list;
}

// ==========================================================================
// 2. 界面视图控制器及交互逻辑
// ==========================================================================

let currentCountryFilter = 'all'; // 横滑筛选国家

// 页面加载完毕后初始化
document.addEventListener('DOMContentLoaded', () => {
  initStatusBarTime();
  initViewRouting();
  renderPlayersWall();
  renderCountryFilterBar();
  renderScheduleTimeline();
  initPosterActions();
  initPrdMode(); // 新增：PRD对照模式初始化
  
  // 状态栏时间自动刷新
  setInterval(initStatusBarTime, 60000);
});

// 状态栏系统时间显示
function initStatusBarTime() {
  const timeEl = document.getElementById('status-time');
  if (timeEl) {
    const now = new Date();
    let hrs = now.getHours();
    let mins = now.getMinutes();
    hrs = hrs < 10 ? '0' + hrs : hrs;
    mins = mins < 10 ? '0' + mins : mins;
    timeEl.textContent = `${hrs}:${mins}`;
  }
}

// 视图路由管理 (滑入滑出)
function initViewRouting() {
  const btnGotoSpecial = document.getElementById('btn-goto-special');
  const btnBackToProfile = document.getElementById('btn-back-to-profile');
  const viewProfile = document.getElementById('view-profile');
  const viewWorldcup = document.getElementById('view-worldcup');
  const appBottomBar = document.getElementById('app-bottom-bar');

  // 进入世界杯专页
  btnGotoSpecial.addEventListener('click', () => {
    viewProfile.classList.add('inactive');
    viewWorldcup.classList.add('active');
    // 全屏专页模式隐藏底栏，体验更沉浸
    appBottomBar.style.display = 'none';
  });

  // 返回俱乐部资料页
  btnBackToProfile.addEventListener('click', () => {
    viewWorldcup.classList.remove('active');
    viewProfile.classList.remove('inactive');
    appBottomBar.style.display = 'flex';
  });
}

// ==========================================================================
// 3. 页面数据动态渲染
// ==========================================================================

// 渲染国家队横滑筛选栏
function renderCountryFilterBar() {
  const bar = document.getElementById('country-filter-bar');
  if (!bar) return;
  
  const countries = [
    { key: 'all', name: '全部', flag: '🌍', desc: '' },
    { key: '西班牙', name: '西班牙', flag: '🇪🇸' },
    { key: '荷兰', name: '荷兰', flag: '🇳🇱' },
    { key: '德国', name: '德国', flag: '🇩🇪' },
    { key: '法国', name: '法国', flag: '🇫🇷' },
    { key: '波兰', name: '波兰', flag: '🇵🇱' },
    { key: '巴西', name: '巴西', flag: '🇧🇷' },
    { key: '乌拉圭', name: '乌拉圭', flag: '🇺🇾' },
    { key: '丹麦', name: '丹麦', flag: '🇩🇰' }
  ];

  // 动态统计每个国家的出征球员人数
  countries.forEach(c => {
    if (c.key !== 'all') {
      const count = BARCA_PLAYERS.filter(p => p.country === c.key).length;
      c.desc = `${count}人`;
    }
  });
  
  bar.innerHTML = '';
  countries.forEach(c => {
    const item = document.createElement('div');
    item.className = `country-filter-item ${currentCountryFilter === c.key ? 'active' : ''}`;
    item.setAttribute('data-country', c.key);
    
    item.innerHTML = `
      ${c.flag} ${c.name}
      ${c.desc ? `<small>(${c.desc})</small>` : ''}
    `;
    
    item.addEventListener('click', () => {
      currentCountryFilter = c.key;
      document.querySelectorAll('.country-filter-item').forEach(el => el.classList.remove('active'));
      item.classList.add('active');
      renderScheduleTimeline();
      showToast(`已为您筛选 ${c.name} 队的世界杯赛程`);
    });
    
    bar.appendChild(item);
  });
}

// 渲染出征国脚墙
function renderPlayersWall() {
  const grid = document.querySelector('.players-wall-grid');
  grid.innerHTML = '';

  BARCA_PLAYERS.forEach(player => {
    const card = document.createElement('div');
    card.className = 'player-avatar-card';
    card.setAttribute('data-id', player.id);
    
    card.innerHTML = `
      <div class="player-photo-wrapper">
        <img class="player-photo-img" src="${player.photo}" alt="${player.name}" crossorigin="anonymous">
        <div class="country-flag-badge">${player.flag}</div>
      </div>
      <div class="player-name-cn">${player.name}</div>
      <div class="player-role-info">${player.pos}</div>
    `;

    // 绑定点击直接跳转到站内球员资料页 (Toast 模拟)
    card.addEventListener('click', () => {
      showToast(`正在跳转到直播吧站内 [${player.name}] 球员资料页...`);
    });

    grid.appendChild(card);
  });
}

// 渲染世界杯赛程表 (完全沿用已有赛程样式)
function renderScheduleTimeline() {
  const container = document.getElementById('schedule-list-container');
  container.innerHTML = '';

  // 1. 根据当前横滑选中的国家过滤赛程
  let filteredSchedule = WC_SCHEDULE;
  if (currentCountryFilter !== 'all') {
    filteredSchedule = WC_SCHEDULE.filter(match => {
      return match.teamA === currentCountryFilter || match.teamB === currentCountryFilter;
    });
  }

  // 2. 按日期分组渲染
  const grouped = {};
  filteredSchedule.forEach(match => {
    if (!grouped[match.date]) {
      grouped[match.date] = [];
    }
    grouped[match.date].push(match);
  });

  if (filteredSchedule.length === 0) {
    container.innerHTML = `<div style="text-align:center; padding: 40px; color:#999; font-size:12px;">暂无该国家的比赛赛程</div>`;
    return;
  }

  for (const date in grouped) {
    const dateGroup = document.createElement('div');
    dateGroup.className = 'schedule-date-group';

    // 日期头部
    dateGroup.innerHTML = `
      <div class="schedule-date-header">
        <span class="date-text">${date}</span>
      </div>
    `;

    // 日期下的各个赛程卡片 (极简卡片加入双行国脚出征备注)
    grouped[date].forEach(match => {
      const card = document.createElement('div');
      card.className = 'schedule-card';
      card.setAttribute('id', `card-${match.id}`);

      // 获取当前比赛的球星出征备注文案（双行）
      const remarkList = getBarcaStarsRemarkList(match);
      const starsBarHtml = remarkList.length > 0 
        ? `<div class="card-barca-stars-bar">
            ${remarkList.map(text => `<div class="stars-desc-text">🔵🔴 ${text}</div>`).join('')}
           </div>`
        : '';

      card.innerHTML = `
        <!-- 卡片上方时间与阶段 -->
        <div class="card-top-info">
          <span class="match-time">${match.time}</span>
          <span class="match-stage">${match.stage}</span>
        </div>
        
        <!-- 卡片中间对阵双方 -->
        <div class="card-match-vs-area" style="padding: 12px 14px 16px 14px;">
          <div class="vs-team team-left">
            <span class="team-name">${match.teamA}</span>
            <span class="team-flag-emoji">${match.flagA}</span>
          </div>
          
          <div class="vs-center-action">
            ${match.status === 'finished' 
              ? `<span class="match-score">${match.scoreA} : ${match.scoreB}</span>`
              : `<span style="font-family: var(--font-numeric); font-size: 13px; font-weight: 800; color: #CFD8DC; letter-spacing: 0.5px;">VS</span>`
            }
          </div>
          
          <div class="vs-team team-right">
            <span class="team-flag-emoji">${match.flagB}</span>
            <span class="team-name">${match.teamB}</span>
          </div>
        </div>
        
        <!-- 动态巴萨球星出征备注 -->
        ${starsBarHtml}
      `;

      dateGroup.appendChild(card);
    });

    container.appendChild(dateGroup);
  }
}

// 模拟一键预约
window.toggleAlarm = function(matchId, event) {
  event.stopPropagation();
  const bell = event.currentTarget;
  const isCurrentlySet = bell.classList.contains('alarm-set');
  
  if (isCurrentlySet) {
    bell.classList.remove('alarm-set');
    localStorage.setItem(`alarm-${matchId}`, 'false');
    showToast('已取消该场比赛的开赛提醒');
  } else {
    bell.classList.add('alarm-set');
    localStorage.setItem(`alarm-${matchId}`, 'true');
    const match = WC_SCHEDULE.find(m => m.id === matchId);
    showToast(`🔔 预约成功！${match.teamA} vs ${match.teamB} 开赛前15分钟将提醒您`);
  }
}

// ==========================================================================
// 4. 球员大名单弹窗渲染 (已废弃，直接跳转站内球员页)
// ==========================================================================

// ==========================================================================
// 5. HTML5 Canvas 高清海报生成与分享
// ==========================================================================

const posterModal = document.getElementById('poster-share-modal');
const generatedImg = document.getElementById('generated-poster-img');
const loader = document.getElementById('poster-loader');

function initPosterActions() {
  const btnOpenPoster = document.getElementById('btn-open-poster');
  const btnBottomShare = document.getElementById('btn-bottom-share');
  const btnClosePoster = document.getElementById('btn-close-poster-modal');
  const btnDownload = document.getElementById('btn-download-poster');

  const openPosterFlow = () => {
    posterModal.classList.add('active');
    generatedImg.classList.remove('loaded');
    loader.style.display = 'flex';

    setTimeout(() => {
      drawPosterCanvas().then(dataUrl => {
        loader.style.display = 'none';
        generatedImg.src = dataUrl;
        generatedImg.classList.add('loaded');
      }).catch(err => {
        loader.style.display = 'none';
        showToast('海报绘制失败，请重试');
        console.error(err);
      });
    }, 1000);
  };

  btnOpenPoster.addEventListener('click', openPosterFlow);
  btnBottomShare.addEventListener('click', openPosterFlow);

  btnClosePoster.addEventListener('click', () => {
    posterModal.classList.remove('active');
  });

  posterModal.addEventListener('click', (e) => {
    if (e.target === posterModal) {
      posterModal.classList.remove('active');
    }
  });

  btnDownload.addEventListener('click', () => {
    if (generatedImg.src) {
      const a = document.createElement('a');
      a.href = generatedImg.src;
      a.download = '巴塞罗那·世界杯球员名单海报.png';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      showToast('✅ 海报已开始下载！');
    }
  });
}

/**
 * 绘制高保真 Canvas 海报 (支持 Retina 高清防模糊)
 */
function drawPosterCanvas() {
  return new Promise((resolve, reject) => {
    const canvas = document.getElementById('poster-canvas');
    const ctx = canvas.getContext('2d');
    
    const W = canvas.width;
    const H = canvas.height; // 已在 HTML 变更为 1260px

    ctx.clearRect(0, 0, W, H);

    // ------------------ Step A: 绘制背景 ------------------
    const grad = ctx.createLinearGradient(0, 0, 0, H);
    grad.addColorStop(0, '#58041d'); // 深卡塔尔红
    grad.addColorStop(0.35, '#8A1538'); // 卡塔尔红
    grad.addColorStop(0.7, '#1A0033'); // 暗红蓝过渡
    grad.addColorStop(1, '#00264D'); // 深蓝
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, W, H);

    // 几何发光带
    ctx.fillStyle = 'rgba(238, 178, 46, 0.04)';
    ctx.beginPath();
    ctx.moveTo(0, H * 0.2);
    ctx.lineTo(W, H * 0.4);
    ctx.lineTo(W, H * 0.6);
    ctx.lineTo(0, H * 0.4);
    ctx.closePath();
    ctx.fill();

    ctx.fillStyle = 'rgba(255, 255, 255, 0.02)';
    ctx.beginPath();
    ctx.moveTo(W, H * 0.1);
    ctx.lineTo(0, H * 0.3);
    ctx.lineTo(0, H * 0.5);
    ctx.lineTo(W, H * 0.3);
    ctx.closePath();
    ctx.fill();

    // ------------------ Step B: 绘制边框 ------------------
    ctx.strokeStyle = '#EEB22E';
    ctx.lineWidth = 4;
    ctx.strokeRect(15, 15, W - 30, H - 30);
    ctx.strokeStyle = 'rgba(238, 178, 46, 0.3)';
    ctx.lineWidth = 1;
    ctx.strokeRect(20, 20, W - 40, H - 40);

    // ------------------ Step C: 绘制标题 ------------------
    ctx.fillStyle = '#EEB22E';
    ctx.font = 'bold 22px "Outfit", "Noto Sans SC"';
    ctx.textAlign = 'center';
    ctx.fillText('2026 美加墨世界杯', W / 2, 75);

    ctx.fillStyle = '#FFFFFF';
    ctx.font = '900 42px "Noto Sans SC"';
    ctx.fillText('巴塞罗那·世界杯球员名单', W / 2, 135);

    // 分割线
    ctx.strokeStyle = 'rgba(238, 178, 46, 0.3)';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(60, 165);
    ctx.lineTo(W - 60, 165);
    ctx.stroke();

    // ------------------ Step D: 绘制国脚墙 (上移并紧凑排版) ------------------
    ctx.fillStyle = '#EEB22E';
    ctx.font = 'bold 22px "Noto Sans SC"';
    ctx.textAlign = 'left';
    ctx.fillText('🏆 俱乐部球员·世界杯出征墙', 60, 215);

    const cols = 4;
    const startX = 95; // 结合球星圆半径 35 像素计算
    const startY = 260; // 从 280 上移至 260
    const gapX = 187; // 四列的水平分布距离
    const gapY = 130; // 间距微调为 130px

    const posterPlayers = BARCA_PLAYERS.slice(0, 8);

    posterPlayers.forEach((p, idx) => {
      const c = idx % cols;
      const r = Math.floor(idx / cols);
      const x = startX + c * gapX;
      const y = startY + r * gapY;

      // 1. 圆形渐变背景
      const avGrad = ctx.createLinearGradient(x - 35, y - 35, x + 35, y + 35);
      avGrad.addColorStop(0, '#004D98');
      avGrad.addColorStop(1, '#A50044');
      ctx.fillStyle = avGrad;
      ctx.beginPath();
      ctx.arc(x, y, 35, 0, Math.PI * 2);
      ctx.fill();

      // 2. 头像外框
      ctx.strokeStyle = '#EEB22E';
      ctx.lineWidth = 2;
      ctx.stroke();

      // 3. 球员真实照片 (从 DOM 中获取)
      const domImg = document.querySelector(`[data-id="${p.id}"] .player-photo-img`);
      if (domImg && domImg.complete) {
        ctx.save();
        ctx.beginPath();
        ctx.arc(x, y, 35, 0, Math.PI * 2);
        ctx.clip();
        ctx.drawImage(domImg, x - 35, y - 35, 70, 70);
        ctx.restore();
      } else {
        // 兜底显示球衣号码
        ctx.fillStyle = 'rgba(255, 255, 255, 0.85)';
        ctx.font = 'bold 26px "Outfit"';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(p.num, x, y);
      }

      // 4. 国旗小徽章
      ctx.fillStyle = '#FFFFFF';
      ctx.font = '16px sans-serif';
      ctx.fillText(p.flag, x + 25, y - 22);

      // 5. 球员名字
      ctx.fillStyle = '#FFFFFF';
      ctx.font = 'bold 16px "Noto Sans SC"';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'alphabetic';
      ctx.fillText(p.name, x, y + 55);

      // 6. 国家与位置
      ctx.fillStyle = 'rgba(255, 255, 255, 0.6)';
      ctx.font = '12px "Noto Sans SC"';
      ctx.fillText(`${p.country}·${p.pos.slice(0,2)}`, x, y + 75);
    });

    // ------------------ Step E: 绘制赛程卡片 (展示全部 5 场，带巴萨球员备注) ------------------
    const scheduleY = 535; // 从 580 上移至 535
    
    // 分割线
    ctx.strokeStyle = 'rgba(238, 178, 46, 0.3)';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(60, scheduleY - 30); // 绘制在 505px 处
    ctx.lineTo(W - 60, scheduleY - 30);
    ctx.stroke();

    // 焦点战程标题
    ctx.fillStyle = '#EEB22E';
    ctx.font = 'bold 22px "Noto Sans SC"';
    ctx.textAlign = 'left';
    ctx.fillText('📅 俱乐部球员·世界杯赛程', 60, scheduleY);

    // 渲染全部 5 场焦点赛程（由于海报无法筛选，直接全量呈现并带上备注）
    const barcaMatches = WC_SCHEDULE.filter(m => m.barcaStars.length > 0);
    let itemY = scheduleY + 25; // 初始为 560px

    barcaMatches.forEach((m) => {
      // 1. 绘制白透卡片背景 (高度微调为 114 像素以容纳双行备注)
      ctx.fillStyle = 'rgba(255, 255, 255, 0.08)';
      ctx.beginPath();
      roundRect(ctx, 60, itemY, W - 120, 114, 10);
      ctx.fill();
      ctx.strokeStyle = 'rgba(255,255,255,0.06)';
      ctx.stroke();

      // 2. 比赛时间及组别 (加注完赛状态)
      ctx.fillStyle = 'rgba(255, 255, 255, 0.5)';
      ctx.font = '400 13px "Noto Sans SC"';
      ctx.textAlign = 'left';
      const statusText = m.status === 'finished' ? ' | 已完赛' : ' | 未开赛';
      ctx.fillText(`${m.date.split(' ')[0]} ${m.time} | ${m.stage.replace('🔥 ', '')}${statusText}`, 80, itemY + 26);

      // 3. 对阵双方
      ctx.fillStyle = '#FFFFFF';
      ctx.font = 'bold 18px "Noto Sans SC"';
      // 战队A
      ctx.textAlign = 'left';
      ctx.fillText(`${m.flagA} ${m.teamA}`, 80, itemY + 56);
      
      // VS 标识或比分
      ctx.fillStyle = '#EEB22E';
      ctx.font = 'bold 18px "Outfit"';
      ctx.textAlign = 'center';
      if (m.status === 'finished') {
        ctx.fillText(`${m.scoreA} : ${m.scoreB}`, W / 2, itemY + 56);
      } else {
        ctx.fillText('VS', W / 2, itemY + 56);
      }
      
      // 战队B
      ctx.fillStyle = '#FFFFFF';
      ctx.font = 'bold 18px "Noto Sans SC"';
      ctx.textAlign = 'right';
      ctx.fillText(`${m.teamB} ${m.flagB}`, W - 80, itemY + 56);

      // 4. 为海报上的每场焦点战程备注具体的巴萨球员出征关系 (支持双行，带超长缩略)
      ctx.fillStyle = 'rgba(255, 255, 255, 0.85)';
      ctx.font = '500 13px "Noto Sans SC"';
      ctx.textAlign = 'center';
      
      const remarkList = getBarcaStarsRemarkList(m);
      if (remarkList.length === 2) {
        ctx.fillText(remarkList[0], W / 2, itemY + 80);
        ctx.fillText(remarkList[1], W / 2, itemY + 98);
      } else if (remarkList.length === 1) {
        ctx.fillText(remarkList[0], W / 2, itemY + 88);
      }

      itemY += 126; // 每一项占 126 像素（114 卡片高 + 12 间距）
    });

    // ------------------ Step F: 绘制底栏说明 (放置于海报底部，署名标识) ------------------
    const footerY = 1195;
    ctx.strokeStyle = 'rgba(238, 178, 46, 0.3)';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(60, footerY);
    ctx.lineTo(W - 60, footerY);
    ctx.stroke();

    ctx.fillStyle = 'rgba(255, 255, 255, 0.4)';
    ctx.font = '400 14px "Noto Sans SC"';
    ctx.textAlign = 'center';
    ctx.fillText('——  直播吧 APP · 2026 美加墨世界杯专属纪念海报  ——', W / 2, footerY + 45);

    resolve(canvas.toDataURL('image/png'));
  });
}


function roundRect(ctx, x, y, width, height, radius) {
  ctx.moveTo(x + radius, y);
  ctx.lineTo(x + width - radius, y);
  ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
  ctx.lineTo(x + width, y + height - radius);
  ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
  ctx.lineTo(x + radius, y + height);
  ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
  ctx.lineTo(x, y + radius);
  ctx.quadraticCurveTo(x, y, x + radius, y);
}

// ==========================================================================
// 6. 辅助工具：精美 Toast 提示
// ==========================================================================
let toastTimer = null;
function showToast(message) {
  const toast = document.getElementById('toast');
  toast.textContent = message;
  toast.classList.add('show');
  
  if (toastTimer) clearTimeout(toastTimer);
  
  toastTimer = setTimeout(() => {
    toast.classList.remove('show');
  }, 2500);
}

// 模拟社交平台分享功能
window.simulateShare = function(platform) {
  showToast(`✨ 分享成功！已将海报发送至[${platform}]`);
  
  setTimeout(() => {
    const posterModal = document.getElementById('poster-share-modal');
    posterModal.classList.remove('active');
  }, 1200);
}

// ==========================================================================
// 7. PRD 对照评审模块数据与逻辑 (鼠标移入组件悬浮显示PRD条款)
// ==========================================================================

const PRD_RULES = {
  'entrance': {
    module: '1. 页面入口',
    num: '1.1 - 1.5',
    title: '页面入口详细需求',
    desc: '• <b>1.1 展示位置</b>：入口展示在球队资料页「动态」Tab 内容流顶部。<br>' +
          '• <b>1.2 展示条件</b>：当当前球队存在世界杯参赛球员时，展示入口；若球队无世界杯相关数据，不展示入口并保持原动态列表结构。<br>' +
          '• <b>1.3 展示内容</b>：以UI方案为准。<br>' +
          '• <b>1.4 球队适配</b>：以UI方案为准。<br>' +
          '• <b>1.5 点击行为</b>：用户点击入口卡片后进入该球队的俱乐部世界杯出征页H5。'
  },
  'nav': {
    module: '2. 顶部导航与分享入口',
    num: '2.2 / 2.13',
    title: '顶部导航与分享入口需求',
    desc: '• <b>2.2 顶部导航</b>：顶部左侧为返回按钮，点击返回球队资料页；右侧为分享入口，点击进入分享图生成弹层；导航区需适配系统状态栏和安全区。<br>' +
          '• <b>2.13 分享入口</b>：用户点击顶部分享按钮或底部固定按钮均进入同一分享图生成流程。'
  },
  'header': {
    module: '3. 出征头图信息区',
    num: '2.3 / 2.11',
    title: '出征头图信息区需求',
    desc: '• <b>2.3 头图信息区</b>：展示世界杯年份/届次、出征页标题、球队出征国脚数量、引导文案和世界杯视觉符号；国脚数量需与国脚墙实际数据保持一致。<br>' +
          '• <b>2.11 更新频率</b>：页面进入时拉取最新数据；赛程时间、比分随接口返回更新；若停留在页面内，可重新进入页面更新。'
  },
  'players': {
    module: '4. 出征国脚墙展示与交互',
    num: '2.4 - 2.5',
    title: '出征国脚墙展示与交互需求',
    desc: '• <b>2.4 出征国脚墙展示</b>：展示当前球队出征世界杯的球员列表，每名球员展示头像、姓名、国家/地区标识、位置；列表按国家队聚合，以该国家队所含该俱乐部球员数量由多到少排序，同数量按国家队名称A-Z排序。<br>' +
          '• <b>2.5 出征国脚墙交互</b>：用户点击球员卡片后直接跳转站内球员资料页；点击范围为整个球员卡片。'
  },
  'filter': {
    module: '5. 国家筛选栏展示与交互',
    num: '2.6 - 2.7 / 2.12',
    title: '国家筛选栏展示与交互需求',
    desc: '• <b>2.6 国家筛选展示</b>：赛程表上方展示横向滑动国家筛选项，包含「全部」和该球队参赛球员所属国家/地区；筛选项需展示国家/地区名称及关联球员人数；默认选中「全部」。<br>' +
          '• <b>2.7 国家筛选交互</b>：用户点击国家筛选项后，赛程列表仅展示该国家/地区参与且与当前球队球员相关的比赛；筛选成功后当前筛选项高亮。<br>' +
          '• <b>2.12 文本溢出</b>：国家筛选项可横向滚动，不压缩核心文字；球员姓名最多展示 1 行，超出省略；核心识别信息优先完整展示。'
  },
  'schedule': {
    module: '6. 赛程列表展示与交互',
    num: '2.8 - 2.9 / 2.12',
    title: '赛程列表展示与交互需求',
    desc: '• <b>2.8 赛程列表展示</b>：赛程按比赛日期分组展示，每场比赛展示开赛日期、开赛时间、赛事阶段/轮次、主队、客队、比分、双方球员信息；同一日期内按开赛时间升序排列。<br>' +
          '• <b>2.9 赛程范围</b>：出征页仅展示与所筛选项相符的国家队世界杯赛程。<br>' +
          '• <b>2.12 文本溢出</b>：球员姓名最多展示 1 行，超出省略；球队名、比赛时间、比分/对战等核心识别信息优先完整展示。'
  },
  'poster': {
    module: '7. 分享图生成与分享',
    num: '3.1 - 3.8 / 3.10 - 3.11',
    title: 'Canvas海报生成与分享需求',
    desc: '• <b>3.1 触发入口</b>：分享图可由出征页顶部分享按钮、底部「生成海报」按钮触发；触发后展示分享页，包含生成状态、海报预览、保存/分享操作。<br>' +
          '• <b>3.2 生成过程</b>：打开弹层后先展示 loading 状态，完成后展示生成的海报图片；生成耗时期间禁止重复点击生成按钮；若生成失败，展示失败提示并允许用户重试或关闭弹层。<br>' +
          '• <b>3.3 分享图内容</b>：海报需包含世界杯届次、球队名称、出征页标题、出征球员信息、焦点赛程、产品署名。<br>' +
          '• <b>3.4 球员展示规则</b>：展示全部国脚头像、简称、所属国家、位置。<br>' +
          '• <b>3.5 赛程展示规则</b>：展示该俱乐部所有参赛国脚所属国家队赛程。每条赛程中展示对应国脚信息，例如：佩德里、加维（西班牙）。<br>' +
          '• <b>3.6 图片规格</b>：以UI方案为准。<br>' +
          '• <b>3.7 保存操作</b>：用户点击「下载海报」或保存按钮后，将海报保存到本地相册/文件；保存成功展示成功提示，保存失败展示提示并引导用户检查权限。<br>' +
          '• <b>3.8 渠道分享</b>：分享弹层可展示微信好友、朋友圈、微博等分享渠道；点击渠道后调用客户端分享能力，分享成功/失败需展示对应提示。<br>' +
          '• <b>3.10 关闭弹层</b>：用户点击关闭按钮或弹层遮罩可关闭分享弹层；关闭后不影响出征页当前筛选状态和滚动位置。<br>' +
          '• <b>3.11 文本溢出</b>：分享图内球队名、球员名、国家队名、赛事阶段等文本需按设计区域截断处理；不得出现文字重叠、超出画布、遮挡核心赛程信息。'
  }
};

function initPrdMode() {
  const btnToggle = document.getElementById('btn-toggle-prd-mode');
  const tooltip = document.getElementById('prd-tooltip-pop');
  const screen = document.querySelector('.phone-screen');
  
  let prdActive = false;
  let hideTimer = null;

  btnToggle.addEventListener('click', () => {
    prdActive = !prdActive;
    if (prdActive) {
      document.body.classList.add('prd-mode-active');
      btnToggle.classList.add('active');
      btnToggle.innerHTML = '<span class="icon-prd">📖</span> 关闭 PRD 对照';
      showToast('已开启 PRD 对照模式，鼠标悬浮至蓝框组件可查看规则');
    } else {
      document.body.classList.remove('prd-mode-active');
      btnToggle.classList.remove('active');
      btnToggle.innerHTML = '<span class="icon-prd">📖</span> 开启 PRD 对照';
      tooltip.classList.remove('show');
      showToast('已关闭 PRD 对照模式');
    }
  });

  // 悬浮气泡自身也需要绑定悬浮事件，防鼠标移入时瞬间消失，允许用户进去滚动阅读
  tooltip.addEventListener('mouseenter', () => {
    if (hideTimer) clearTimeout(hideTimer);
  });
  
  tooltip.addEventListener('mouseleave', () => {
    tooltip.classList.remove('show');
  });

  // 绑定 marker 悬浮事件
  document.querySelectorAll('.prd-marker').forEach(marker => {
    marker.addEventListener('mouseenter', (e) => {
      if (!prdActive) return;
      if (hideTimer) clearTimeout(hideTimer);
      
      const prdId = marker.getAttribute('data-prd-id');
      const rule = PRD_RULES[prdId];
      if (!rule) return;

      // 填充内容
      document.getElementById('prd-pop-module').textContent = rule.module;
      document.getElementById('prd-pop-num').textContent = rule.num;
      document.getElementById('prd-pop-title').textContent = rule.title;
      document.getElementById('prd-pop-desc').innerHTML = rule.desc;

      // 临时显示气泡以供准确测算它的展示高度，避免 offsetHeight 为 0 的问题
      tooltip.style.visibility = 'hidden';
      tooltip.classList.add('show');

      // 坐标计算
      const markerRect = marker.getBoundingClientRect();
      const screenRect = screen.getBoundingClientRect();
      
      // 预估宽度和实际测量高度（此处与 style.css 里的 360px 对应）
      const tooltipW = 360;
      const tooltipH = tooltip.offsetHeight || tooltip.getBoundingClientRect().height || 220;

      // 空间计算
      let spaceAbove = markerRect.top - screenRect.top;
      let spaceBelow = screenRect.height - (markerRect.bottom - screenRect.top);
      let top;

      if (spaceAbove >= tooltipH + 10) {
        top = markerRect.top - screenRect.top - tooltipH - 8;
      } else if (spaceBelow >= tooltipH + 10) {
        top = markerRect.bottom - screenRect.top + 8;
      } else {
        // 两边都不够，哪边大放哪边，并贴边
        if (spaceAbove > spaceBelow) {
          top = 10;
        } else {
          top = screenRect.height - tooltipH - 10;
        }
      }

      let left = markerRect.left - screenRect.left + (markerRect.width - tooltipW) / 2;
      if (left < 10) left = 10;
      if (left + tooltipW > screenRect.width - 10) {
        left = screenRect.width - tooltipW - 10;
      }

      tooltip.style.top = `${top}px`;
      tooltip.style.left = `${left}px`;
      tooltip.style.visibility = 'visible';
    });

    marker.addEventListener('mouseleave', () => {
      // 延迟 300ms 关闭，给用户鼠标移动进入气泡内部滚动阅读的时间
      hideTimer = setTimeout(() => {
        tooltip.classList.remove('show');
      }, 300);
    });
    
    // 移动端/触屏点击兼容
    marker.addEventListener('click', (e) => {
      if (!prdActive) return;
      e.stopPropagation();
    });
  });
}
