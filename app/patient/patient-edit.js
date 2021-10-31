class PatientEdit {
  constructor() {
    this.patientID = null;
    this.formMode = "";
  }
  init = () => {
    dataService.initEvent();
  };

  open(patientID) {
    this.patientID = patientID;
    if (patientID) {
      this.formMode = "Edit";
      let patientObj = dataService.getById(patientID);
      this.LoadControlData(patientObj);
    } else {
      this.formMode = "New";
      this.resetControls();
    }

    router.navigate(".patient-edit");
  }

  GetControlsData = () => {
    let idValue = $(".id-input").val();
    let fnameValue = $(".fname-input").val();
    let mnameValue = $(".mname-input").val();
    let lnameValue = $(".lname-input").val();
    let emailValue = $(".email-input").val();
    let creationValue = $(".form-select option:selected").val();
    let genderValue = $("input[type=radio]:checked").val();
    let DOBValue = $(".date-input").val();
    let activeValue = $("input[type=checkbox]:checked").val();

    let patientObject = {
      ID: idValue,
      fname: fnameValue,
      mname: mnameValue,
      lname: lnameValue,
      email: emailValue,
      gender: genderValue,
      DOB: DOBValue,
      Active: activeValue,
      creationDate: creationValue,
    };
    return patientObject;
  };

  LoadControlData = (patientObj) => {
    $(".id-input").val(patientObj.ID);
    $(".fname-input").val(patientObj.fname);
    $(".mname-input").val(patientObj.mname);
    $(".lname-input").val(patientObj.lname);
    $(".email-input").val(patientObj.email);
    $(`.gender-input[value = ${patientObj.gender}]`).attr("checked", "checked");
    $(".date-input").val("1954-02-09");
    $(`.active-input[value = ${patientObj.Active}]`).attr("checked", "checked");
    $(`.form-select option[value = 1]`).attr("selected", "selected");
  };

  resetControls() {
    $(".id-input").val("");
    $(".fname-input").val("");
    $(".mname-input").val("");
    $(".lname-input").val("");
    $(".email-input").val("");
    $(`.gender-input[value = ""]`);
    $(".date-input").val("");
    $(`.active-input[value = ""]`);
    $(`.form-select option[value = "today"]`).attr("selected", "selected");
  }

  // -------------------------------------------------------------------------
  // ***********  getById  *******************
  // -------------------------------------------------------------------------
}
var patientEdit = new PatientEdit();
