export const mapCategory = category => {
    switch(category){
        case 'question':
            return 0;
        case 'suggestion':
            return 1;
        case 'clarification':
            return 2;
    }
}