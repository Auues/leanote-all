try{if(!Mobile.isMobile()){require(["//cdn.mathjax.org/mathjax/latest/MathJax.js?config=TeX-AMS-MML_HTMLorMML"])}}catch(e){}function bindMathJaxHooks(converter){var msie=/msie/.test(navigator.userAgent.toLowerCase());var inline="$";var SPLIT=/(\$\$?|\\(?:begin|end)\{[a-z]*\*?\}|\\[\\{}$]|[{}]|(?:\n\s*)+|@@\d+@@)/i;function processMath(i,j){var block=blocks.slice(i,j+1).join("").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;");if(msie){block=block.replace(/(%[^\n]*)\n/g,"$1<br/>\n")}while(j>i){blocks[j]="";j--}blocks[i]="@@"+math.length+"@@";math.push(block);start=end=last=null}function removeMath(text){start=end=last=null;math=[];blocks=text.replace(/\r\n?/g,"\n").split(SPLIT);for(var i=1,m=blocks.length;i<m;i+=2){var block=blocks[i];if(block.charAt(0)==="@"){blocks[i]="@@"+math.length+"@@";math.push(block)}else if(start){if(block===end){if(braces){last=i}else{processMath(start,i)}}else if(block.match(/\n.*\n/)){if(last){i=last;processMath(start,i)}start=end=last=null;braces=0}else if(block==="{"){braces++}else if(block==="}"&&braces){braces--}}else{if(block==="$$"){start=i;end=block;braces=0}else if(block.substr(1,5)==="begin"){start=i;end="\\end"+block.substr(6);braces=0}}}if(last){processMath(start,last)}return blocks.join("")}function replaceMath(text){text=text.replace(/@@(\d+)@@/g,function(match,n){return math[n]});math=null;return text}converter.hooks.chain("preConversion",removeMath);converter.hooks.chain("postConversion",replaceMath)}