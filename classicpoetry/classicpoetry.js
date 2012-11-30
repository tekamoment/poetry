function biography() {
	var headerHTML = "<h2>william shakespeare</h2>";
	var paragraph1 = "<p> William Shakespeare, known affectionately worldwide as The Eternal Bard, was baptized on the 26th of April, 1564 in Stratford-upon-Avon, England.</p>";
	var tombstoneInscription = "<p> These words were inscribed on his tombstone: <br /> Good friend for Jesus' sake forbear<br />To dig the dust enclosed here!<br />Blessed be the man that spares these stones,<br />And curst be he who moves my bones.</p>";
	var bibliography = "<h3> bibliography: </h3>" + ""; 
	document.getElementById('heading').innerHTML = headerHTML;
	document.getElementById('contentArea').innerHTML = paragraph1 + tombstoneInscription + bibliography;
}


function sonnet116() {
	var headerHTML = "<h2>sonnet 116</h2>";
	var poemHTML = "<p>Let me not to the marriage of true minds</p> <p>Admit impediments. Love is not love</p> <p>Which alters when it alteration finds,</p> <p>Or bends with the remover to remove:</p> <p>O no! it is an ever-fixed mark</p> <p>That looks on tempests and is never shaken;</p> <p>It is the star to every wandering bark,</p> <p>Whose worth's unknown, although his height be taken.</p> <p>Love's not Time's fool, though rosy lips and cheeks</p> <p>Within his bending sickle's compass come:</p> <p>Love alters not with his brief hours and weeks,</p> <p>But bears it out even to the edge of doom.</p> <p>If this be error and upon me proved,</p> <p>I never writ, nor no man ever loved.</p>";
	document.getElementById('heading').innerHTML = headerHTML;
	document.getElementById('contentArea').innerHTML = poemHTML;
}


function sonnet130() {
	var headerHTML = "<h2>sonnet 130</h2>";
	var poemHTML = "<p>My mistress' eyes are nothing like the sun,</p> <p>Coral is far more red than her lips' red,</p> <p>If snow be white, why then her breasts are dun,</p> <p>If hair be wires, black wires grow on her head.</p> <p>I have seen roses damasked, red and white,</p> <p>But no such roses see I in her cheeks;</p> <p>And in some perfumes is there more delight</p> <p>Than in the breath that from my mistress reeks.</p> <p>I love to hear her speak, yet well I know</p> <p>That music hath a far more pleasing sound;</p> <p>I grant I never saw a goddess go;</p> <p>My mistress when she walks treads on the ground.</p> <p>And yet, by heaven, I think my love as rare</p> <p>As any she belied with false compare.</p>";
	document.getElementById('heading').innerHTML = headerHTML;
	document.getElementById('contentArea').innerHTML = poemHTML;
}

function sonnet130analysis() {
	var headerHTML = "<h2>sonnet 130 - analysis</h2>";
	var paragraph1 = "<p><em>Sonnet 130, by William Shakespeare, published in the late 16th century, is an example of a Shakespearean sonnet, created by the Bard himself.</em></p>";
	var paragraph2 = "<p> As the poem was written in the late 16th century, the language of the poem is very traditional, with literary language and proper grammar seen throughout the Sonnet. Words like 'damask'd' and 'dun' are used in the poem, yet the overall wording of the Sonnet is accessible to modern readers, due to the simplicity of the language utilized in the rest of the poem, resembling today's colloquial speech and writing.</p>";
	var paragraph3 = "<p> As it is a Shakespearean sonnet, the poem is composed of 14 lines, organized into three quatrains and a final rhyming couplet. Each line conforms to the iambic pentameter measure. As with all sonnets, the rhyme alternates every second line save for the final two lines, which form a rhyming couplet. </p>"; 
	var paragraph4 = "<p> Sonnet 130 is based around the author's description of the subject, focusing on her features, which, through the author's words, are less than ideal. Throughout the single-stanza poem he compares her to majestic objects: he says that 'her eyes are nothing like the sun', coral has a richer color than her lips, her hair being as cluttered as 'black wires' and other derogatory remarks. This perceived insulting of his mistress is suddenly nullified by the final couplet, through a change in the tone. Despite describing his woman as being inferior through comparisons to aesthetically pleasing features beautiful women may have, he remarks her as being as lovely as any woman. He accomplishes this without making any false comparisons, such as saying 'her voice is as lyrical and wonderful as music', in contrast to the other poets of that time. </p>";
	var paragraph5 = "<p> The main poetic device present in this sonnet is the usage of comparisons through similes and metaphors, visible in almost every line. In the first segment of four lines, her facial features, her eyes and her lips, are compared to the sun and coral, respectively. The second quartet focuses on scent and her cheeks, contrasted with scented perfumes and richly-coloured roses. In the final quartet, her walking and voice are deemed inferior to the stride of a goddess and the sound of music. In the concluding couplet, however, the author takes a sudden change in his tone: rather than continue the deriding remarks against his mistress, he says that he still loves her for who she is, and he doesn't need to make hyperbolic statement to prove it. Through the use of this poetic device, the theme can be ascertained: the people you love don't have to be perfect aesthetically, rather, they should be able to please you with their personality and their presence without having to be over-the-top.</p>";
	var paragraph6 = "<p> The poem is written in a mocking tone for the majority of the sonnet; the colloquial language conveys the lack of aesthetic beauty his mistress has in comparison to the more 'beautiful' objects. The shift in tone from the author to appreciating his mistress is also accompanied by a change in language to a more literary style, representative of the poems of that age. </p>";
	document.getElementById('heading').innerHTML = headerHTML;
	document.getElementById('contentArea').innerHTML = paragraph1 + paragraph2 + paragraph3 + paragraph4 + paragraph5 + paragraph6;
}
