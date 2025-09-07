// Book navigation system
let currentPage = parseInt(localStorage.getItem('bookCurrentPage')) || 1;
const totalPages = 5;

// Page content storage
const pages = {
    1: `
        <div class="cover-page">
            <img src="Cover.jpg" alt="Cleopatra's Flowers" class="large-cover">
         
        </div>
    `,
    2: ` <p><strong>I Forgot how they call the part of the book where you talk about the author but yeah this is the part ~</strong></p>
        
        <p><strong>Author:</strong> Perez HABTAI (that's my actual character name in the football manager game "thought it wasn't obvious when creating it")</p>
        
        <br>
        
        <p><strong>CAUTION‼ ~</strong>This book doesn't have a beginning so imagine you reach home and you find an mnet movie 30 mins in and it hooks you but then your mother sends you and you come back nga it has ended so now you keep trying to see if it'll show the next day but you don't know… (if you didn't experience this you…you need to touch some grass <a href="Disgrace.mp4">man</a>)</p>
        
        <p>Not finished product obviously (in Ssekizivu's voice) <a href="READ ME-books.html" target="_blank"> "Click Me" </a></p>
        
        <p>Nah You Actually have to click up there man!</p>

        <p>~Man l just really hope you mfs get these references.</p>
        
        <p>~There is great misuse of this sign (…) great misuse!!!!</p>
        
        <p>~My only regret is that I know some of you won't get these references, so now ive resorted to justifying them with links for my slow pookies. Also I apologize for the fact that I underestimate some of you especially in this context but that's because you mfs be so slow sometimes. Infact so slow that I use that time you take, to remember Andruma and Sanya danced the same song(Bellie Eilish and Khalid one), same dance strokes, same climax dance move "twice!!!" (some other: Disney girl runs towards the guy and they carry her in air on some dramatic shiii) and I cringe at all Disney movies so you can imagine how much I cringe thinking about this. Anyways I ain't hating on them, they just reminded me of how bad I hated Disney movies. To be specific Disney in general. Infact Nickelodeon, CN, Boomerang(the one with tom and Jerry and Johny Bravo thing), Channel 44 ~ you'll soon find out as to why this is here) then then Disney jr (Sofia the first man! Goated theme song man) then Disney in that order.</p>
    `,
    3: `
        <h2>Chapter Zero. The one without a chapter name.</h2>
        
        <p>As you'll soon find out multiple times, I am not a great writer, in fact it had never occurred to you that you'd once think of the words "Perez wrote a book?" "Wait that nigga just sent me a two chaptered preview of a book?" I couldn't even blame you if you thought that, I never once thought I'd write one too. <br> I once liked literature, I really did but I was always too lazy(still am) to read the novels at school. So I'd read the book 40-60 mins of lunch break towards the lesson. Not to brag but watching so many movies helped me cause I'd just read small scenes that everyone's been talking about and then predict the in between. <br> This trick of course wouldn't last for long but it did help through term 1 that year and of course I was in the top 3. I am who I think I am.</p>
        
        <p>I dropped literature the next term… it was too easy!!! I convinced myself it was but deep down...I really don't know why you guys struggled. Cowrie of Hope? You didnt see that shiiii coming from a mile away? (I never read past the first chapter cause I was lazy and i dropped it after seeing the questions).You know when you do something so well the first time and now dont want to try again cause you might be shit at it so you take your W but guys keep begging you to try again...that D1 in that term felt like that the next term when the teachers wanted me back. So desperate!(<a href ="show off meme.mp4">bwahahahaha</a>).And no I'd not call that being a coward, cause I could if I wanted "right right!" Yall were actually brave to do lit man, that paper wasn't your mother. Maybe I'd be a better writer now. The literature gods did get the win after all. <br> Lyn though, she read so many books, she loves reading, so she rubbed a little of that magic on me. I'm telling you this cause reading a book and writing one are really hard but different in so many ways too. Writing a book about yourself as the narrator or even a core character or even whatever you'll perceive me being as you read on, is probably the hardest thing I've done all my life or it's up there. It's difficult to know when you have crossed that line between over sharing, over opinionated or even… I'm actually out of words but you get what I mean. Stripping naked and wearing a bikini in front of people are two different things and yet both can be fulfilling(body confidence) or bring out all your insecurities crashing down at you but I guess it all depends how well you know when you are about to cross that line. That made sense right?</p>
        
        <p>Well in this book, I don't know if I'll know or if I'll follow whatever I just said up there but hey! Kim kardashian's shit is out there. Can't be that hard to live with this. If you do find any typos, I may correct them later or maybe not.</p>
        
        <p>So sit relax drink some cucumber water or just put the cucumbers in your..."whatever gets comfortable <a  target href="kind of man.jpg">miss/sir</a>" and enjoy this shiiii, it slightly might be better than TikTok brain rot.</p>
        
       
    `,
    4: `
        <h2>CHAPTER - Numero Uno, Senor Alfredo!</h2>
        <p><em>(maybe watching <a href="telemundo.jpg">Telemundo</a> wasn’t so useless after all)</em></p>
        <br>
        <p>So I wrote this down cause you know my shii (My memory is as good as my eyesight sometimes)</p>
        <p>Anyways I didn’t intend to make it a list but lemme jazz you about my first cool people I’ve ever met in my life. To me everyone is cool in their way but in the way that I look at the world, these were the first people in the different categories/ or moments </p>
        <br
        <p><em>The First cool teacher ~ Alfred </em></p>
        <p>He may have been autistic but he was cool.</p>
        <p>So Alfred was a new teacher as we joined p6(actually I’m not entirely sure about how  Alfred appeared to be in life) I think he was background character that just became a side character somehow…
        <br>(Side joke/self burn- I can never be a mysterious character cause why I’m this talkative) <Dino Standup meme><br>Back to Alfred… The man didn’t just hate noise but he specifically hated and dreaded but was mostly disturbed by stupid noise. What is stupid Noise? Forexample: 1. People who walk pulling their shoes… And the girls had these crafts(shoes) ~ “you are Ugandan enough to know these” that made ears bleed. i actually think these wear like prototypes for a loud music instrument cause they really didnt play at how loud they were at times. So one day he called all those girls aside got their shoes and throw them off the second floor (I feel like the first floor is the first one down you use to enter so that would make this the third floor). Thing is the window was close to the fence next to the main road so then he told them to go pick them up bare feet. The road was actually murram and full of sharp gravel that could actually cut your feet.</p>
        <p>Brutal! I know but they lowkey(I feel so gen z for using lowkey in book) deserved it. Yes I know I don’t have to take sides but cmon! I enjoyed the faces they had on when they entered class. 
        <br>So from then everyone was walking very Immaculate and stupendous …..(I’m letting the laughs quiet down from Kissa on table 9)</p>
<br>
        <p>2. Have you also ever been picking a book but then drop your Helix mathematics set?(Now for you, you had Picfare maths set…
        <br>”the ghetto!!!! ~ in Arnold’s voice ” (Some good laughs from my mules over there).
        <br> Now those ones plus You…. He’d want to YAAAAAAAANK those over the balcony and go full John Wick on them. (Like John wick whose dog’s puppy was also killed….like if his wife was pregnant with kids and they killed her…like if..if..if his wife had a daughter and that daughter had a dog with a pup…..) sorry sorry my sister in “Yues” has texted~This would’ve given me street cred in my primary school,  would’ve gotten me fineshyt. But you got the John wick point, right?.
        <br>"take a 5 min break to check your phone cause i know your attention span is shit but you deny it, you cow. And if you’ve not even made it up to this point without checking your phone ….”You know what Greg?….You are not a good friend, don’t call me, don’t come by house"
</p>
<p>back to Alfred 
Alfred was my science teacher that taught  me from p6-p7. First person apart from my sister to think the name Perez was cool and he told me that, it really hit me different… so maybe that’s what made him not continue to be a background character (in Family show, this is the part stewie gets molested). He also actually cared about every individu… For clarity I was not molested, it’s important to close that plot hole. 
So the reason I’m telling you about Alfred is because he was taught us the reasons why people take on alcoholism and smoking.
The point that I never forgot was:
People smoke and drink alcohol to forget problems. I’d never understood this till later on in life. Sometimes you just have to drink that shit out of the system. Pombe Sigara sometimes can fix problems/life. Now I don’t advise alcoholism or smoking but he then defended it with something
 he said he himself believed. He said the first time he tried a cigarette was when he waiting for a bus when he was 17.  "A man stood around the corner leaning against the brick wall, flicking his lighter and pulling out a white box with big
 letter “REX”. The smoke curled into the air, a pale, ghostly blue. Under the tree bus station". Alfred asks “why do smoke? Isn’t it bad for your health? I heard the radio say that” The man responds “What’s the point of dying with healthy lungs!”  On tha….. (Konka Orujjungu waluhurira….bwenu Nkashoma. <I think I maybe more of a mukiga than a Munyankole “walu  instead of “waru.” 
To Alfred once more,  he promised he’d start smoking if he lived till 45 cause of that man’s simple question. Think about it after you die, of what importance will dying with healthy body organs be?  Who’s to say who is right? All I know is I don’t really care after I’ve died cause you know, I’ve died!!!! He said all this leaning on the wall next to the door… there was a beautiful glare of sunset light that was hitting him. The room was so quiet as if everyone had felt what  he felt that day at 17. He had dropped one of the coldest lines I’d ever heard in class, the sunset was on some Dennis Villanueva type shii in Dune and he was able to capture everyone with him for that moment. (If this doesn’t make sense to you then that’s most probably because I’ve never written a book before and that’s majorly due to the fact that I’ve never thought about writing a book till 2 hours ago when I got high). 
What’s the point? I don’t think it matters but if you ever lean against the wall and a kid asks you why you smoke or leaning against the wall as the sunset hits you as if you’ve also captured 58 students immaculately and stupendously silent then tell that big forehead kid “what’s the point..::?” (No foreheads were meant to be hurt… mwah kisses your big forehead)
</p>
    `,
    4: `
        <h2>Chapter two ~ MEET FELIX OKOBOI</h2>
        <p><em>(if you studied Turkish like me…. You’d now say Chapter Iki. I Studied it for one term so I didn’t reach the part where we learnt how to say chapter)</em></p>
        <br>
        <p>I dont necessarily remember why i decided to write this chapter considering id vowed to write this book only when high but I guess as the root of decisions let’s blame Cleopatra and her flowers for now. Since this book initially has no beginning here’s is a small fun fact… I was born on Tuesday, first fell in love on a Tuesday too…
</p>
<p>Have you ever actually thought about the act of “I’m thinking about life”. This person wasn’t necessarily “A” cool person, well at least not in the context of this manuscript(used the word book to many times). I don’t actually remember his name but I remember 40% of his face and he looks like a person called Felix Okoboi. Felix was actually a class mate but let’s just call our “John Doe”, Felix for now or maybe forever. Felix was a good friend, he was also a class higher and he was well spoken. Felix one time allowed me join him on the coolest washing spot bench. Now you might be wondering why tf I'm talking about the coolest washing spot? You've never had to wash a shit load of clothes before on a fucking Saturday after a week of straight up academics. To wash a shit load of clothes that same day at once, you need the perfect bench, seat and spot. This was in 2017(for the clanker reading this in 2067…. I did not use your ancestors ”washing machines” but I did do it later on that term and it was a huge load of white (your brain is sick for thinking like that)…<a href="of people.jpg">its okay to laugh at that child of christ</a>).<br> Washing in boarding school will forever be the reason i was so happy to finish high school. You'd need the best shade with best breeze, you'd need a good conversion bro or group or a good spot to watch some teenage boys in the beginning of their early athleticism prime in a very non-gay way. Catholic single sex schools didnt think about that, huh? can't escape some allegations, Confessions must be something. Now if you are so patriotic about your school and "have caught feelings" beat to the image that your brain created about the teenage boys in early prime athleticism, Or go for confession your priest may love to see you! <br> Cancel Him Cancel him!! I'm definitely going to need the legal fees guys!!! <br>  Now for purposes of the fact that I’m in bed and i feel my eyes have given me 15-20 mins before I black tf out, I’ll skip the drawing of this place but just know to me this place was cool for washing and a hard a good view of the pitch so use your imagination you cow. </p>
<p>To Be Continued </p>
    `,
    5: `
        <h2>Chapter 3 ~Sesh with me</h2>
        <p><em>"It'd be very nice if you could light up with me for this one"</em></p>
        <br>
        <p>Pulled out his lighter. Ain't that mine. I responded "Laaba de guy"</p>
        <p><em>To really be continued after you lighting up you cow!</p>
    `
};

