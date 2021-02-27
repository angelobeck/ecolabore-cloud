
me.generateGridSteps = function(min, max){

if(valueRange < 0)
valueRange *= -1;

var magnitude;

if(valueRange == 1)
magnitude = 0.1;
else if(valueRange > 1)
for(magnitude = 1; magnitude * 10 <= valueRange; magnitude *= 10);
else
for(magnitude = 0.1; magnitude * 10 >= valueRange; magnitude /= 10);

return magnitude;
};
