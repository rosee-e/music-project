
/* =========================================
   THE EXPONENTS — 1981–2002
   Main JavaScript
   ========================================= */

/* ---------- Timeline data ---------- */

const timelineData = [
    {
        year: 1981,
        title: "The beginning",
        description: "After their first band breaks up, singer Jordan Luck and Brian Jones move with their friend Steve Cowan from Timaru to Christchurch, where they meet David Gent and Michael “Harry” Harallambi. Dance Exponents are born! (The Exponents, n.d.-b)",
        background: "linear-gradient(135deg, #303030, #101010)"
    },
    {
        year: 1981,
        title: "The first gig — 15 October",
        description: "The band plays its first gig at Christchurch’s Hillsborough Tavern on Jordan Luck’s 20th birthday and Steve Cowan’s 22nd birthday. (The Exponents, n.d.-b)",
        background: "linear-gradient(135deg, #493b31, #15100d)"
    },
    {
        year: 1981,
        title: "Aranui Tavern residency",
        description: "Dance Exponents secure a residency at the Aranui Tavern in Christchurch, which Brown (2013) describes as having “created a sensation.”",
        background: "linear-gradient(135deg, #3b493b, #101510)"
    },
    {
        year: 1982,
        title: "Signed to Mushroom Records",
        description: "Performing for fewer than six months, the band catches the attention of former Split Enz member Mike Chunn, who signs them as Mushroom Records NZ’s second signing. (Brown, 2013; Higgins, 1982)",
        background: "linear-gradient(135deg, #44364a, #110d14)"
    },
    {
        year: 1982,
        title: "“Victoria” released",
        description: "The band releases its debut single, “Victoria,” a song about an abusive relationship. (Brown, 2013)",
        background: "linear-gradient(135deg, #493b31, #15100d)"
    },
    {
        year: 1982,
        title: "“Victoria” reaches No. 6",
        description: "“Victoria” reaches No. 6 on the New Zealand singles chart, becoming the band’s first major chart success. (Hung Medien, n.d.)",
        background: "linear-gradient(135deg, #542f2f, #160909)"
    },
    {
        year: 1982,
        title: "Most Promising Group",
        description: "Dance Exponents win Most Promising Group at the 1982 New Zealand Music Awards. (The New Zealand Music Hall of Fame Trust, n.d.)",
        background: "linear-gradient(135deg, #57402d, #16100b)"
    },
    {
        year: 1982,
        title: "Steve Cowan leaves",
        description: "Steve Cowan leaves the band and returns to Timaru. Martin Morris temporarily replaces him. (Brown, 2013)",
        background: "linear-gradient(135deg, #403b4a, #121116)"
    },
    {
        year: 1982,
        title: "“Airway Spies”",
        description: "The band releases “Airway Spies” following Cowan’s departure, marking an early change in the group’s lineup and sound. (The Exponents, n.d.-b)",
        background: "linear-gradient(135deg, #293c46, #0d1215)"
    },
    {
        year: 1983,
        title: "Playing with David Bowie",
        description: "Dance Exponents support David Bowie at Western Springs in Auckland, at a concert recognised as the largest concert crowd in New Zealand history. (Brown, 2013)",
        background: "linear-gradient(135deg, #303b49, #0b0e12)"
    },
    {
        year: 1983,
        title: "Live at Mainstreet",
        description: "The band’s live performance at Mainstreet Cabaret is released as an album and reaches No. 3 on the New Zealand charts. The performance is also filmed and broadcast on television and radio. (The Exponents, n.d.-b)",
        background: "linear-gradient(135deg, #293c46, #0d1215)"
    },
    {
        year: 1983,
        title: "Prayers Be Answered released",
        description: "In December, the band releases its debut studio album, Prayers Be Answered. It includes re-recordings of “Victoria,” “Your Best Friend Loves Me Too,” “Poland” and “All I Can Do,” alongside “Know Your Own Heart” and “I’ll Say Goodbye (Even Though I’m Blue).” (Hung Medien, n.d.)",
        background: "linear-gradient(135deg, #57402d, #16100b)"
    },
    {
        year: 1984,
        title: "Big successes",
        description: "Prayers Be Answered stays in the New Zealand charts for nearly a year and achieves double-platinum sales. At the 1984 New Zealand Music Awards, the band wins Best Group and Album of the Year, while Jordan Luck wins the top male vocalist award. (The Exponents, n.d.-b; The New Zealand Music Hall of Fame Trust, n.d.)",
        background: "linear-gradient(135deg, #57402d, #16100b)"
    },
    {
        year: 1984,
        title: "“Sex and Agriculture”",
        description: "Second guitarist Chris Sheehan joins the band. His first recording with the group is the darker single “Sex and Agriculture,” released in August. (Brown, 2013)",
        background: "linear-gradient(135deg, #493b31, #15100d)"
    },
    {
        year: 1985,
        title: "Personnel changes",
        description: "Michael “Harry” Harallambi is dismissed from the band after the 1984 awards period. The group goes through several drummer changes, and the decision to remove Harallambi is later regarded by the band as a mistake. (Brown, 2013)",
        background: "linear-gradient(135deg, #403b4a, #121116)"
    },
    {
        year: 1985,
        title: "Expectations",
        description: "British producer Ian Taylor works with Dance Exponents on their second studio album, Expectations, recorded at Mandrill Studios in Auckland and released in May. (Brown, 2013)",
        background: "linear-gradient(135deg, #44364a, #110d14)"
    },
    {
        year: 1986,
        title: "Amplifier",
        description: "The band releases its third studio album, Amplifier. It receives a more moderate response than Prayers Be Answered, and drummer Eddie Olson later leaves the group. (The Exponents, n.d.-b)",
        background: "linear-gradient(135deg, #3e4930, #10130c)"
    },
    {
        year: 1987,
        title: "The overseas gamble",
        description: "Dance Exponents move to Britain to try to break into the UK music market. (The New Zealand Music Hall of Fame Trust, n.d.)",
        background: "linear-gradient(135deg, #303b49, #0b0e12)"
    },
    {
        year: "1987–1990",
        title: "The struggle in Britain",
        description: "The band struggles to establish itself in Britain, playing to New Zealand expatriate communities and taking day jobs to survive. The UK period lasts around four frustrating years. (Brown, 2013; The Exponents, n.d.-b)",
        background: "linear-gradient(135deg, #443e38, #12100e)"
    },
    {
        year: "1987–1990",
        title: "A missed record deal",
        description: "CBS Records shows interest after hearing the band’s demos and performances. A showcase for A&R director Muff Winwood goes badly; Brown writes that “the sound was messy and so was Luck” (2013, para. 16), and CBS signs another band instead.",
        background: "linear-gradient(135deg, #453936, #120d0b)"
    },
    {
        year: 1990,
        title: "The band returns",
        description: "After several difficult years in Britain, the band returns to New Zealand following interest from PolyGram Records. (Brown, 2013)",
        background: "linear-gradient(135deg, #314339, #0c120e)"
    },
    {
        year: 1990,
        title: "The band reunites",
        description: "Four original members reunite, including drummer Michael “Harry” Harallambi. (The Exponents, n.d.-b)",
        background: "linear-gradient(135deg, #39432e, #0d1209)"
    },
    {
        year: 1990,
        title: "A name-change misstep",
        description: "The band briefly changes its name to Amplifier and tours New Zealand, but audiences do not recognise the new name and the tour struggles. The group changes its name back to The Exponents. (The Exponents, n.d.-b)",
        background: "linear-gradient(135deg, #4c3545, #150c12)"
    },
    {
        year: 1991,
        title: "“Why Does Love Do This to Me?”",
        description: "The single is released in April and reaches No. 3 on the New Zealand singles chart, becoming one of the band’s defining songs. (Hung Medien, n.d.)",
        background: "linear-gradient(135deg, #542f2f, #160909)"
    },
    {
        year: 1991,
        title: "“Who Loves Who the Most?”",
        description: "The band releases another major single, “Who Loves Who the Most?”, which also reaches No. 3 on the New Zealand singles chart. (Hung Medien, n.d.)",
        background: "linear-gradient(135deg, #493b31, #15100d)"
    },
    {
        year: 1992,
        title: "Something Beginning With C",
        description: "The Exponents release Something Beginning With C, their first No. 1 album. It features major songs including “Why Does Love Do This to Me?” and “Who Loves Who the Most?” and eventually achieves triple-platinum status. (Brown, 2013; The New Zealand Music Hall of Fame Trust, n.d.)",
        background: "linear-gradient(135deg, #4a4630, #121109)"
    },
    {
        year: 1992,
        title: "“Whatever Happened to Tracey?”",
        description: "“Whatever Happened to Tracey?” becomes another Top 10 single, reaching No. 6 on the New Zealand chart. (Hung Medien, n.d.)",
        background: "linear-gradient(135deg, #542f2f, #160909)"
    },
    {
        year: 1992,
        title: "The Australian move",
        description: "The band signs with Phonogram Records in Australia and relocates to Sydney to record its next album. Brian Jones leaves before the recording sessions, while Dave Dobbyn and Brent Williams contribute guitar parts. (The Exponents, n.d.-b)",
        background: "linear-gradient(135deg, #303b49, #0b0e12)"
    },
    {
        year: 1993,
        title: "A rockier direction",
        description: "The band develops a significantly rockier sound for its fifth studio album, Grassy Knoll, recorded in Sydney with guitar contributions from Dave Dobbyn and Brent Williams. (The Exponents, n.d.-b)",
        background: "linear-gradient(135deg, #293c46, #0d1215)"
    },
    {
        year: 1994,
        title: "Grassy Knoll",
        description: "Grassy Knoll is released in September. Although the album achieves gold status, it does not match the commercial success of Something Beginning With C, and the band struggles to break into the Australian market. (The Exponents, n.d.-b)",
        background: "linear-gradient(135deg, #413b31, #12100c)"
    },
    {
        year: 1994,
        title: "New blood",
        description: "Australian guitarist Dave “Duck” Barraclough joins the band as a guitarist and songwriting partner. (Brown, 2013)",
        background: "linear-gradient(135deg, #3e4930, #10130c)"
    },
    {
        year: 1995,
        title: "“La La Lulu”",
        description: "“La La Lulu,” Barraclough’s first contribution to the band’s recorded material, is released as a single in October alongside “Summer You Never Meant.” (Brown, 2013)",
        background: "linear-gradient(135deg, #493b31, #15100d)"
    },
    {
        year: 1995,
        title: "Once Bitten, Twice Bitten",
        description: "The band releases Once Bitten, Twice Bitten: The Singles 1981–1995, a compilation of its earlier hits. The album reaches No. 1 and achieves five-times-platinum status. (The Exponents, n.d.-b)",
        background: "linear-gradient(135deg, #303f3e, #0b1211)"
    },
    {
        year: 1996,
        title: "“Do You Feel in Love”",
        description: "The Exponents release the single “Do You Feel in Love” in July, continuing their recording career after the success of their compilation album. (The Exponents, n.d.-b)",
        background: "linear-gradient(135deg, #44364a, #110d14)"
    },
    {
        year: 1997,
        title: "Better Never Than Late",
        description: "After signing with Sony Music, the band releases its sixth studio album, Better Never Than Late, co-produced by Eddie Rayner and The Exponents. The album reaches No. 3 on the New Zealand album chart. (Hung Medien, n.d.; The Exponents, n.d.-b)",
        background: "linear-gradient(135deg, #39432e, #0d1209)"
    },
    {
        year: 1999,
        title: "A changing lineup",
        description: "David Gent takes a break from the band, and Steve Simpson joins on bass. (The Exponents, n.d.-b)",
        background: "linear-gradient(135deg, #403b4a, #121116)"
    },
    {
        year: 1999,
        title: "Hello, Love You, Goodbye",
        description: "The band releases its final studio album, Hello, Love You, Goodbye, in December. It reaches No. 48 on the New Zealand album chart in January 2000. (Brown, 2013; Hung Medien, n.d.)",
        background: "linear-gradient(135deg, #453936, #120d0b)"
    },
    {
        year: 1999,
        title: "The end",
        description: "The Exponents embark on their final New Zealand tour, titled Hello, Love You, Goodbye, before disbanding and bringing an 18-year journey to an end. (The Exponents, n.d.-b)",
        background: "linear-gradient(135deg, #292929, #080808)"
    },
    {
        year: 2002,
        title: "A place in Nature’s Best",
        description: "“Why Does Love Do This to Me?” is included in Nature’s Best, a collection celebrating New Zealand popular songs. In 2012, Nicholas Braae examines the song in his musicological analysis of the collection and the wider New Zealand popular music canon. (Braae, 2012)",
        background: "linear-gradient(135deg, #54482f, #151109)"
    }
];