// Initialize the page
function initializePage() {
    updatePageContent();
    updatePageNumber();
    updateNavigationButtons();
    updateControlsVisibility();
}

// Update controls visibility based on current page
function updateControlsVisibility() {
    const mainControls = document.getElementById('main-controls');
    const coverControls = document.getElementById('cover-controls');

    if (currentPage === 1) {
        mainControls.style.display = 'none';
        coverControls.style.display = 'block';
    } else {
        mainControls.style.display = 'flex';
        coverControls.style.display = 'none';
    }
}

// Update page content
function updatePageContent() {
    const pageContentElement = document.getElementById('page-content');

    // Add turning animation
    pageContentElement.classList.add('turning');

    setTimeout(() => {
        pageContentElement.innerHTML = pages[currentPage];
        pageContentElement.classList.remove('turning');

        // Show/hide appropriate controls based on page
        updateControlsVisibility();
    }, 400);

    // Save current page to localStorage
    localStorage.setItem('bookCurrentPage', currentPage);
}

// Update page number display
function updatePageNumber() {
    document.getElementById('page-number').textContent = `Page ${currentPage} of ${totalPages}`;
}

// Update navigation button states
function updateNavigationButtons() {
    const prevButton = document.querySelector('.controls button:first-child');
    const nextButton = document.querySelector('.controls button:last-child');

    prevButton.disabled = currentPage === 1;
    nextButton.disabled = currentPage === totalPages;

    prevButton.style.opacity = currentPage === 1 ? '0.5' : '1';
    nextButton.style.opacity = currentPage === totalPages ? '0.5' : '1';
}

// Navigate to previous page
function prevPage() {
    if (currentPage > 1) {
        currentPage--;
        updatePageContent();
        updatePageNumber();
        updateNavigationButtons();
    }
}

// Navigate to next page
function nextPage() {
    if (currentPage < totalPages) {
        currentPage++;
        updatePageContent();
        updatePageNumber();
        updateNavigationButtons();
    }
}

// Go to specific page
function goToPage(pageNum) {
    if (pageNum >= 1 && pageNum <= totalPages) {
        currentPage = pageNum;
        updatePageContent();
        updatePageNumber();
        updateNavigationButtons();
    }
}

// Initialize when page loads
document.addEventListener('DOMContentLoaded', initializePage);
