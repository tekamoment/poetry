
function poetryOriginal() {
	var headerHTML = "<h2>	poetry - original version </h2>";
	var poemHTML = "<p> A poem is alive<br /> Spurring from the inside </p> <p> A poem is a tear <br /> From someone's many fears </p> <p> A poem is a smile <br /> From moments all worthwhile </p> <p> A poem is a light <br /> Shining from day to night </p> <p> Poems will be forevermore <br /> From first light, until we snore </p>";
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
	var paragraph3HTML = "<p>This poem is a free verse poem, but despite that classification, ‘Poetry has structure. The poem is composed of six stanzas of two lines, each stanza based on a particular object a poem can become, save for the last stanza, which explains the everlasting nature of a piece of poetry.</p>";
	var paragraph4HTML = "<p>The poem is about the various forms a poem, normally seen as words set to a unique motion, can be seen as. Through ‘Poetry’, poems are seen as lights, tears, smiles and being alive, expressing the varied and wondrous nature of poetry. The last couplet notes that this art form will last forever, until the end of mankind.</p>";
	var paragraph5HTML = "<p> </p>";
	document.getElementById('heading').innerHTML = headerHTML;
	document.getElementById('contentArea').innerHTML = paragraph1HTML + paragraph2HTML + paragraph3HTML + paragraph4HTML + paragraph5HTML;
}

// REMEMBER TO CSSIFY THE MIDDLE ALIGNING AND RIGHT-ALIGNMENT/ITALICIZING

