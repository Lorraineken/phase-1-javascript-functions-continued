// code your solution here
function saturdayFun(activity ="roller-skate"){
     if(activity=== 'bathe my dog'){
        return `This Saturday, I want to ${activity}!`
    }
return`This Saturday, I want to ${activity}!`
}

const mondayWork = function (activity ='go to the office'){
    if(activity=== 'work from home'){
        return `This Monday, I will ${activity}.`
    }

return `This Monday, I will ${activity}.`
}

function wrapAdjective(str="*"){
    const adjTest = function(adj="a dedicated programmer"){
            return `You are ${str}${adj}${str}!`
    };
    return adjTest;
}