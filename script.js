/* =========================================
   THE EXPONENTS — 1981–2001
   Main JavaScript
   ========================================= */


/* ---------- Timeline data ---------- */

const timelineData = {

    1981: {
        title: "Dance Exponents form in Christchurch",
        description:
            "The band forms in Christchurch, beginning a two-decade journey through New Zealand's rock music scene.",
        location: "CHRISTCHURCH, NEW ZEALAND",
        category: "FORMATION",
        why:
            "The formation of Dance Exponents marks the beginning of the band's story and places them within Christchurch's developing rock scene.",
        sources:
            "The Exponents — Official Band History",
        background:
            "linear-gradient(135deg, #303030, #101010)"
    },

    1982: {
        title: "Victoria breaks through",
        description:
            "The band's debut single Victoria becomes their first major chart success, reaching No. 6 in New Zealand.",
        location: "NEW ZEALAND",
        category: "BREAKTHROUGH",
        why:
            "Victoria establishes Dance Exponents as a significant new name in New Zealand music.",
        sources:
            "The Exponents — Official History; NZ Music Hall of Fame",
        background:
            "linear-gradient(135deg, #493b31, #15100d)"
    },

    1983: {
        title: "The band's sound develops",
        description:
            "Dance Exponents continue building their reputation through recording and live performances around New Zealand.",
        location: "NEW ZEALAND",
        category: "DEVELOPMENT",
        why:
            "This period shows the transition from promising Christchurch band to established national act.",
        sources:
            "Rip It Up, November 1983",
        background:
            "linear-gradient(135deg, #293c46, #0d1215)"
    },

    1984: {
        title: "Prayers Be Answered",
        description:
            "The Exponents' second album becomes a major success and wins Album of the Year at the New Zealand Music Awards.",
        location: "NEW ZEALAND",
        category: "SUCCESS",
        why:
            "The album confirms that the band has moved beyond a local success and become one of New Zealand's leading rock acts.",
        sources:
            "NZ Music Hall of Fame; The Exponents — Official History",
        background:
            "linear-gradient(135deg, #57402d, #16100b)"
    },

    1985: {
        title: "Building a national audience",
        description:
            "The band continues releasing music and performing throughout New Zealand, strengthening its growing audience.",
        location: "NEW ZEALAND",
        category: "TOURING",
        why:
            "Regular performances and recordings helped establish the band's national presence.",
        sources:
            "The Exponents — Official History",
        background:
            "linear-gradient(135deg, #403b4a, #121116)"
    },

    1986: {
        title: "A changing musical direction",
        description:
            "The band's music continues to develop as they move through the middle of the decade.",
        location: "NEW ZEALAND",
        category: "DEVELOPMENT",
        why:
            "The middle of the 1980s represents an important period of experimentation and development.",
        sources:
            "AudioCulture — The Exponents",
        background:
            "linear-gradient(135deg, #3e4930, #10130c)"
    },

    1987: {
        title: "The move to Britain",
        description:
            "The band moves to the United Kingdom in an attempt to establish themselves internationally.",
        location: "LONDON, UK",
        category: "INTERNATIONAL",
        why:
            "The move demonstrates the ambition of New Zealand musicians attempting to break into a much larger international market.",
        sources:
            "The Exponents — Official History; AudioCulture",
        background:
            "linear-gradient(135deg, #303b49, #0b0e12)"
    },

    1988: {
        title: "The UK years",
        description:
            "The band works to establish itself in Britain while continuing to develop its music.",
        location: "UNITED KINGDOM",
        category: "INTERNATIONAL",
        why:
            "The British experience reveals the difficulty New Zealand bands faced when attempting to build an audience overseas.",
        sources:
            "The Exponents — Official History",
        background:
            "linear-gradient(135deg, #443e38, #12100e)"
    },

    1989: {
        title: "Back to New Zealand",
        description:
            "After the difficulties of the UK period, the band returns to New Zealand.",
        location: "NEW ZEALAND",
        category: "RETURN",
        why:
            "Returning home becomes an important turning point before the band's biggest period of mainstream success.",
        sources:
            "The Exponents — Official History",
        background:
            "linear-gradient(135deg, #314339, #0c120e)"
    },

    1990: {
        title: "Dance Exponents become The Exponents",
        description:
            "After briefly performing as Amplifier, the band settles on the name The Exponents.",
        location: "NEW ZEALAND",
        category: "REINVENTION",
        why:
            "The name change marks a new phase for the band just before their biggest commercial success.",
        sources:
            "NZ Music Hall of Fame; The Exponents — Official History",
        background:
            "linear-gradient(135deg, #4c3545, #150c12)"
    },

    1991: {
        title: "Why Does Love Do This to Me?",
        description:
            "The single reaches No. 3 on the New Zealand singles chart and becomes one of the band's defining songs.",
        location: "NEW ZEALAND",
        category: "HIT SINGLE",
        why:
            "The song becomes central to the band's cultural legacy and eventually one of the most recognisable songs in New Zealand popular music.",
        sources:
            "NZ On Screen — Why Does Love Do This to Me?; The Exponents — Official History",
        background:
            "linear-gradient(135deg, #542f2f, #160909)"
    },

    1992: {
        title: "Something Beginning with C reaches No. 1",
        description:
            "Something Beginning with C reaches the top of the New Zealand album chart, while Why Does Love Do This to Me? continues its impact.",
        location: "NEW ZEALAND",
        category: "NO. 1 ALBUM",
        why:
            "The early 1990s represent the band's peak mainstream period and their strongest connection with a national audience.",
        sources:
            "NZ Music Hall of Fame; The Exponents — Official History",
        background:
            "linear-gradient(135deg, #4a4630, #121109)"
    },

    1993: {
        title: "Mainstream success continues",
        description:
            "The Exponents remain an established part of New Zealand's popular music landscape.",
        location: "NEW ZEALAND",
        category: "MAINSTREAM",
        why:
            "The band's continued visibility demonstrates the lasting impact of their early-1990s success.",
        sources:
            "AudioCulture — The Exponents",
        background:
            "linear-gradient(135deg, #343d4d, #0d1015)"
    },

    1994: {
        title: "A fixture of Kiwi rock",
        description:
            "The Exponents continue performing and recording as their songs become increasingly familiar to New Zealand audiences.",
        location: "NEW ZEALAND",
        category: "KIWI ROCK",
        why:
            "The band is increasingly associated with the broader idea of New Zealand rock music.",
        sources:
            "Shuker & Pickering — Kiwi Rock",
        background:
            "linear-gradient(135deg, #413b31, #12100c)"
    },

    1995: {
        title: "The legacy grows",
        description:
            "The Exponents continue performing across New Zealand.",
        location: "NEW ZEALAND",
        category: "LEGACY",
        why:
            "By the middle of the 1990s, the band's most successful songs had become firmly established in New Zealand popular culture.",
        sources:
            "AudioCulture — The Exponents",
        background:
            "linear-gradient(135deg, #303f3e, #0b1211)"
    },

    1996: {
        title: "A national audience",
        description:
            "The band's music continues reaching audiences through radio, live performances and recordings.",
        location: "NEW ZEALAND",
        category: "POPULAR CULTURE",
        why:
            "The band's history increasingly becomes intertwined with New Zealand's mainstream music culture.",
        sources:
            "AudioCulture — The Exponents",
        background:
            "linear-gradient(135deg, #44364a, #110d14)"
    },

    1997: {
        title: "The Exponents endure",
        description:
            "The band remains a familiar presence within New Zealand popular music.",
        location: "NEW ZEALAND",
        category: "ENDURANCE",
        why:
            "Longevity is an important part of understanding how the band's music became culturally significant.",
        sources:
            "The Exponents — Official History",
        background:
            "linear-gradient(135deg, #39432e, #0d1209)"
    },

    1998: {
        title: "Approaching the end",
        description:
            "After almost two decades together, the band's original period draws toward its conclusion.",
        location: "NEW ZEALAND",
        category: "LATE PERIOD",
        why:
            "The end of the original period provides a contrast with the lasting popularity of the band's music.",
        sources:
            "The Exponents — Official History",
        background:
            "linear-gradient(135deg, #453936, #120d0b)"
    },

    1999: {
        title: "The band breaks up",
        description:
            "The Exponents break up after nearly two decades of music-making.",
        location: "NEW ZEALAND",
        category: "BREAKUP",
        why:
            "The breakup closes the main chapter of the band's history while their most successful songs continue to live on.",
        sources:
            "The Exponents — Official History",
        background:
            "linear-gradient(135deg, #292929, #080808)"
    },

    2000: {
        title: "Songs outlive the band",
        description:
            "Although the band is no longer together, The Exponents' music continues to be heard and remembered across New Zealand.",
        location: "NEW ZEALAND",
        category: "LEGACY",
        why:
            "The story shifts from the band's active career toward the cultural life of its music.",
        sources:
            "Braae — The paths of New Zealand popular music through Nature's Best",
        background:
            "linear-gradient(135deg, #3b3b3b, #0d0d0d)"
    },

    2001: {
        title: "Why Does Love Do This to Me? enters Nature's Best",
        description:
            "Why Does Love Do This to Me? is included in Nature's Best, helping cement the song's place in the canon of New Zealand popular music.",
        location: "NEW ZEALAND",
        category: "CULTURAL LEGACY",
        why:
            "The song's inclusion demonstrates how a band formed in Christchurch became part of the wider story and memory of New Zealand music.",
        sources:
            "Braae — The paths of New Zealand popular music through Nature's Best",
        background:
            "linear-gradient(135deg, #54482f, #151109)"
    }

};


