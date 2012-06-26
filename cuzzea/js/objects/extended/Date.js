
/*
 * @params start week, start year, end week, end year
 * @response {year1:{week1:true,week2:true,...},...}
 */
Date.prototype.toYearWeekObject = function(_sw,_sy,_ew,_ey){
    var y,w,sw,ew,
        r = {};
    for(y=_sy;y<=_ey;y++){
        sw = (y==_sy ? _sw :  1);
        ew = (y==_ey ? _ew : 53);
        if(!r[y]) r[y]={};
        for(w=sw;w<=ew;w++){
            r[y][w]=true;
        }
    }
    return r;
}

Date.prototype.getMySqlDate = function(){
    return this.getFullYear()+
        '-'+
        ( (this.getMonth()+1)<10 ? ('0'+(this.getMonth()+1)) : (this.getMonth()+1)) +
        '-'+
        ( this.getDate()<10 ? ('0'+this.getDate()) : this.getDate());
}

Date.prototype.getWeek = function() {
    // Create a copy of this date object
    var target = new Date(this.valueOf());

    // ISO week date weeks start on monday
    // so correct the day number
    var dayNr = (this.getDay() + 6) % 7;

    // ISO 8601 states that week 1 is the week
    // with the first thursday of that year.
    // Set the target date to the thursday in the target week
    target.setDate(target.getDate() - dayNr + 3);

    // Store the millisecond value of the target date
    var firstThursday = target.valueOf();

    // Set the target to the first thursday of the year
    // First set the target to january first
    target.setMonth(0, 1);
    // Not a thursday? Correct the date to the next thursday
    if(target.getDay() != 4) {
        target.setMonth(0, 1 + ((4 - target.getDay()) + 7) % 7);
    }

    // The weeknumber is the number of weeks between the
    // first thursday of the year and the thursday in the target week
    return 1 + Math.ceil((firstThursday - target) / 604800000);
    // 604800000 = 7 * 24 * 3600 * 1000
}

Date.prototype.getWeekYear = function() {
    // Create a new date object for the thursday of this week
    var target = new Date(this.valueOf());
    target.setDate(target.getDate() - ((this.getDay() + 6) % 7) + 3);
    return target.getFullYear();
}

Date.prototype.addDays = function(nr_of_days) {
    var a = new Date(this.valueOf());
    ;
    return nr_of_days == 0 ? this : new Date(a.setDate(a.getDate() + nr_of_days));
}
Date.prototype.addDaysToSunday = function() {
    return this.addDays(7 - (this.getDay() == 0 ? 7 : this.getDay()));
}
Date.prototype.moveToStartOfNextWeek = function() {
    return this.addDays(8 - (this.getDay() == 0 ? 7 : this.getDay()));
}
Date.prototype.addWeeks = function(weeks) {
    if(weeks < 1)
        return this;
    return this.addDays(8 - (this.getDay() == 0 ? 7 : this.getDay()) + 7 * (weeks - 1));
}
Date.prototype.getISODay = function() {
    // Native JS method - Sunday is 0, monday is 1 etc.
    var d = this.getDay();
    // Return d if not sunday; otherwise return 7
    return d ? d : 7;
};

Date.prototype.getMaxWeekOfYear = function() {
    var year = this.getFullYear();
    var maxWeek = 52;
    fj = new Date(year, 0, 1);
    //1st Jan
    tfd = new Date(year, 11, 31);
    //31st Dec
    if(fj.getDay() == 4 || tfd.getDay() == 4) {
        maxWeek = 53;
    }
    return maxWeek;
}