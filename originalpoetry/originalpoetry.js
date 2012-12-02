
function poetryOriginal() {
	var headerHTML = "<h2>	poetry - original version </h2>";
	var poemHTML = "<img src = 'poetry.jpg' width = '80%'/>";
	document.getElementById('heading').innerHTML = headerHTML;
	document.getElementById('contentArea').innerHTML = poemHTML;
}

function poetryRevised() {
	var headerHTML = "<h2>	poetry - revised version </h2>";
	var poemHTML = "<p> A poem is alive<br /> Spurring from the inside </p> <p> A poem is a tear <br /> From someone's many fears </p> <p> A poem is a smile <br /> From moments all worthwhile </p> <p> A poem is a light <br /> Shining from day to night </p> <p> Poems will be forevermore <br /> From first light, 'till final war. </p>";
	document.getElementById('heading').innerHTML = headerHTML;
	document.getElementById('contentArea').innerHTML = poemHTML;
}

function poetryAnalysis() {
	var headerHTML = "<h2> poetry - analysis </h2>";
	var paragraph1HTML = "<p><em> The poem “Poetry” by Carlos Arcenas, written in 2012 is an example of free verse poetry.</em> </p>";
	var paragraph2HTML = "<p>I chose this poem as this poem is a true representation, in my mind, of what a poem truly is. A poem is not merely a bunch of words lazily lying on a piece of paper, but it can be whatever someone wants it to be: a light, a tear, or a smile, in the words of the poem.</p>";
	var paragraph3HTML = "<p>This poem is a free verse poem, but despite that classification, ‘Poetry’ has structure. The poem is composed of six stanzas of two lines, each stanza based on a particular object a poem can become, save for the last stanza, which explains the everlasting nature of a piece of poetry.</p>";
	var paragraph4HTML = "<p>The poem is about the various forms a poem, normally seen as words set to a unique motion, can be seen as. Through ‘Poetry’, poems are seen as lights, tears, smiles and being alive, expressing the varied and wondrous nature of poetry. The last couplet notes that this art form will last forever, until the end of mankind. The message of ‘Poetry’ is shared with what the poem is about; it attempts to convey the versatility and everlasting nature of this majestic literary form.</p>";
	var paragraph6HTML = "<p> ‘Poetry’’s mood can be described as being a mixed bag; instead of representing one emotion directly, it shows the wide range of emotions it can portray. The poem is written in a reminiscent tone, similar to how an elder would describe wonderful things, or talking of their own past.</p>";
	var paragraph7HTML = "<p>The major element of poetry present in ‘Poetry’ is the use of metaphors. In every stanza, save for the final one, a poem is compared to an object in everyday life, to explain its versatility. This notion starts off in the first stanza, where poems are noted as being ‘alive’, coming from the inner feelings of the author. The second, third and fourth stanzas continue the metaphor by comparing it to a ‘tear from fears’, a ‘smile from moments worthwhile’, and a ‘light from day to night’. </p>";
	var paragraph8HTML = "<p> Before putting it into my portfolio, I changed the last line on advice from Ms. Jill. Instead of ending in “from first light, until we snore”, which sounds like a filler, it was changed to “from first light, ‘till final war”. This change in ending makes the poem sound more sincere and heartfelt, instead of an attempt at humor, as it did before. </p>";
	var paragraph9HTML = "<p> The poem can still be improved through extending the metaphor a few more stanzas, to drive home the notion of a poem’s versatility and ever-changing forms. And despite the change to the last line, it could still end at a more serious note, as “until final war” was just a continued attempt to continue the rhyme, as was the previous version, “until we snore”.</p>";
	document.getElementById('heading').innerHTML = headerHTML;
	document.getElementById('contentArea').innerHTML = paragraph1HTML + paragraph2HTML + paragraph3HTML + paragraph4HTML + paragraph6HTML + paragraph7HTML + paragraph8HTML + paragraph9HTML;
}

// REMEMBER TO CSSIFY THE MIDDLE ALIGNING AND RIGHT-ALIGNMENT/ITALICIZING

