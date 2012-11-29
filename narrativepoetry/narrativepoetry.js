function lightBrigadePoem() {
	var headerHTML = "<h2>the poem</h2>";
	var poemHTML = "<p>Half a league, half a league, <br /> Half a league onward, <br /> All in the valley of Death <br /> Rode the six hundred. <br /> 'Forward, the Light Brigade! <br /> 'Charge for the guns!' he said: <br /> Into the valley of Death <br /> Rode the six hundred.<br /></p> <p>'Forward, the Light Brigade!' <br /> Was there a man dismay'd? <br /> Not tho' the soldier knew <br /> Someone had blunder'd: <br /> Theirs not to make reply, <br /> Theirs not to reason why, <br /> Theirs but to do and die: <br /> Into the valley of Death <br /> Rode the six hundred.</p> <p> Cannon to right of them, <br /> Cannon to left of them, <br /> Cannon in front of them <br /> Volley'd and thunder'd; <br /> Storm'd at with shot and shell, <br /> Boldly they rode and well, <br /> Into the jaws of Death, <br /> Into the mouth of Hell <br /> Rode the six hundred.</p> <p>Flash'd all their sabres bare, <br /> Flash'd as they turn'd in air, <br /> Sabring the gunners there, <br /> Charging an army, while <br /> All the world wonder'd: <br /> Plunged in the battery-smoke <br /> Right thro' the line they broke; <br /> Cossack and Russian <br /> Reel'd from the sabre stroke <br /> Shatter'd and sunder'd. <br /> Then they rode back, but not <br /> Not the six hundred.</p> <p> Cannon to right of them,<br /> Cannon to left of them,<br /> Cannon behind them <br /> Volley'd and thunder'd; <br /> Storm'd at with shot and shell, <br /> While horse and hero fell, <br /> They that had fought so well <br /> Came thro' the jaws of Death <br /> Back from the mouth of Hell, <br /> All that was left of them, <br /> Left of six hundred.</p> <p>When can their glory fade? <br /> O the wild charge they made! <br /> All the world wondered.<br /> Honor the charge they made, <br /> Honor the Light Brigade, <br /> Noble six hundred. </p>";
	document.getElementById('heading').innerHTML = headerHTML;
	document.getElementById('contentArea').innerHTML = poemHTML;
}

function lightBrigadeAnalysis(){
	var headerHTML = "<h2>para-by-para summary</h2>";
	var stanza1 = "<h3>stanza one:</h3>" + "<p> The poem begins with the introduction of the Light Brigade: a company composed of �the brave six hundred�, riding into what appears to be a futile fight in the Valley of Death. A soldier, presumably the general of the Brigade, shouts for them to charge further on, deeper into the Valley, to begin a strike at the enemy�s guns. </p>";
	var stanza2 = "<h3>stanza two:</h3>" + "<p>Another command is raised for the Light Brigade to charge onward. Faced with the fact that it is �theirs not to make reply, theirs not to reason why�, they follow the vague order to charge and ride into the battle, fully knowing their inevitable fate and their untimely demise. </p>";
	var stanza3 = "<h3>stanza three:</h3>" + "<p> The Brigade is now riding bravely in the valley, amidst hot gun and cannon-fire being unleashed all around them. They boldly enter the �jaws of Death�, straight into the �mouth of Hell�, with shot and shell flying at them.</p>";
	var stanza4 = "<h3>stanza four:</h3>" + "<p>The Brigade begin to brandish their sabers as they come in contact with the army. They plunge into the army, breaking the line of defense the massive enemy has set up. �Cossack and Russian� fall under the might of the Light Brigade and their swordsmanship, and begin to retreat, and the Light Brigade continue their brave advance.  </p>";
	var stanza5 = "<h3>stanza five:</h3>" + "<p>Cannons all around them continue to fire upon them �with shot and shell�, not relenting for as long as �horse and hero fall�. What was left of the brave six hundred came back from Hell, escaped the jaws of Death, and lived to tell the tale. </p>";
	var stanza6 = "<h3>stanza six:</h3>" + "<p> The glory and honour of the Light Brigade�s bravery and massive charge will be recognized worldwide, and people will wonder and marvel of the greatness of the �noble six hundred�. </p>";
	var summary = "<h3>setting:</h3>";
	document.getElementById('heading').innerHTML = headerHTML;
	document.getElementById('contentArea').innerHTML = stanza1 + stanza2 + stanza3 + stanza4 + stanza5 + stanza6 + summary;
}