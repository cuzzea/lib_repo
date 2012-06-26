/*
 * Contains:
 *	getWeeksRangeFromInterval
 *	getNumberOfWeeksInsideInterval
 * 	getNumberOfWeeksInInterval
 *	getNumberOfWeeksInInterval_noDateObject
 *	getNumberOfWorkingDaysInRange
 */
 
 
/*
 Functions for createWeeks
 */
var weekFunctions = {
    /*
     _start			: interval start date object
     _end			: interval end date object
     pass_weekend	: bool , if true it will move the start date if it is on weekend to monday
     f				: function, if set it will be called when a week object is added
     to the retuned array
     params: function(week_object, i)
     week_object - the week object
     i - the week object index in the returned array
     */
    getWeeksRangeFromInterval : function(_start, _end, pass_weekend, f) {
        // can set flag to true in order to start from the first working day
        if(pass_weekend) {
            // check if start is on sat or sun
            // if so disregard these days as they are not working days
            if(_start.getDay() == 0 || _start.getDay() == 6)
                _start = _start.addDays(_start.getDay() == 0 ? 1 : 2);
        }

        var return_o = [];
        var o;
        var i = 0;
        while(_start <= _end) {
            o = {
                week : _start.getWeek(),
                month : _start.getMonth(),
                year : _start.getWeekYear(),
                cellStartDate : _start
            };
            return_o.push(o);
            _start = _start.moveToStartOfNextWeek();
            if(f)
                f(o, i);
            i++;
        }
        return return_o;
    },
    /*
     Returns info about the number of weeks inside an interval and the number of weeks
     until the start of the interval
     {
     weeks_before_interval_starts:int(week_number),
     weeks_in_interval			:int(week_number),
     from						:int(week_number),
     to							:int(week_number)
     }

     _interval_start						_start						_end
     |--------------------------------------x--------------------------|
     weeks_before_interval_starts			weeks_in_interval
     from						  to

     ex:	weekFunctions.getNumberOfWeeksInsideInterval(
     28-01-2012, 17-02-2012, 8-12-2011
     )
     {
     from:7,
     to:10,
     weeks_before_interval_starts:8,
     weeks_in_interval:4
     }
     week 49 2011			w52/2011		week 4 2012				week 7 2012
     |------------------------*-------------x--------------------------|
     8										4
     0									   7						  10

     from and to are variables used in for's so they will both get -1 (for starts from 0)
     */
    getNumberOfWeeksInsideInterval : function(_start, _end, _interval_start, pass_weekend) {
        // can set flag to true in order to start from the first working day
        if(pass_weekend) {
            // check if start is on sat or sun
            // if so disregard these days as they are not working days
            if(_interval_start.getDay() == 0 || _interval_start.getDay() == 6)
                _interval_start = _interval_start.addDays(_interval_start.getDay() == 0 ? 1 : 2);
            if(_start.getDay() == 0 || _start.getDay() == 6)
                _start = _start.addDays(_start.getDay() == 0 ? 1 : 2);
        }

        var weeks_before_interval_starts = weekFunctions.getNumberOfWeeksInInterval(_interval_start, _start);
        var weeks_in_interval = weekFunctions.getNumberOfWeeksInInterval(_start, _end);

        return {
            weeks_before_interval_starts : weeks_before_interval_starts,
            weeks_in_interval : weeks_in_interval,
            from : weeks_before_interval_starts - 1,
            to : weeks_before_interval_starts + weeks_in_interval - 2
        };
    },
    /*
     returns the number of weeks in a date interval
     */
    getNumberOfWeeksInInterval : function(_start, _end) {
        var startWeek = _start.getWeek();
        var endWeek = _end.getWeek();

        var weeks_number;
        var temp_date = new Date();
        temp_date.setMonth(5);

        if(_start.getWeekYear() != _end.getWeekYear()) {
            weeks_number = _start.getMaxWeekOfYear() - startWeek + endWeek;
            for(var i = _start.getWeekYear() + 1, l = _end.getWeekYear(); i < l; i++) {
                temp_date.setYear(i);
                weeks_number += new Date(temp_date).getMaxWeekOfYear();
            }
        } else {
            weeks_number = endWeek - startWeek;
        }
        return weeks_number + 1;
    },
    /*
     same as getNumberOfWeeksInInterval only it dose not get date object params
     */
    getNumberOfWeeksInInterval_noDateObject : function(_start_w, _start_y, _end_w, _end_y) {
        var startWeek = _start_w;
        var endWeek = _end_w;

        var startMaxW = new Date();startMaxW.setYear(_start_y);startMaxW.setMonth(2);startMaxW = startMaxW.getMaxWeekOfYear();
        var endMaxW = new Date();endMaxW.setYear(_end_y);endMaxW.setMonth(2);endMaxW = endMaxW.getMaxWeekOfYear();

        var weeks_number;
        var temp_date = new Date();
        temp_date.setMonth(5);

        if(_start_y != _end_y) {
            weeks_number = startMaxW - startWeek + endWeek;
            for(var i = _start_y + 1, l = _end_y; i < l; i++) {
                temp_date.setYear(i);
                weeks_number += new Date(temp_date).getMaxWeekOfYear();
            }
        } else {
            weeks_number = endWeek - startWeek;
        }
        return weeks_number + 1;
    },
    getNumberOfWorkingDaysInRange : function(_start, _end) {
        var weeks = weekFunctions.getNumberOfWeeksInInterval(_start, _end);
        var start_day = _start.getISODay();
        var end_day = _end.getISODay();
        return weeks * 5 - ((start_day - 1) > 5 ? 5 : (start_day - 1)) - ((5 - end_day) < 0 ? 0 : (5 - end_day));
    }
};