function crankRevised() {
var headerHTML = "<h2>crank model: generosity</h2>";
var divopen = "<div class = \"span6\">"
var stanza1 = "<p> I’ve always loved these <br />small classes<br />where we do nothing.<br />Real work gets done.</p>";
var speech1 = "<div class = \"text-right\"><em>Hey. Science. What? </em></div>";
var stanza2 = "<p> And everyone else does <br /> work as well. <br /> Goes against it, <br /> but it works.</p>";
var speech2 = "<div class = \"text-right\"><em>HEY! Need answers.</em></div>";
var stanza3 = "<p>I respond. Normally<br />I’d be adamant,<br />but need to keep<br />the people happy.</p>";
var speech3 = "<div class = \"text-right\"><em>Ok. </em></div>"; 
var stanza4 = "<p>But in reality, <br />people keep asking<br />and asking,<br />and I get nothing.</p>"; 
var speech4 = "<div class = \"text-right\"><em>English?</em></div>"; 
var stanza5 = "<p>It’s been years.<br />Haven’t been invited <br />to anything.<br />Hear about it online, though.</p>"; 
var speech5 = "<div class = \"text-right\"><em>HEY!</em></div>";
var stanza6 = "<p>Again, I respond.<br />I do want more from<br />them. A token of thanks,<br />or at least A ‘thank you’. </p>";
var speech6 = "<div class = \"text-right\"><em>Cool. Laptop? </em></div>";
var stanza7 = "<p>I give, and I let them drain it.<br />Give, give, give, and<br />nothing in return. It’s in times<br />like these I wonder: </p>"; 
var speech7 = "<div class = \"text-right\"><em>Can I have a real friend? </em></div>";
var divclose = "</div>"

document.getElementById('heading').innerHTML = headerHTML;	
document.getElementById('contentArea').innerHTML = divopen + stanza1 + speech1 + stanza2 + speech2 + stanza3 + speech3 + stanza4 + speech4 + stanza5 + speech5 + stanza6 + speech6 + stanza7 + speech7 + divclose;
}

function crankAnalysis() {
	var headerHTML = "<h2> generosity analysis - nadhira syed azman";
	var paragraph1HTML = "<p> The Generosity by Carlos Arcenas written in 2012 is a free verse poem. It does not have rythm, rhyme but it got structure as the poem are organize with per stanza has 4 lines and 1 lines. The poem is about how people use him for homework and his knowledge but all he wants is a real friend. In the first stanza, he describes his class with “I’ve always loved these, small classes, where we do nothing, real work gets done” but then it shows a dialogue of someone asking him for science homework as its says “Hey. Science. What?”. In stanza two, he describes about people in class as he wrote “and everyone else does work as well, goes against it, but it works” however he also wrote in one line about the way people ask him question like “HEY! Need answers.” In stanza 3, he wrote about how he replied them just to make them happy as he “respond. Normally” he’d “be adamant. But need to keep the people happy” he replied “ok”. </p>";
	var paragraph2HTML = "<p> In stanza three, he wrote about people keep “asking” him and in the end he “get nothing”. In stanza four is about how he never get “invited” to go hangout but he always “hear about it online” which means that way people ask to go out is using online server and no one has invited him.</p>";
	var paragraph3HTML = "<p> In stanza five and six, he talks about how he want “more” from his friends like a “token of thanks, or at least a ‘thank you’” and that everyone just never say thank you to him besides “cool” and ask for other things such as “laptop”. He also even wondered if he could ever “have a real friend’. The theme or meaning of this poem is lonely as the poem asked “can I have a real friend?” at the end which means that everyone has been friend with him only for his knowledge as in the poem says “HEY! Need answers. I respond. Normally I’d be adamant, but need to keep the people happy” which means everyone just keep asking him questions about work but at the end he got “nothing”. The mood that were set on this poem is sad as the poem’s theme is lonely and the tone on this poem makes it looks sad as at the end he questioned himself by “can I have a real friend?”. Overall, there are no elements of poetry in this poem. </p>";
	document.getElementById('heading').innerHTML = headerHTML;
	document.getElementById('contentArea').innerHTML = paragraph1HTML + paragraph2HTML + paragraph3HTML;
}