function crankRevised() {
var headerHTML = "<h2>crank model: generosity</h2>";
// ADD ENCAPSULATORS (restrict span of columns to around 5/6)
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


// SINGAPORE

function singaporeOriginal() {
	var headerHTML = "<h2>	singapore - original version </h2>";
	var poemHTML = "<p> A poem is alive</p> <p> Spurring from the inside </p> <p> A poem is a tear </p> <p> From someone's many fears </p> <p> A poem is a smile </p><p> From moments all worthwhile </p> <p> A poem is a light </p> <p> Shining from day to night </p> <p> Poems will be forevermore </p><p> From first light, 'till final war. </p>";
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
	var paragraph2HTML = "<p>I chose this poem as I felt that this was an excellent expression of the oppression ordinary Singaporeans feel on a day to day business. Even on my own adventures as a mere tourist in Singapore, I could feel the suppression and restriction of freedoms placed on the natives through their speech and through their body language. </p>";
	var paragraph3HTML = "<p>This poem is a free verse poem, but despite that classification, ‘Poetry has structure. The poem is composed of six stanzas of two lines, each stanza based on a particular object a poem can become, save for the last stanza, which explains the everlasting nature of a piece of poetry.</p>";
	var paragraph4HTML = "<p>The poem is about the various forms a poem, normally seen as words set to a unique motion, can be seen as. Through ‘Poetry’, poems are seen as lights, tears, smiles and being alive, expressing the varied and wondrous nature of poetry. The last couplet notes that this art form will last forever, until the end of mankind.</p>";
	var paragraph5HTML = "<p> </p>";
	document.getElementById('heading').innerHTML = headerHTML;
	document.getElementById('contentArea').innerHTML = paragraph1HTML + paragraph2HTML + paragraph3HTML + paragraph4HTML + paragraph5HTML;
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
	var paragraph1HTML = "<p> The poem “O Captain! My Captain!” by famed poet Walt Whitman is an example of classic, structured poetry. “Captain” is a lyric, with strict conformation to rhythm and rhyme, a set quantity of lines and verses, and themed around either life, death, love or flora. Its classic classification is also justified through its usage of strict structure and literary language, such as apostrophes in words, religious references, and simplified ideals. </p>";
	var paragraph2HTML = "<p> </p>";
	var paragraph3HTML = "<p>“O Captain! My Captain!” is based around the conclusion of a vessel and it’s crew’s triumphant voyage of war, and with it, the sudden demise of the captain. The poem starts off with the war-waged boat beginning to draw into port, and the subsequent response of happiness from the bystanders. This period of joy, however, is dampened by the sudden demise of the ship’s captain. The second stanza follows the structure set out by the previous stanza, building upon the celebration of the ship’s return and begins to talk about a crew member’s attempt to “rouse the captain from his sleep”. The last poem fragment, however, diverges from the pattern set out by the previous ones. Instead, it begins and ends with the sad state of the captain, with the surrounding celebrations left in the midst. </p>";
	var paragraph4HTML = "<p>The language of the poem is quite traditional, with literary language and proper grammar utilized throughout the piece. Words like “weather’d” and “ribbon’d”, old terms not present in the current vernacular, are peppered throughout. The style of poem also requires lines having correct grammar. </p>";
	var paragraph5HTML = "<p>The conflicting ideas of the poem present a specific theme explored: in every war, everyone loses. Regardless of one entity coming out the victor, all parties incur losses, as seen through the poem.</p>";
	var paragraph6HTML = "<p> </p>";
	document.getElementById('heading').innerHTML = headerHTML;
	document.getElementById('contentArea').innerHTML = paragraph1HTML + paragraph2HTML + paragraph3HTML + paragraph4HTML + paragraph5HTML + paragraph6HTML;
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
	var poemHTML = "";
	document.getElementById('heading').innerHTML = newHTML;
	document.getElementById('contentArea').innerHTML = poemHTML;
}

function treesRevised() {
	var headerHTML = "<h2>	trees - revised analysis </h2>";
	var paragraph1HTML = "<p>The poem “Trees” by poet Joyce Kilmer published in 1919 is an example of classic, structured poetry. “Trees” is a lyric, with strict conformation to rhythm and rhyme, a set quantity of lines and verses and themed around either life, death, love or, in the case of this poem, flora. Its classic classification is also justified through the presence of vintage language, and its publication in the first half of the 20th century.</p>";
	var paragraph2HTML = "<p>Despite the fact that it is a classic, the language of the poem is only slightly traditional, in contrast to the verbose and flowery language of poems at the time. Someone who reads the poem today can assume that the poem was written recently due to the simplicity of the language used. Lines are constructed as simple sentence fragments, and have similar features, such as language and grammatical structure, as the speech of today.</p>";
	var paragraph3HTML = "<p>The poem is organized into six stanzas of two lines each, with each line conforming to a certain length determined by the rhythm of iambic tetrameter. “Tree”’s rhyme scheme is AABBCCDDEEAA. This shows that the poem is composed of six rhyming couplets, with the final couplet having the same rhyme as the first stanza. </p>";
	var paragraph4HTML = "<p>““Tree” is based around the author’s love and admiration for trees, and thanking God for their creation. The poem begins with the author’s acclamation that there “will never be a poem / as lovely as a tree”. Throughout the poem a tree is not referred to as an inanimsate object; rather, the tree is seen as a majestic creation only feasible through the power of God. This is seen through the author’s description of what makes a tree beautiful; its skyward stature, its connection to the bosom of the earth, its summer garb, its winter dress. The author contrasts each pair of ideas to convey the versatility of the tree in all situations: from the treetops pointing at the sky to the roots, hugging the earth, in the cold times of winter and in the heat of summer. The poem concludes with the author’s humble admission that “poems are created by fools like me / but only God can make a tree”. Through the very gracious language utilized by the author, it makes the poem feel like a prayer to God; to give thanks for the wonderful creation that is the tree. </p>";
	var paragraph5HTML = "<p>ASK JILL FOR HELP WITH THIS PARAGRAPH.</p>";
	var paragraph6HTML = "<p>The constant usage of poetic devices and the author’s vivid imagery make apparent the theme of the poem: one of true nature, of awe and of thanks, for the magnificent creation that is the tree.</p>";
	document.getElementById('heading').innerHTML = headerHTML;
	document.getElementById('contentArea').innerHTML = paragraph1HTML + paragraph2HTML + paragraph3HTML + paragraph4HTML + paragraph5HTML + paragraph6HTML;
}
