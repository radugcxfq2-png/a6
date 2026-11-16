(function(){
var b=document.querySelector('.burger'),n=document.getElementById('nav');
if(b&&n)b.addEventListener('click',function(){var o=n.classList.toggle('open');b.setAttribute('aria-expanded',o?'true':'false');b.setAttribute('aria-label',o?'Close menu':'Open menu');});
function $(i){return document.getElementById(i);}
var f=$('cform');
if(f)f.addEventListener('submit',function(e){e.preventDefault();var fm=$('fm');
 if($('website').value)return;
 if(!f.checkValidity()){fm.hidden=false;fm.textContent='Please fill in your name, a valid email and a message, and tick the agreement box.';return;}
 var body='Name: '+$('name').value+'\nEmail: '+$('email').value+'\nTopic: '+$('topic').value+'\n\n'+$('message').value;
 location.href='mailto:'+f.getAttribute('data-to')+'?subject='+encodeURIComponent(f.getAttribute('data-brand')+': '+$('topic').value)+'&body='+encodeURIComponent(body);
 fm.hidden=false;fm.textContent='Your email app should open with the message ready to send. If nothing happens, write to us directly at '+f.getAttribute('data-to')+'.';});
var c=$('cookie'),k=null;try{k=localStorage.getItem('ck_'+location.hostname);}catch(e){}
if(c&&!k)c.classList.add('show');
if(c)c.querySelectorAll('button').forEach(function(bt){bt.addEventListener('click',function(){try{localStorage.setItem('ck_'+location.hostname,bt.getAttribute('data-cookie'));}catch(e){}c.classList.remove('show');});});
var y=$('year');if(y)y.textContent=new Date().getFullYear();
})();