// SINGAPORE

function singaporeOriginal() {
	var headerHTML = "<h2>	singapore - original version </h2>";
	var poemHTML = "<img src = 'singapore.jpg' width = '80%' />";
	document.getElementById('heading').innerHTML = headerHTML;
	document.getElementById('contentArea').innerHTML = poemHTML;
}

function singaporeRevised() {
	var headerHTML = "<h2>	singapore - revised version </h2>";
	var poemHTML = "<p> I wandered through each perfect street <br /> Near where the Lion's roar rings clear <br /> And from the sounds of marching feet<br />Resounds a cry that's full of fear</p> <p>In every face of every child<br />In every parents' worried look<br />In every voice all men reviled<br />The toil of living by the book</p>  <p>How the young citizen's sad sigh<br />Falls on Parliament's silent halls<br />And the hapless young man's cry<br />Runs in tears down Istana walls</p>";
	var poemHTML2 = "<p> But most, through mall-filled streets I hear <br /> How seller's cries grow even louder <br /> Blast the old grandmothers' weakened ear <br />And blights with fear the foreign onlooker </p>";
	document.getElementById('heading').innerHTML = headerHTML;
	document.getElementById('contentArea').innerHTML = poemHTML + poemHTML2;
}

function singaporeAnalysis(){
	var headerHTML = "<h2> singapore - analysis </h2>";
	var paragraph1HTML = "<p><em> The poem 'Singapore' by Carlos Arcenas, written in 2012 is an example of structured poetry, in this case, a lyric.</em> </p>";
	var paragraph2HTML = "<p> I chose this poem as I felt that this was an excellent expression of the oppression ordinary Singaporeans feel on a day to day business. Even on my own adventures as a mere tourist in Singapore, I could feel the suppression and restriction of freedoms placed on the natives through their speech and through their body language. </p>";
	var paragraph3HTML = "<p> This poem is a lyric, with strict conformation to rhythm and rhyme, a set quantity of lines and verses and themed around either death, love, nature, or, in the case of ‘Singapore’, life. The poem also conforms to the classic connotation connected with a lyric, as it maintains the rhyme scheme, the rhythmic meter, and the language associated with the poetic style.</p>";
	var paragraph4HTML = "<p> This poem is about the suppression, oppression and confinement the citizens of Singapore feel on a daily basis. Several elements of daily Singaporean life, from mandatory conscription, to the lack of freedom, and disconnected government are explored through the words of one who has experienced this with the outsider’s perspective, having lived in cities and countries much less organized and pristine as  Singapore. From having lived in those areas with less authority and more activity, one sees the Lion City as this somewhat robotic and systemic: where everything has to follow the law to the letter, and any attempt to change this falls on deaf ears. This has extended even to one of the most visible aspects of Singapore: the shopping and commerce that attracts tourists, making Singapore’s image seem like a façade: impressive on the outside, but dark and dreary on the inside. </p>";
	var paragraph5HTML = "<p> As this poem is based on William Blake’s poem ‘London’ this poem’s foundations lay on the structure of ‘London’. ‘Singapore’ is composed of four stanzas each composed of four lines, using the iambic tetrameter measure. The rhyme scheme follows alternate rhyme, meaning that if one line has a certain rhyme, the second line after it will have the same rhyme. Notated, the rhyme scheme is ABABCDCDEFEFGHGH.</p>";
	var paragraph6HTML = "<p> ‘Singapore’’s message is the dreary world the citizens of the Lion City face, where creativity, rebellion and general happiness are suppressed and everyone has to conform to a mold and follow the law to the letter. All traces of vibrant life are gone, replaced with the sounds of marching feet, the cries of citizens, and the silence of Parliament. As with Blake’s poem, the main mood of this poem is of darkness and gloom, representing the emotions the Singaporeans feel when faced with the harsh reality of their situation. Strong words such as ‘blasts’, ‘blights’ and ‘reviled’ are used to help reflect the mood and enhance the meaning.</p>";
	var paragraph7HTML = "<p> Several elements of poetry are present in Singapore to help enhance the mood and meaning, such as repetition in lines 1-3 of the second stanza: ‘in every face... in every parents... in every voice...’; contrasting ideas in the first stanza of the poem: ‘I wandered through each perfect street... resounds a cry that’s full of fear’; personification in the third stanza: ‘sad sigh falls on Parliament’s silent halls... young man’s cry runs in tears down Istana walls’ and the fourth stanza: ‘seller’s cries grow even louder... blast the old grandmothers’ weakened ear, and blights with fear the foreign onlooker.’ These poetic devices help add meaning to the poem by enhancing the idea that what’s happening in the poem is occurring across Singapore, and the serious nature of the situation they face. Contrasting Singapore’s presented exterior with what hides behind it and the government’s non-existent response to change are excellent ways to portray it.</p>";
	var paragraph8HTML = "<p> Before including this poem in my portfolio, I added several words in the final stanza to emphasize the meaning and to follow valuable feedback from Ms. Jill. ‘Even’ was added before ‘louder’ in the second line, ‘weak’ was extended to ‘weakened’ in the third, and ‘foreign’ was added before ‘onlooker’ in the final line. These changes helped with the mood and kept form with the earlier stanzas.</p>";
	var paragraph9HTML = "<p> The poem can be still be improved by changing the contents of the final stanza. In contrast to the previous stanzas of the poem, which speak about Singapore from a national and wide perspective, e.g. the Parliament and the use of ‘every’,  the final stanza focuses on one specific aspect of Singapore, the shopping experience. This makes the final quatrain feel detached from the rest of the poem, and constrains the flow of ideas established by the first three stanzas to a few lines on shopping there.  </p>";
	document.getElementById('heading').innerHTML = headerHTML;
	document.getElementById('contentArea').innerHTML = paragraph1HTML + paragraph2HTML + paragraph3HTML + paragraph4HTML + paragraph5HTML + paragraph6HTML + paragraph7HTML + paragraph8HTML + paragraph9HTML;
}