/* ---------- Get HTML elements ---------- */

const yearElement = document.getElementById("year");
const artworkYearElement = document.getElementById("artworkYear");

const titleElement = document.getElementById("eventTitle");
const descriptionElement = document.getElementById("eventDescription");

const timelineElement = document.getElementById("timeline");
const currentTimelineYearElement =
    document.getElementById("currentTimelineYear");
const artworkElement = document.getElementById("artwork");

const previousButton = document.getElementById("previousButton");
const nextButton = document.getElementById("nextButton");
const playButton = document.getElementById("playButton");


/* ---------- Current event ---------- */

let currentIndex = 0;
let playing = false;
let playInterval;


/* ---------- Update timeline ---------- */

function updateTimeline(index) {
    currentIndex = Number(index);

    const data = timelineData[currentIndex];

    if (!data) {
        return;
    }

    // Update year and event information
    yearElement.textContent = data.year;
    artworkYearElement.textContent = data.year;
    currentTimelineYearElement.textContent = data.year;

    titleElement.textContent = data.title;
    descriptionElement.textContent = data.description;

    // Update artwork background
    artworkElement.style.background = data.background;

    // Restart artwork animation
    artworkElement.classList.remove("fade");
    void artworkElement.offsetWidth;
    artworkElement.classList.add("fade");

    // Update slider position
    timelineElement.value = currentIndex;
}


