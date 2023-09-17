export const averageCalc = (arg1: string, arg2: string): number => {
    const numArg1 = Number(arg1);
    const numArg2 = Number(arg2);
    const result = (numArg1 + numArg2) / 2;
    return result;
}

export const colorPick = (arg1: string): string => {
    switch (arg1) {
        case "여유":
            return "rgb(0, 211, 105)"
        case "보통":
            return "rgb(130, 211, 0)"
        case "약간 붐빔":
            return "rgb(211, 120, 0)"
        default:
            return "rgb(211, 25, 0)"
    }
}