// ON THE MONA LISA 

function monaLisa() {
	var headerHTML = "<h2> on the mona lisa </h2>";
	var stanza1 = "<div class = \"grid span10\"><div class = \"row\"><div class = \"span5\"><p> Oh, Mona Lisa, hanging in the Louvre, <br /> With those shifty eyes that look like they move,<br />There are portraits by much better artists,<br />Yet this work’s fan base is still the largest<br />So why is this picture still so famous?<br />Despite the fact the artwork is heinous? </p>";
	var stanza2 = "<p> People pass by murals with not a peep<br />Yet in front of this little work they weep <br />Is it though this woman is pure beauty,<br />Or is it that her face looks quite snooty?<br />Perfect proportions, or flawless features,<br />Is that why people so wish to meet her?</p>";
	var stanza3 = "<p> But then there are mysteries all abound,<br />“There’s a hidden meaning!” is all they sound,<br />From little rumors to the famous Code<br />Is that what attracts them to her big abode?<br />Endless investigations fill the air,<br />Giving her exposure without compare.</p>";
	var stanza4 = "<p> So why does the Mona Lisa draw crowds?<br />What makes children and critics feel wowed?<br />With all said before, no-one quite knows why<br />This little painting is very sublime<br />In conclusion, there’s just one thing to say<br />The Mona Lisa will be here to stay.</p></div>";
	var imgHTML = "<div class = \"span5\"><img src = 'monalisa.jpg' /></div></div></div>";
	document.getElementById('heading').innerHTML = headerHTML;
	document.getElementById('contentArea').innerHTML = stanza1 + stanza2 + stanza3 + stanza4 + imgHTML;
}

// INFINITY 

function infinityPoem(){
	var headerHTML = "<h2> infinity - nadhira syed azman";
	var imgHTML = "<img src='infinity.png' />";
	document.getElementById('heading').innerHTML = headerHTML;
	document.getElementById('contentArea').innerHTML = imgHTML;
}

