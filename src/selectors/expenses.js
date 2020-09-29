import moment from 'moment';

const getVisibleExpenses = (expenses, filters) => {
    return expenses.filter((expense)=>{
        const createdAtMoment = moment(expense.createdAt);
        const startDatematch = filters.startDate ? filters.startDate.isSameOrBefore(createdAtMoment,'day') : true;
        const endDateMatch =  filters.endDate ? filters.endDate.isSameOrAfter(createdAtMoment,'day') : true;
        const textMatch = typeof filters.text !=='string' || expense.description.toLowerCase().includes(filters.text.toLowerCase()); 
        return startDatematch && endDateMatch && textMatch;
    }).sort((a,b)=>{
         if (filters.sortBy === 'date'){
             return a.createdAt < b.createdAt ? 1 : -1
         }else{
             return a.amount < b.amount ? 1 : -1
         }
    })

};

export default getVisibleExpenses;