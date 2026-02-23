// AI Interpretation Data
const interpretations = {
    keywords: {
        "돼지": "풍요와 재물을 상징하는 돼지 꿈은 아주 강력한 길몽입니다. 재운이 크게 상승할 징조입니다.",
        "똥": "재산상의 이득이나 큰 횡재수를 의미합니다. 막혔던 운이 풀릴 신호입니다.",
        "불": "사업의 번창이나 정열적인 에너지를 의미합니다. 집안에 경사가 생길 수 있습니다.",
        "물": "맑은 물은 마음의 평화와 재물을, 큰 파도는 변화를 상징합니다.",
        "조상": "조상님이 나타나시는 꿈은 중요한 메시지나 행운을 전하려는 경우가 많습니다.",
        "금": "변치 않는 가치와 최고의 명예를 상징합니다. 큰 목표를 달성할 운입니다.",
        "하늘": "높은 이상과 신분 상승을 의미하며, 주변 사람들에게 인정받게 될 징조입니다."
    },
    fallbacks: [
        "당신의 꿈은 현재 무의식이 매우 활발하게 활동하고 있음을 보여줍니다. 이 번호들은 그 에너지를 숫자로 형상화한 것입니다.",
        "오늘 밤 당신의 운세는 맑음입니다. 무의식이 전하는 이 번호들에 행운이 깃들어 있습니다.",
        "꿈의 내용이 매우 신비롭습니다. 차분한 마음으로 이 번호들을 마주해 보세요.",
        "당신의 정성이 깃든 꿈은 반드시 좋은 결과로 이어질 것입니다. 행운의 여신이 당신을 향해 미소 짓고 있습니다."
    ]
};

document.addEventListener('DOMContentLoaded', () => {
    const analyzeBtn = document.getElementById('analyze-btn');
    const loading = document.getElementById('loading');
    const resultsSection = document.getElementById('results-section');
    const resultsList = document.getElementById('results-list');
    const analysisMsg = document.getElementById('analysis-message');

    analyzeBtn.addEventListener('click', async () => {
        const dreamText = document.getElementById('dream-input').value;
        const incText = document.getElementById('inc-numbers').value;
        const excText = document.getElementById('exc-numbers').value;
        const count = parseInt(document.getElementById('set-count').value) || 5;

        // Validation
        const inc = parseNumbers(incText);
        const exc = parseNumbers(excText);

        if ([...inc, ...exc].some(n => n < 1 || n > 45)) {
            alert("숫자는 1에서 45 사이여야 합니다.");
            return;
        }

        // Show Loading
        loading.style.display = 'flex';
        
        // Simulate AI Processing Delay
        await new Promise(resolve => setTimeout(resolve, 2000));

        // Generate Results
        resultsList.innerHTML = '';
        for (let i = 0; i < count; i++) {
            const data = generateLottoSet(inc, exc);
            renderSet(i + 1, data);
        }

        // AI Interpretation Message
        analysisMsg.innerHTML = getInterpretation(dreamText);

        // Show Results
        loading.style.display = 'none';
        resultsSection.style.display = 'block';
        resultsSection.scrollIntoView({ behavior: 'smooth' });
    });
});

function parseNumbers(str) {
    return [...new Set(str.split(/[ ,]+/).filter(x => x !== "").map(Number).filter(n => !isNaN(n)))];
}

function generateLottoSet(inc, exc) {
    let pool = Array.from({ length: 45 }, (_, i) => i + 1).filter(n => !exc.includes(n) && !inc.includes(n));
    
    // Fisher-Yates shuffle
    for (let i = pool.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [pool[i], pool[j]] = [pool[j], pool[i]];
    }

    let res = [...inc].slice(0, 6);
    while (res.length < 6 && pool.length > 0) {
        res.push(pool.pop());
    }
    res.sort((a, b) => a - b);
    return res;
}

function renderSet(idx, nums) {
    const resultsList = document.getElementById('results-list');
    const item = document.createElement('div');
    item.className = 'result-item';
    item.style.animationDelay = `${idx * 0.1}s`;

    let ballsHtml = '<div class="balls-container">';
    nums.forEach(n => {
        let range = 5;
        if (n <= 10) range = 1;
        else if (n <= 20) range = 2;
        else if (n <= 30) range = 3;
        else if (n <= 40) range = 4;
        ballsHtml += `<div class="ball range-${range}">${n}</div>`;
    });
    ballsHtml += '</div>';

    item.innerHTML = `
        <div style="font-size: 0.8rem; font-weight: 600; color: var(--accent-primary); margin-bottom: 0.5rem; opacity: 0.8;">운명적인 조합 ${idx}</div>
        ${ballsHtml}
    `;
    resultsList.appendChild(item);
}

function getInterpretation(text) {
    if (!text.trim()) {
        return interpretations.fallbacks[Math.floor(Math.random() * interpretations.fallbacks.length)];
    }

    let match = "";
    for (const key in interpretations.keywords) {
        if (text.includes(key)) {
            match = interpretations.keywords[key];
            break;
        }
    }

    if (match) {
        return `<strong>✨ AI 분석 결과:</strong><br>${match}<br><br>이 신비로운 에너지가 담긴 번호들이 당신에게 행운을 가져다줄 것입니다.`;
    } else {
        return `<strong>✨ AI 분석 결과:</strong><br>${interpretations.fallbacks[Math.floor(Math.random() * interpretations.fallbacks.length)]}`;
    }
}
