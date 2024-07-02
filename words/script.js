window.onload = function(argument) {

  var expression = "I couldn’t take it, couldn’t stand another minute, couldn’t bear another day without you in it. From the moment you left, a part of me was missing, and the world seemed less bright, less full. I’ve spent countless nights staring at the ceiling, replaying our last conversation, wishing I could turn back time. I now realize the depth of my mistake, the hurt I’ve caused you, but you don't realize how much did you hurt me. I want you to know how sorry I am. Tho I never heard apologies from you. I’ve learned from this experience and I promise to do better. Maybe the Czech girl will see something in me you didn't. I miss you and I hope we can find a way to mend us. I am so fucked up, why did, why did all of this happen. You and I, we, we. We were unique, happy. And then, the summer came, and you forgot me, just to resemble the feelings I once had for you, but with him, my best friend. You betrayed me. I am so defeated, please, this is so fucked up, we are so fucked up. Help, I can't stand with this anymore, maybe we could, you know, go to the cinema? Watch some movies? Aaaagh. If you're watching this, I hope you understand me, as I may understand you. All my friends disappeared, vanished, I am alone. So lonely, the song from those K-pop girls 'i am so loonely' make me laugh compared to my panorama. Just give me some boba teaaaaa. Hell, I want some boba tea, maybe with cinnamon rolls, but they will never be as sweet as you was. I am shattered, missing a piece of the glass you broke the moment you left me";
	var words = {};
	var words_attr = [];
	string_handle(expression);

	var canvas = document.getElementById('c');
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;

	if (canvas.getContext) {
		var c = canvas.getContext('2d'),
			w = canvas.width,
			h = canvas.height;

		c.strokeStyle = 'red';
		c.fillStyle = 'white';
		c.lineWidth = 5;

		// constructor
		Word = function(key) {
			this.text = key;
			this.x = Math.random() * w;
			this.y = Math.random() * h;
			this.font = words[key] * 10 + 'px arial'
			this.speed = (words[key]);
		}
		for (key in words) {
			words_attr.push(new Word(key));
		}
		console.log(words_attr.length);

		function animation() {
			for (var i = 0; i < words_attr.length; i++) {
				c.font = words_attr[i].font;
				c.fillText(words_attr[i].text, words_attr[i].x, words_attr[i].y);
				words_attr[i].width = c.measureText(words_attr[i].text).width;
				c.stroke();
			}
			move();
		}

		function move() {
			for (var i = 0; i < words_attr.length; i++) {
				if (words_attr[i].x > w) {
					words_attr[i].x = -words_attr[i].width;
					words_attr[i].y = Math.random()*h;
				}else{
					words_attr[i].x += words_attr[i].speed;
				}
			}
		}

		setInterval(function() {
			c.clearRect(0,0,w,h);
			animation();
		},24);

	}

	function string_handle(str) {
		var split_str = str.split(" ");
		var word_array = [];
		var word_count = [];
		for (var i = 0; i < split_str.length; i++) {
			check = true;
			for (var j = 0; j <= word_array.length; j++) {
				if (split_str[i] == word_array[j]) {
					word_count[j]++;
					check = false;
					break;
				}
			}
			if (check) {
				word_array.push(split_str[i]);
				word_count.push(1);
			}
		}
		for (var i = 0; i < word_array.length; i++) {
			words[word_array[i]] = word_count[i];
		}
		return words;
	}

}