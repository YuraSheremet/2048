function SummaryView () {
    this.summaryModel = new SummaryModel();
    this.className = 'summary';
    this.template = document.getElementById('summaryTemplate').innerHTML;
    BaseView.call(this);
}

SummaryView.prototype = Object.create(BaseView.prototype);
SummaryView.prototype.constructor = SummaryView;

SummaryView.prototype.render = function () {
    return templateString(this.template, this.summaryModel.attributes);
};