function infinityAnalysis(){
	var headerHTML = "<h2> infinity - analysis";
	var paragraph1HTML = "<p> <em> The poem 'Infinity', penned by Nadhira Syed Azman in 2012, is a free verse poem about a lovestruck girl dreaming about how her relationship with her boyfriend will last.</em> </p>";
	var paragraph2HTML = "<p> Instead of being organized in the traditional stanza format, 'Infinity' is uniquely structured in the shape of the infinity sign, representing the title of the poem and the hope that the subject relationship and love for her man will last for infinity. The title of the poem is also centered in the middle of the sideways-eight to further enhance the meaning and shape of the poem, and show what is at the center of the lovestruck girl's mind.</p>";
	var paragraph3HTML = "<p> 'Infinity' is about the author's experience with falling in love again. She dreams about how her dreaming under the stars brings back her first experience with him, when he first whispered in her ear: \"to be infinity and beyond\". This experience made her turn her own thoughts that she would never be in love again after her failed first fling; instead, her new relationship makes her feel like the 'world seems right'and his eyes 'turn her to stone'. It seems true that her relationship will last for infinity, for the wonderfully strong feelings both of them feel for one another.</p>";
	var paragraph4HTML = "<p> 'Infinity' is set in a hopeful mood, as the words of the subject show a wish for her relationship to last as long as the title promises. The author went from not believing in love to wishing that her newfound relationship will last forever.</p>";
	var paragraph5HTML = "<p> There are no poetic devices in this poem; this free verse poem is written as prose, like the author is talking to herself, or writing in a diary. The lack of devices somehow makes the poem feel more personal and powerful; she didn't use any needless metaphors or rhyme to convey her true love and feelings for him, and his love for her. Through the words and the mood of the author, 'Infinity''s theme becomes apparent: that that being in love is one of the best things that can ever happen to you. She remarks about  how \"the whole world seems right\" and how she wishes that \"someday our dream can become magical\". </p>";
	document.getElementById('heading').innerHTML = headerHTML;
	document.getElementById('contentArea').innerHTML = paragraph1HTML + paragraph2HTML + paragraph3HTML;
}

// O CAPTAIN MY CAPTAIN
// <div class = "indent"> PUT THAT IN THE CSS

function oCaptainPoem() {
	var headerHTML = "<h2> o captain! my captain! - walt whitman</h2>";
	var stanza1 = "<p>O Captain! my Captain! our fearful trip is done; <br /> The ship has weather'd every rack, the prize we sought is won; <br /> The port is near, the bells I hear, the people all exulting, <br /> While follow eyes the steady keel, the vessel grim and daring:</p>";
	var stanza2 = "<p> But O heart! heart! heart! <br /> O the bleeding drops of red, <br /> Where on the deck my Captain lies, <br /> Fallen cold and dead.</p></div>";
	var stanza3 = "<p> O Captain! my Captain! rise up and hear the bells;<br />Rise up—for you the flag is flung—for you the bugle trills;<br />For you bouquets and ribbon'd wreaths—for you the shores a-crowding; <br />For you they call, the swaying mass, their eager faces turning;</p>";
	var stanza4 = "<p>O captain! dear father!<br />This arm beneath your head;<br />It is some dream that on the deck, <br />You've fallen cold and dead. </p></div>";
	var stanza5 = "<p>My Captain does not answer, his lips are pale and still; <br /> My father does not feel my arm, he has no pulse nor will; <br />The ship is anchor'd safe and sound, its voyage closed and done; <br />From fearful trip, the victor ship, comes in with object won;</p>";
	var stanza6 = "<p>Exult, O shores, and ring, O bells! <br /> But I, with mournful tread, <br />Walk the deck my captain lies, <br />Fallen cold and dead. </p></div>";
	document.getElementById('heading').innerHTML = headerHTML;
	document.getElementById('contentArea').innerHTML = stanza1 + stanza2 + stanza3 + stanza4 + stanza5 + stanza6;
}

