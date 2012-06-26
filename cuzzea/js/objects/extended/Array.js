/*
 * Custom augmentation of Array prototype, that compares current array with an array in parameter.
 *
 * @param testArr - array to compare with.
 * @return true if arrays are "equal" according to comparison function, false otherwise.
 */
Array.prototype.compare = function(testArr) {
    if(!this.length && !testArr)
        return true;

    if(this.length != testArr.length)
        return false;

    for(var i = 0; i < testArr.length; i++) {
        var me0 = this[i][0];
        var me1 = this[i][1];
        var me2 = this[i][2];

        var test0 = testArr[i][0];
        var test1 = testArr[i][1];
        var test2 = testArr[i][2];

        if(((me1 == null) && (test1 != null)) || ((me2 != null) && (test2 == null)))
            return false;

        // Check start/end dates and allocation hours:
        if((me0['startdate'] && test0['startdate'] && (me0['startdate'] != test0['startdate'])) || (me0['enddate'] && test0['enddate'] && (me0['enddate'] != test0['enddate'])) || (me0['allocationhours'] && test0['allocationhours'] && me0['allocationhours'] != test0['allocationhours']))
            return false;

        if((me1 == null) || (me2 == null))
            continue;

        // Check role and consultant:
        if((me1['id'] != test1['id']) || (me2['id'] != test2['id']))
            return false;
    }

    return true;
}