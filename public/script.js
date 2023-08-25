const questions = [
    {
        question: "I clearly My expectations for my child's behavior are very high.",
        options: [
            "Strongly agree",
            "Moderately agree",
            "Slightly agree",
            "Slightly disagree",
            "Moderately disagree",
            "Strongly disagree"
        ],
        label: "Demandingness"
    },
    {
        question: "I have clear and strict rules for my child to follow.",
        options: [
            "Strongly agree",
            "Moderately agree",
            "Slightly agree",
            "Slightly disagree",
            "Moderately disagree",
            "Strongly disagree"
        ],
        label: "Demandingness"
    },
    {
        question: "I believe that discipline is important for my child's development.",
        options: [
            "Strongly agree",
            "Moderately agree",
            "Slightly agree",
            "Slightly disagree",
            "Moderately disagree",
            "Strongly disagree"
        ],
        label: "Demandingness"
    },
    {
        question: "I often set high standards for my child's performance.",
        options: [
            "Strongly agree",
            "Moderately agree",
            "Slightly agree",
            "Slightly disagree",
            "Moderately disagree",
            "Strongly disagree"
        ],
        label: "Demandingness"
    },
    {
        question: "I expect my child to complete chores and tasks without negotiation.",
        options: [
            "Strongly agree",
            "Moderately agree",
            "Slightly agree",
            "Slightly disagree",
            "Moderately disagree",
            "Strongly disagree"
        ],
        label: "Demandingness"
    },
    {
        question: "I believe that structure and routine are essential for my child's upbringing.",
        options: [
            "Strongly agree",
            "Moderately agree",
            "Slightly agree",
            "Slightly disagree",
            "Moderately disagree",
            "Strongly disagree"
        ],
        label: "Demandingness"
    },
    {
        question: "I enforce consequences when my child breaks the rules.",
        options: [
            "Strongly agree",
            "Moderately agree",
            "Slightly agree",
            "Slightly disagree",
            "Moderately disagree",
            "Strongly disagree"
        ],
        label: "Demandingness"
    },
    {
        question: "I prioritize academic and extracurricular achievements for my child.",
        options: [
            "Strongly agree",
            "Moderately agree",
            "Slightly agree",
            "Slightly disagree",
            "Moderately disagree",
            "Strongly disagree"
        ],
        label: "Demandingness"
    },
    {
        question: "I am comfortable with restricting my child's leisure time for educational purposes.",
        options: [
            "Strongly agree",
            "Moderately agree",
            "Slightly agree",
            "Slightly disagree",
            "Moderately disagree",
            "Strongly disagree"
        ],
        label: "Demandingness"
    },
    {
        question: "I explain to my child how I feel about his/her good/bad behavior.",
        options: [
            "Strongly agree",
            "Moderately agree",
            "Slightly agree",
            "Slightly disagree",
            "Moderately disagree",
            "Strongly disagree"
        ],
        label: "Demandingness"
    },
    {
        question: "I frequently express love and affection toward my child.",
        options: [
            "Strongly agree",
            "Moderately agree",
            "Slightly agree",
            "Slightly disagree",
            "Moderately disagree",
            "Strongly disagree"
        ],
        label: "Responsiveness"
    },
    {
        question: "I make time to engage in activities and conversations with my child.",
        options: [
            "Strongly agree",
            "Moderately agree",
            "Slightly agree",
            "Slightly disagree",
            "Moderately disagree",
            "Strongly disagree"
        ],
        label: "Responsiveness"
    },
    {
        question: "I am attentive and receptive when my child wants to share something with me.",
        options: [
            "Strongly agree",
            "Moderately agree",
            "Slightly agree",
            "Slightly disagree",
            "Moderately disagree",
            "Strongly disagree"
        ],
        label: "Responsiveness"
    },
    {
        question: "I treat my child as an equal member of the family.",
        options: [
            "Strongly agree",
            "Moderately agree",
            "Slightly agree",
            "Slightly disagree",
            "Moderately disagree",
            "Strongly disagree"
        ],
        label: "Responsiveness"
    },
    {
        question: "I encourage my child to freely speak his/her mind, even if he/she disagrees with me.",
        options: [
            "Strongly agree",
            "Moderately agree",
            "Slightly agree",
            "Slightly disagree",
            "Moderately disagree",
            "Strongly disagree"
        ],
        label: "Responsiveness"
    },
    {
        question: "I am open to discussing sensitive topics with my child.",
        options: [
            "Strongly agree",
            "Moderately agree",
            "Slightly agree",
            "Slightly disagree",
            "Moderately disagree",
            "Strongly disagree"
        ],
        label: "Responsiveness"
    },
    {
        question: "I support my child's interests and hobbies.",
        options: [
            "Strongly agree",
            "Moderately agree",
            "Slightly agree",
            "Slightly disagree",
            "Moderately disagree",
            "Strongly disagree"
        ],
        label: "Responsiveness"
    },
    {
        question: "I prioritize building a strong emotional connection with my child.",
        options: [
            "Strongly agree",
            "Moderately agree",
            "Slightly agree",
            "Slightly disagree",
            "Moderately disagree",
            "Strongly disagree"
        ],
        label: "Responsiveness"
    },
    {
        question: "My child views me not just as a parent, but also as a friend they can trust.",
        options: [
            "Strongly agree",
            "Moderately agree",
            "Slightly agree",
            "Slightly disagree",
            "Moderately disagree",
            "Strongly disagree"
        ],
        label: "Responsiveness"
    },
    {
        question: "I often compliment my child.",
        options: [
            "Strongly agree",
            "Moderately agree",
            "Slightly agree",
            "Slightly disagree",
            "Moderately disagree",
            "Strongly disagree"
        ],
        label: "Responsiveness"
    },
    {
        question: "Do you consent for your responses to be recorded?",
        options: [
            "Yes",
            "No"
        ],
        label: "CheckboxQuestion"
    },
];