function oCaptainAnalysis() {
	var headerHTML = "<h2>	o captain! my captain! - original analysis </h2>";
	var paragraph1HTML = "<img width = '75%' src = 'ocaptainmycaptain.jpg'/>";
	document.getElementById('heading').innerHTML = headerHTML;
	document.getElementById('contentArea').innerHTML = paragraph1HTML;
}



function oCaptainRevised() {
	var headerHTML = "<h2>	o captain! my captain! - revised analysis </h2>";
	var paragraph1HTML = "<p> The poem “O Captain! My Captain!” by famed poet Walt Whitman is an example of classic, structured poetry. “Captain” is a lyric, with strict conformation to rhythm and rhyme, a set quantity of lines and verses, and themed around either life, death, love or flora. Its classic classification is also justified through its usage of strict structure and literary language, such as apostrophes in words, religious references, and simplified ideals. </p>";
	var paragraph2HTML = "<p>The language of the poem is quite traditional, with literary language and proper grammar utilized throughout the piece. Words like “weather’d” and “ribbon’d”, old terms not present in the current vernacular, are peppered throughout. The style of poem also requires lines having correct grammar.</p>";
	var paragraph3HTML = "<p>The poem is organized into three stanzas with eight lines each, with varying lengths and rhymes peppering each stanza. Each stanza is comprised of two halves, one half with long lines, and the succeeding half possessing shorter ones. The first half speaks in a positive tone about the conclusion of a voyage. The second half, however, talks grimly of the passing of the vessel’s captain. “O Captain! My Captain!”’s rhyme scheme is AABBCDED, repeating through every stanza. An interesting fact about the poem is that all D lines throughout rhyme, regardless of stanza. </p>";
	var paragraph4HTML = "<p>“O Captain! My Captain!” is based around the conclusion of a vessel and it’s crew’s triumphant voyage of war, and with it, the sudden demise of the captain. The poem starts off with the war-waged boat beginning to draw into port, and the subsequent response of happiness from the bystanders. This period of joy, however, is dampened by the sudden demise of the ship’s captain. The second stanza follows the structure set out by the previous stanza, building upon the celebration of the ship’s return and begins to talk about a crew member’s attempt to “rouse the captain from his sleep”. The last poem fragment, however, diverges from the pattern set out by the previous ones. Instead, it begins and ends with the sad state of the captain, with the surrounding celebrations left in the midst.   </p>";
	var paragraph5HTML = "<p>Several poetic devices are utilized in “O Captain, My Captain!” to help convey the theme: from simple alliteration, to a range of personified objects. “Flag is flung” and “safe and sound” help provide setting to the reader, contrast the two events, and add a musical quality to the poem. The same purpose is also served by “ring of the bells” and “bugle trill”; perfect examples of onomatopoeia. These create imagery of the celebration on shore. Emphasis of the dead captain is conveyed through the repetition of the line “fallen cold and dead”. This line helps drive in the fact that no amount of rousing and glory will bring back the dead captain. It also shows the true face of war: not all success is sweet, and often comes at great cost. </p>";
	var paragraph6HTML = "<p>The conflicting ideas of the poem present a specific theme explored: in every war, everyone loses. Regardless of one entity coming out the victor, all parties incur losses, as seen through the poem.</p>";
	document.getElementById('heading').innerHTML = headerHTML;
	document.getElementById('contentArea').innerHTML = paragraph1HTML + paragraph2HTML + paragraph3HTML + paragraph4HTML + paragraph5HTML + paragraph6HTML;
}

// TREES

function treesPoem() {
	var headerHTML = "<h2> trees - joyce kilmer </h2>";
	var poemHTML = "<p>I think that I will never see <br /> A poem lovely as a tree </p> <p> A tree whose hungry mouth is prest <br /> Against the sweet earth's flowing breast;</p> <p>A tree that looks at God all day, <br />And lifts her leafy arms to pray; </p> <p>A tree that may in summer wear <br />A nest of robins in her hair </p> <p>Upon whose bosom snow has lain, <br />Who intimately lives with rain. </p> <p> Poems are made by fools like me, <br /> But only God can make a tree.";
	document.getElementById('heading').innerHTML = headerHTML;
	document.getElementById('contentArea').innerHTML = poemHTML;
}

