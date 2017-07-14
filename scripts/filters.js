angular.module('Schmitt2', [])
		.filter('converttobinario', function(){
			return function(text){
				var PADDING = "00000000";
				var resultArray = [];
				if(text !== undefined){
					for (var i = 0; i < text.length; i++) {
					  var compact = text.charCodeAt(i).toString(2)
					  var padded = PADDING.substring(0, PADDING.length - compact.length) + compact
					  resultArray.push(padded)
					}
					return resultArray.join(" ");
				}
				else{
					return "Digite alguma coisa";
				}
			}
		})
		.filter('convertfrombinario', function(){			
			return function(text){
				var binString = '';
				if(text !== undefined){
					text.split(' ').map(function(bin){
					    binString += String.fromCharCode(parseInt(bin, 2));
					});
					return binString;
				}
				else{
					return "Digite alguma coisa";
				}
			}
		})
		.filter('converttohexa', function(){
			return function(text){
				var resultArray = [];
				if(text !== undefined){
					for (var i = 0; i < text.length; i++) {
					  var compact = text.charCodeAt(i).toString(16)
					  resultArray.push(compact)
					}
					return resultArray.join(" ");	
				}
				else{
					return "Digite alguma coisa";
				}
			}
		})
		.filter('convertfromhexa', function(){
			return function(text){
				var hexString = '';
				if(text !== undefined){
					text.split(' ').map(function(hex){
					    hexString += String.fromCharCode(parseInt(hex, 16));
					  });
					return hexString;
				}
				else{
					return "Digite alguma coisa";
				}
			}
		})
		.filter('reversestring', function(){
			return function(text){
				if (text !== undefined){
					return text.split('').reverse().join('');
				}
				else{
					return "Digite alguma coisa";
				}
			}
		})
		.filter('titlecase', function() {
		    return function (text) {
		        var smallWords = /^(a|an|and|as|at|but|by|en|for|if|in|nor|of|on|or|per|the|to|vs?\.?|via)$/i;

		        text = text.toLowerCase();
		        return text.replace(/[A-Za-z0-9\u00C0-\u00FF]+[^\s-]*/g, function(match, index, title) {
		            if (index > 0 && index + match.length !== title.length &&
		                match.search(smallWords) > -1 && title.charAt(index - 2) !== ":" &&
		                (title.charAt(index + match.length) !== '-' || title.charAt(index - 1) === '-') &&
		                title.charAt(index - 1).search(/[^\s-]/) < 0) {
		                return match.toLowerCase();
		            }

		            if (match.substr(1).search(/[A-Z]|\../) > -1) {
		                return match;
		            }

		            return match.charAt(0).toUpperCase() + match.substr(1);
		        });
		    }
		})
		.filter('charlength', function(){
			return function(text){
				if(text !== undefined){
					console.log(text.split(" ").length)
					return text.split('').length - text.split(" ").length + 1;
				}
				else{
					return "Digite alguma coisa aí";
				}
			}
		})
		.filter('stringlength', function(){
			return function(text){
				if(text !== undefined){
					return text.split('').length;
				}
				else{
					return "Digite alguma coisa aí";
				}
			}
		})
		.filter('numberofwords', function(){
			return function(text){
				if(text !== undefined){
					return text.split(/\s+/).length;
				}
				else{
					return "Digite alguma coisa aí";
				}
			}
		})
		.filter('dectobin', function(){
			return function(number){
				if(number === isNaN || number === undefined){
					return "digite alguma coisa";
				}
				else{
					if(number >= 0){
						number = number.toString(2);
						var aux = [];
						var i = 8 - (number.length % 8)
						while(i > 0){
							aux.push("0");
							i--;
						}
						return aux.join('') + number;
					}
					else{
						var x = number.toString(2);
						var i = 8 - ((x.length - 1) % 8);
						x = x.substring(1, x.length);
						var aux = [];
						while(i > 0){
							aux.push("0");
							i--;
						}
						x = aux.join('') + x;
						x = x.split('');
						var len = x.length - 1;
						var done = false;
						for(var i = 0; i < x.length; i++){
							if(x[i] === "0"){
								x[i] = "1";
							}
							else{
								x[i] = "0";
							}
						}
						while(done === false && len >= 0 ){
							if(x[len] === "0"){
								x[len] = "1";
								len--;
								done = true;
							}
							else{
								x[len] = "0";
								len--;
							}
						}
						if(done = true){
							return x.join('');
						}
						else{
							return "0"+x.join('');
						}
						
					}
				}
			}
		})
		.filter('bintodec', function(){
			return function(number){
				return parseInt(number, 2);
			}
		})
		.filter('dectohex', function(){
			return function(number){
				return number.toString(16);
			}
		})
		.filter('hextodec', function(){
			return function(number){
				return parseInt(number, 16);
			}
		})
		.filter('hextorgb', function(){
			return function(text){
				var i = 0;
				var rgb = [];
				while(i < 5){
					var x = text.charAt(i)+text.charAt(i+1);
					rgb.push(parseInt(x, 16));
					i = i + 2;
				}
				return rgb.join('');
			}
		})
		.filter('rgbtohex', function(){
			return function(text){
				var i = 0;
				var hex = [];
				while(i < 8){
					var x = text.charAt(i)+text.charAt(i+1)+text.charAt(i+2);
					x = parseInt(x, 10);
					hex.push(x.toString(16));
					i = i+3;
				}
				return hex.join('');
			}
		})