const ctx = document.getElementById("parentingChart").getContext("2d");
let chart = null;

const parentingQuiz = document.getElementById("parentingQuiz");
const submitBtn = document.getElementById("submitBtn");
const result = document.getElementById("result");
const mainMenuBtn = document.getElementById("mainMenuBtn");

let unansweredQuestions = [];

submitBtn.addEventListener("click", async (e) => {
    e.preventDefault();
    let totalResponsiveness = 0;
    let totalDemandingness = 0;
    unansweredQuestions = [];
    result.style.display = 'none';

    for (let i = 0; i < questions.length; i++) {
        const selectedOption = parentingQuiz.elements[`q${i}`].value;
        
        if (selectedOption === "" || selectedOption === null || selectedOption === undefined) {
            unansweredQuestions.push(i + 1);
        } else {
            const optionValue = 7 - parseInt(selectedOption); // score of 6 for strongly agree, score of 1 for strongly disagree
            if (questions[i].label === "Responsiveness") {
                totalResponsiveness += optionValue;
            } else if (questions[i].label === "Demandingness") {
                totalDemandingness += optionValue;
            }
        }
    }

    let message = "";
    if (unansweredQuestions.length > 0) {
        const unansweredLinksContainer = document.getElementById("unansweredLinks");
        const unansweredLinks = unansweredQuestions.map(qNum => `<a href="#q${qNum}">Question ${qNum}</a>`);
        unansweredLinksContainer.innerHTML = `Questions not entered: ${unansweredLinks.join(", ")}`;
        const submitAnywayBtn = document.getElementById("submitAnywayBtn");
        submitAnywayBtn.style.display = "block";
        document.getElementById("graphContainer").style.display = "none";

    } else {
        submitAnyway();
        if (consentResponse === "Yes") {
            try {
                const response = await fetch('/store-response', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(responsePayload)
                });

                const data = await response.json();
                console.log(data.message);
            } catch (error) {
                console.error('Error:', error);
            }}
        const unansweredLinksContainer = document.getElementById("unansweredLinks");
        unansweredLinksContainer.innerHTML = "";
        const submitAnywayBtn = document.getElementById("submitAnywayBtn");
        submitAnywayBtn.style.display = "none";
    }

    const submitAnywayBtn = document.getElementById("submitAnywayBtn");
    submitAnywayBtn.addEventListener("click", (e) => {
        e.preventDefault();
        submitAnyway();
});

    function submitAnyway() {
        const submitAnywayBtn = document.getElementById("submitAnywayBtn");
        submitAnywayBtn.style.display = "none"; 
        const unansweredLinksContainer = document.getElementById("unansweredLinks");
        unansweredLinksContainer.innerHTML = "";
        // Calculate scores with default answers for unanswered questions
        let totalResponsiveness = 0;
        let totalDemandingness = 0;
    
        for (let i = 0; i < questions.length; i++) {
            const selectedOption = parentingQuiz.elements[`q${i}`].value;
    
            const optionValue = selectedOption === "" ? 3.5 : 7 - parseInt(selectedOption);
    
            if (questions[i].label === "Responsiveness") {
                totalResponsiveness += optionValue;
            } else if (questions[i].label === "Demandingness") {
                totalDemandingness += optionValue;
            }
        }
        updateChart(totalResponsiveness, totalDemandingness);
        let parentingStyle = "";
        let parentingMessage = "";

        if (totalResponsiveness >= 35 && totalDemandingness >= 35) {
            parentingStyle = "Authoritative (High Demandingness & High Responsiveness). Authoritative parents are assertive and supportive. They set clear expectations for behavior and hold their child accountable, but they also take the time to explain their reasoning and listen to their child's perspective. Authoritative parenting is a balanced approach - it provides structure and rules while encouraging independence and open communication. Most psychological research on parenting styles indicate that, in general, authoritative parenting is associated with the most favorable outcomes for children.";
        } else if (totalResponsiveness < 35 && totalDemandingness >= 35) {
            parentingStyle = "Authoritarian (High Demandingness & Low Responsiveness).";
            parentingMessage = "Authoritarian parents believe in strict rules and discipline. They expect their child to obey their commands without question and enforce consequences for any deviation. Authoritarian parenting is focused on maintaining control and order, often without much room for discussion or negotiation. Despite good intentions, such an approach can sometimes lead to a lack of open communication and understanding with their child."
        } else if (totalResponsiveness >= 35 && totalDemandingness < 35) {
            parentingStyle = "Permissive (Low Demandingness & High Responsiveness).";
            parentingMessage = "Permissive parents are lenient and indulgent. They tend to avoid setting firm boundaries and rules, allowing their child considerable freedom to make their own decisions. They're more of a friend than an authority figure, often prioritizing their child's immediate happiness over long-term development. While such a nurturing attitude can create a positive and relaxed environment, it may also result in their child struggling with self-discipline and responsibility."
        } else if (totalResponsiveness < 35 && totalDemandingness < 35) {
            parentingStyle = "Uninvolved (Low Demandingness & Low Responsiveness).";
            parentingMessage = "Uninvolved parents are distant and detached. Their level of engagement in their child's life is minimal, and they may prioritize their own interests and responsibilities over their children's needs. Their lack of emotional involvement and guidance can lead to feelings of neglect for their child. While uninvolved parents may encourage self-reliance and independence, their child might miss out on essential emotional support and guidance needed for healthy development."
        }
        const message = `
            <p>Total Responsiveness Score: ${totalResponsiveness} (Range: 10-70)</p>
            <p>Total Demandingness Score: ${totalDemandingness} (Range: 10-70)</p>
            <p>Parenting Style: ${parentingStyle}</p>
            <p>${parentingMessage}</p>
            <p>With that said, every child is different, and their individual personalities, needs, and circumstances play a significant role in determining which is the best parenting style for them. Ultimately, a successful parent-child relationship is built on open comunication and a willingness to adjust along the way.</p>
        `;
    
        result.innerHTML = message;
        result.style.display = 'block';
        updateChart(totalResponsiveness, totalDemandingness);
        document.getElementById("graphContainer").style.display = "block";
    }
});