(function(){
function $(i){return document.getElementById(i);}
function n(i){var v=parseFloat($(i).value);return isNaN(v)?0:v;}
var LIFE={office:["Office or formal",{tops:9,bottoms:5,layers:4,dresses:2,shoes:3},"Tailoring does the work, so the pieces repeat more and need to hang well."],
mixed:["Mixed, some of both",{tops:10,bottoms:5,layers:3,dresses:2,shoes:3},"The hardest case, and the one a capsule helps most: every piece has to cross between the two."],
casual:["Mostly casual",{tops:10,bottoms:4,layers:3,dresses:1,shoes:3},"Fewer bottoms, more tops. Casual outfits change at the top far more than the bottom."],
creative:["Creative or relaxed workplace",{tops:11,bottoms:5,layers:4,dresses:2,shoes:4},"Room for one or two pieces that are only there because you like them."]};
var CLIM={four:["Four clear seasons",1.25,"Two capsules that share the neutrals is less work than one that tries to cover 35&deg;C and &minus;5&deg;C."],
mild:["Mild all year",1.0,"The easiest case. Layers matter more than heavy coats."],
hot:["Hot most of the year",0.85,"Fewer layers, more tops, and fabric matters more than quantity."],
cold:["Cold most of the year",1.2,"Count the coat and the knitwear as part of the capsule, not as extras."]};
function capOut(){var L=LIFE[$('cpLife').value],C=CLIM[$('cpClim').value],base=$('cpBase').value,o=$('cpOut');
 var p=L[1],f=C[1];
 var t=Math.round(p.tops*f),b=Math.round(p.bottoms*f),l=Math.round(p.layers*f),d=Math.round(p.dresses*f),s=Math.round(p.shoes*f);
 var total=t+b+l+d+s;
 var combos=t*b+d;
 var NEUT={black:["Black","charcoal, soft white, stone"],navy:["Navy","cream, grey, tan"],grey:["Grey","white, navy, soft pink"],camel:["Camel","cream, chocolate, olive"],olive:["Olive","cream, rust, charcoal"]}[base];
 o.innerHTML='<h4>'+L[0]+', '+C[0].toLowerCase()+'</h4><div class="osplit">'+
 '<div><span class="big">'+total+' pieces</span><dl class="kv"><dt>Tops</dt><dd>'+t+'</dd><dt>Bottoms</dt><dd>'+b+'</dd><dt>Layers</dt><dd>'+l+'</dd><dt>Dresses</dt><dd>'+d+'</dd><dt>Shoes</dt><dd>'+s+'</dd><dt>Outfits</dt><dd>around '+combos+'</dd></dl></div>'+
 '<div><p><b>Base:</b> '+NEUT[0]+'. Build the bottoms, outerwear and shoes from it, and let the tops carry the colour.</p>'+
 '<ul><li>'+L[2]+'</li><li>'+C[2]+'</li>'+
 '<li>Pair it with '+NEUT[1]+' and nearly everything will go with everything.</li>'+
 '<li>'+combos+' outfits from '+total+' pieces only works if every bottom goes with every top. Anything that pairs with one thing is costing you the whole row.</li>'+
 '<li>Leave two or three slots empty. A capsule you cannot add to becomes a uniform you resent.</li></ul></div></div>'+
 '<p class="note">A starting count, not a rule. Work out from what you already own and wear, rather than buying a capsule from scratch.</p>';}
['cpLife','cpClim','cpBase'].forEach(function(i){var e=$(i);if(e)e.addEventListener('input',capOut);});
if($('cpLife'))capOut();
var COL={navy:["Navy","#1F2A44",["Cream","#F3EEE4"],["Camel","#B98B52"],["Burgundy","#6B2B36"],["Soft grey","#B9BAC0"],["Bright orange","Hard to balance unless it is a small accent"]],
camel:["Camel","#B98B52",["Cream","#F3EEE4"],["Chocolate","#4A3326"],["Olive","#6B7050"],["Charcoal","#3A3A3E"],["Pastel pink","Washes the camel out and reads unfinished"]],
charcoal:["Charcoal","#3A3A3E",["Soft white","#F5F3EF"],["Dusty blue","#7C93A8"],["Rust","#9C5331"],["Oatmeal","#D9CFC0"],["Pure black","Close enough to look like a mistake rather than a choice"]],
olive:["Olive","#6B7050",["Cream","#F3EEE4"],["Rust","#9C5331"],["Chocolate","#4A3326"],["Mustard","#C9A227"],["Bright red","Fights the green rather than lifting it"]],
burgundy:["Burgundy","#6B2B36",["Blush","#E4C8C4"],["Navy","#1F2A44"],["Stone","#CFC5B6"],["Gold","#C9A227"],["Bright purple","Sits too close to be a contrast and too far to be a match"]],
white:["Soft white","#F5F3EF",["Navy","#1F2A44"],["Tan","#C09A6B"],["Black","#242428"],["Sage","#9BB3A4"],["Cool bright white","Makes the soft white look dirty next to it"]]};
function colOut(){var c=COL[$('clBase').value],o=$('clOut');
 var sw=c.slice(2,6).map(function(p){return '<span><i style="background:'+p[1]+'"></i>'+p[0]+'</span>';}).join('');
 var avoid=c[6];
 o.innerHTML='<h4>Pairing with '+c[0].toLowerCase()+'</h4><div class="osplit">'+
 '<div><span class="sw" style="display:flex"><span><i style="background:'+c[1]+'"></i>'+c[0]+'</span></span>'+
 '<p style="margin:.6em 0 .3em"><b>Goes with</b></p><div class="sw">'+sw+'</div></div>'+
 '<div><p><b>Harder to place:</b> '+avoid[0]+'. '+avoid[1]+'.</p>'+
 '<ul><li>Keep three colours in an outfit at most: a base, a second, and something small that is neither.</li>'+
 '<li>Match the warmth rather than the shade. A warm '+c[0].toLowerCase()+' next to a cool neutral looks off even when both are &ldquo;correct&rdquo;.</li>'+
 '<li>Texture counts as contrast. Two pieces in the same colour but different weaves read as deliberate; in the same weave they read as a suit that lost its jacket.</li>'+
 '<li>Check it in daylight. Shop lighting flatters everything and tells you nothing.</li></ul></div></div>'+
 '<p class="note">General pairing guidance. Skin tone, the exact dye and the fabric all shift this, so treat the swatches as a direction rather than a verdict.</p>';}
if($('clBase')){$('clBase').addEventListener('change',colOut);colOut();}
function lenOut(){var h=n('lnH'),heel=n('lnHeel'),cut=$('lnCut').value,o=$('lnOut');
 if(!(h>120)){o.innerHTML='<h4>Enter your height</h4><p>In centimetres. Everything below scales from it, with the heel height added where it matters.</p>';return;}
 var inseam=Math.round(h*0.45);
 var adj={none:-1.5,slight:0.5,full:2.5}[cut];
 var trouser=Math.round(inseam+heel+adj);
 var skirtKnee=Math.round(h*0.28),skirtMidi=Math.round(h*0.40);
 var sleeve=Math.round(h*0.34);
 var BR0={none:["No break","Hem just touches the shoe. Sharpest, least forgiving, and shows every change in heel height."],
 slight:["Slight break","One soft fold at the front. The safe choice for almost everything."],
 full:["Full break","A clear fold and a longer hem. Traditional, and it shortens the leg line."]};
 var BR=BR0[cut];
 o.innerHTML='<h4>At '+h+' cm'+(heel?', '+heel+' cm heel':'')+'</h4><div class="osplit">'+
 '<div><dl class="kv"><dt>Inseam</dt><dd>about '+inseam+' cm</dd><dt>Trouser length</dt><dd>'+trouser+' cm</dd><dt>Skirt, at the knee</dt><dd>'+skirtKnee+' cm</dd><dt>Skirt, midi</dt><dd>'+skirtMidi+' cm</dd><dt>Sleeve</dt><dd>'+sleeve+' cm</dd></dl></div>'+
 '<div><p><b>'+BR[0]+'.</b> '+BR[1]+'</p><ul>'+
 '<li>Hem to the shoes you will actually wear with them. A 4 cm change in heel is a visibly different trouser.</li>'+
 '<li>A jacket sleeve should finish where the hand meets the wrist, with about 1 cm of shirt cuff showing.</li>'+
 '<li>Skirt lengths read best just above or just below the widest part of the calf, never across it.</li>'+
 (heel>=6?'<li>At this heel height, ask for the hem to be measured while you stand in the shoes rather than calculated from them.</li>':'<li>If you alternate flats and heels, hem for the flats and accept a slightly short line in heels.</li>')+
 '<li>Take anything you are unsure about to an alterations shop before you cut. Hems come up easily and go down badly.</li></ul></div></div>'+
 '<p class="note">Proportions vary independently of height by several centimetres, so these are the measurements to pin and check in a mirror, not numbers to cut to.</p>';}
['lnH','lnHeel','lnCut'].forEach(function(i){var e=$(i);if(e)e.addEventListener('input',lenOut);});
if($('lnH'))lenOut();
})();
