class PatientList {
  init() {
    this.show();
    this.initEvents();
  }
  initEvents() {
    $(".patient-list .patient-add").click(this.AddPatient);
    $(".patient-list .patient-EditBtn").click(this.onEditCurrentPatient);
  }
  RenderTable() {
    $(".table-row").remove();
    let templateText = $("#patient-list-template").html();
    patientsData.forEach((data) => {
      let RenderTemplate = templateEngine.Rendertemplate(templateText, data);
      $(".patient-table-data").append(RenderTemplate);
    });
  }
  show() {
    this.RenderTable();
    router.navigate(".patient-list");
  }
  AddPatient = () => {
    patientEdit.open();
  };

  onEditCurrentPatient = (e) => {
    let currentRow = $(e.target).closest("tr");
    let currentID = currentRow.find(".patient-id").data("id");
    patientEdit.open(currentID);
  };
}
var patientList = new PatientList();