function updateChart(responsiveness, demandingness) {
    if (chart !== null) {
        chart.destroy(); 
    }

    chart = new Chart(ctx, {
        type: 'scatter',
        data: {
            datasets: [{
                label: 'You are here',
                data: [{
                    x: responsiveness,
                    y: demandingness
                }],
                backgroundColor: 'rgba(75, 192, 192, 0.6)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
                pointRadius: 6,
                pointHoverRadius: 7.5,
            }]
        },
        options: {
            responsive: true,
            scales: {
                x: {
                    type: 'linear',
                    position: 'bottom',
                    min: 10,
                    max: 60,
                    title: {
                        display: true,
                        text: 'Responsiveness'
                    },
                    grid: {
                        borderColor: 'rgba(0, 0, 0, 0.1)',
                    }
                },
                y: {
                    min: 10,
                    max: 60,
                    title: {
                        display: true,
                        text: 'Demandingness'
                    },
                    grid: {
                        borderColor: 'rgba(0, 0, 0, 0.1)',
                    }
                }
            },
            plugins: {
                annotation: {
                    drawTime: 'beforeDatasetsDraw',
                    annotations: [
                        {
                            type: 'line',
                            mode: 'horizontal',
                            scaleID: 'y',
                            value: 35,
                            borderColor: 'black',
                            borderWidth: 2,
                            label: {
                                enabled: true,
                            }
                        },
                        {
                            type: 'line',
                            mode: 'vertical',
                            scaleID: 'x',
                            value: 35,
                            borderColor: 'black',
                            borderWidth: 2,
                            label: {
                                enabled: true,
                            }
                        },
                        {
                            type: 'label',
                            position: 'center',
                            xAdjust: -85,
                            yAdjust: -78,
                            backgroundColor: 'white',
                            content: 'Authoritarian', 
                            enabled: true,
                        },
                        {
                            type: 'label',
                            position: 'center',
                            xAdjust: 85,
                            yAdjust: -78,
                            backgroundColor: 'white',
                            content: 'Authoritative', 
                            enabled: true,
                        },
                        {
                            type: 'label',
                            position: 'center',
                            xAdjust: -85,
                            yAdjust: 78,
                            backgroundColor: 'white',
                            content: 'Uninvolved', 
                            enabled: true,
                        },
                        {
                            type: 'label',
                            position: 'center',
                            xAdjust: 85,
                            yAdjust: 78,
                            backgroundColor: 'white',
                            content: 'Permissive', 
                            enabled: true,
                        },
                    ]
                }
            }
        }
    });
}


document.addEventListener("DOMContentLoaded", () => {
    const quizForm = document.getElementById("parentingQuiz");
    questions.forEach((question, index) => {
        const questionDiv = document.createElement("div");
        questionDiv.className = "question";
        let optionsHTML = '';

        question.options.forEach((option, optionIndex) => {
            optionsHTML += `
                <label>
                    <input type="radio" name="q${index}" value="${optionIndex + 1}">
                    ${option}
                </label><br>
            `;
        });

        questionDiv.innerHTML = `
            <p id="q${index + 1}">${index + 1}. ${question.question}</p>
            ${optionsHTML}
        `;
        quizForm.appendChild(questionDiv);
        const resetQuizBtn = document.getElementById("resetQuizBtn");
        resetQuizBtn.addEventListener("click", () => {
            location.reload();
        });
    });
});

fetch('/store-response', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(responsePayload)
})
.then(response => response.json())
.then(data => {
    console.log(data.message);
})
.catch(error => {
    console.error('Error:', error);
});