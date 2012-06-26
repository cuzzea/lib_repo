String.prototype.splitD = function() {

    var d = new Date(DateUtility.formatDate(this.toString(), false));
    var ret = [];
    ret[0] = d.getDate();
    ret[1] = (d.getMonth() + 1);
    ret[2] = d.getFullYear();
    return ret;
}