/* ---------- Get HTML elements ---------- */

const yearElement = document.getElementById("year");
const artworkYearElement = document.getElementById("artworkYear");

const titleElement = document.getElementById("eventTitle");
const descriptionElement = document.getElementById("eventDescription");

const locationElement = document.getElementById("location");
const categoryElement = document.getElementById("category");

const timelineElement = document.getElementById("timeline");
const currentTimelineYearElement =
    document.getElementById("currentTimelineYear");

const artworkElement = document.getElementById("artwork");

const previousButton = document.getElementById("previousButton");
const nextButton = document.getElementById("nextButton");
const playButton = document.getElementById("playButton");


/* ---------- Current year ---------- */

let currentYear = 1981;

let playing = false;

let playInterval;


/* ---------- Update timeline ---------- */

function updateTimeline(year) {

    currentYear = Number(year);

    const data = timelineData[currentYear];

    if (!data) {
        return;
    }


    /* Update text */

    yearElement.textContent = currentYear;

    artworkYearElement.textContent = currentYear;

    currentTimelineYearElement.textContent = currentYear;

    titleElement.textContent = data.title;

    descriptionElement.textContent = data.description;

    locationElement.textContent = data.location;

    categoryElement.textContent = data.category;



    /* Update artwork */

    artworkElement.style.background = data.background;


    /* Restart animation */

    artworkElement.classList.remove("fade");

    void artworkElement.offsetWidth;

    artworkElement.classList.add("fade");


    /* Update slider */

    timelineElement.value = currentYear;
}


/* ---------- Next year ---------- */

function nextYear() {

    if (currentYear < 2001) {

        updateTimeline(currentYear + 1);

    } else {

        stopPlaying();

    }
}


/* ---------- Previous year ---------- */

function previousYear() {

    if (currentYear > 1981) {

        updateTimeline(currentYear - 1);

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

        if (currentYear >= 2001) {

            stopPlaying();

            return;
        }

        nextYear();

    }, 2500);
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

timelineElement.addEventListener("input", () => {

    stopPlaying();

    updateTimeline(timelineElement.value);

});


/* ---------- Keyboard controls ---------- */

document.addEventListener("keydown", (event) => {

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

updateTimeline(1981);
