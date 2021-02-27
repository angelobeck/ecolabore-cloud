
me.nodeChangeFocus = function (previous, next){
if (previous === next)
return;

previous.element.classList.remove("active");
previous.element.setAttribute ("aria-selected", false);

me.nodeInFocus = next;
me.element.setAttribute ("aria-activedescendant", next.id);
next.element.classList.add("active");
next.element.setAttribute ("aria-selected", true);

if(previous.parent === next.parent){
previous.submenu.hidden = true;
return;
}

var walkPrevious = [];
var walkNext = [];
var walk = previous;
while(true){
walkPrevious[walkPrevious.length] = walk;
walk = walk.parent;
if(walk === me)
break;
}

walk = next;
while(true){
walkNext[walkNext.length] = walk;
walk = walk.parent;
if(walk === me)
break;
}

walkPrevious.reverse();
walkNext.reverse();

for(let i = walkPrevious.length - 1; i >= 0; i--){
if(i < walkNext.length && walkPrevious[i] === walkNext[i])
break;

walkPrevious[i].submenu.hidden = true;
}

};