/* ---------- Next and previous events ---------- */

function nextYear() {
    if (currentIndex < timelineData.length - 1) {
        updateTimeline(currentIndex + 1);
    } else {
        stopPlaying();
    }
}

function previousYear() {
    if (currentIndex > 0) {
        updateTimeline(currentIndex - 1);
    }
}


/* ---------- Play / pause ---------- */

function startPlaying() {
    if (playing) {
        return;
    }

    playing = true;
    playButton.textContent = "⏸";

    playInterval = setInterval(() => {
        if (currentIndex >= timelineData.length - 1) {
            stopPlaying();
            return;
        }

        nextYear();
    }, 3500);
}


function stopPlaying() {
    playing = false;
    playButton.textContent = "▶";
    clearInterval(playInterval);
}


function togglePlaying() {
    if (playing) {
        stopPlaying();
    } else {
        startPlaying();
    }
}


/* ---------- Button events ---------- */

nextButton.addEventListener("click", () => {
    stopPlaying();
    nextYear();
});

previousButton.addEventListener("click", () => {
    stopPlaying();
    previousYear();
});

playButton.addEventListener("click", () => {
    togglePlaying();
});


/* ---------- Timeline slider ---------- */

timelineElement.min = 0;
timelineElement.max = timelineData.length - 1;
timelineElement.step = 1;
timelineElement.value = 0;

timelineElement.addEventListener("input", () => {
    stopPlaying();
    updateTimeline(timelineElement.value);
});


/* ---------- Keyboard controls ---------- */

document.addEventListener("keydown", (event) => {
    // Avoid interfering with keyboard input in form fields
    if (
        event.target instanceof HTMLInputElement ||
        event.target instanceof HTMLTextAreaElement
    ) {
        return;
    }

    if (event.key === "ArrowRight") {
        stopPlaying();
        nextYear();
    }

    if (event.key === "ArrowLeft") {
        stopPlaying();
        previousYear();
    }

    if (event.key === " ") {
        event.preventDefault();
        togglePlaying();
    }
});


/* ---------- Start ---------- */

updateTimeline(0);