function treesAnalysis() {
	var newHTML = "<h2>	trees - original analysis</h2>";
	var poemHTML = "<img src = 'trees.jpg' width = '80%' />";
	document.getElementById('heading').innerHTML = newHTML;
	document.getElementById('contentArea').innerHTML = poemHTML;
}

function treesRevised() {
	var headerHTML = "<h2>	trees - revised analysis </h2>";
	var paragraph1HTML = "<p>The poem “Trees” by poet Joyce Kilmer published in 1919 is an example of classic, structured poetry. “Trees” is a lyric, with strict conformation to rhythm and rhyme, a set quantity of lines and verses and themed around either life, death, love or, in the case of this poem, flora. Its classic classification is also justified through the presence of vintage language, and its publication in the first half of the 20th century.</p>";
	var paragraph2HTML = "<p>Despite the fact that it is a classic, the language of the poem is only slightly traditional, in contrast to the verbose and flowery language of poems at the time. Someone who reads the poem today can assume that the poem was written recently due to the simplicity of the language used. Lines are constructed as simple sentence fragments, and have similar features, such as language and grammatical structure, as the speech of today.</p>";
	var paragraph3HTML = "<p>The poem is organized into six stanzas of two lines each, with each line conforming to a certain length determined by the rhythm of iambic tetrameter. “Tree”’s rhyme scheme is AABBCCDDEEAA. This shows that the poem is composed of six rhyming couplets, with the final couplet having the same rhyme as the first stanza. </p>";
	var paragraph4HTML = "<p>““Tree” is based around the author’s love and admiration for trees, and thanking God for their creation. The poem begins with the author’s acclamation that there “will never be a poem / as lovely as a tree”. Throughout the poem a tree is not referred to as an inanimate object; rather, the tree is seen as a majestic creation only feasible through the power of God. This is seen through the author’s description of what makes a tree beautiful; its skyward stature, its connection to the bosom of the earth, its summer garb, its winter dress. The author contrasts each pair of ideas to convey the versatility of the tree in all situations: from the treetops pointing at the sky to the roots, hugging the earth, in the cold times of winter and in the heat of summer. The poem concludes with the author’s humble admission that “poems are created by fools like me / but only God can make a tree”. Through the very gracious language utilized by the author, it makes the poem feel like a prayer to God; to give thanks for the wonderful creation that is the tree. </p>";
	var paragraph5HTML = "<p>“Tree”‘s theme explores the beauty ; it humbles the lowly man, and praises the power of nature and of God. Several poetic devices are present in “Trees” to help convey the theme: from a light sprinkling of similes to the ever-present personification. Similes are used in the first and final couplets of the poem to provide a base from where the tree praising can begin from. Personification is the main device used in this piece; lines like 'tree's hungry mouth is prest', 'lifts her leafy arms to pray', and 'upon whose bosom snow has lain' talk of the tree as a person rather than an average object enhances the author’s message of the tree’s greatness, and lets the reader truly imagine the grace and majesty of the tree. The first example shows how the tree is intimately connected to the Earth and is able to directly partake in its gifts. The second example of the leafy arms connects the tree to the reader in a religious fashion, and shows how the tall and organic creature was made to praise God and his creation. 'Upon whose bosom snow has lain' shows how the tree appears in winter, and the succeeding line speaks about how the tree lives and thrives in rain, in contrast to typical land animals.</p>";
	var paragraph6HTML = "<p>The constant usage of poetic devices and the author’s vivid imagery make apparent the theme of the poem: one of true nature, of awe and of thanks, for the magnificent creation that is the tree.</p>";
	document.getElementById('heading').innerHTML = headerHTML;
	document.getElementById('contentArea').innerHTML = paragraph1HTML + paragraph2HTML + paragraph3HTML + paragraph4HTML + paragraph5HTML + paragraph6HTML;
}
