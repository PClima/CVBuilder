var cont_educational = 1;
var cont_certification = 1;
var cont_professional = 1;
var cont_languages = 1;

//OnChange for academic field
function academic_validation() {
  if (
    $("input[name='course[]']").val() ||
    $("input[name='institution[]']").val() ||
    $("input[name='course_conclusion_date[]']").val()
  ) {
    $("input[name='course[]']").prop("required", true);
    $("input[name='institution[]']").prop("required", true);
    $("input[name='course_conclusion_date[]']").prop("required", true);
  } else {
    $("input[name='course[]']").prop("required", false);
    $("input[name='institution[]']").prop("required", false);
    $("input[name='course_conclusion_date[]']").prop("required", false);
  }
}
//OnChange for certification field
function certification_validation() {
  if (
    $("input[name='certification_name[]']").val() ||
    $("input[name='certification_organization[]']").val() ||
    $("input[name='certification_conclusion_date[]']").val()
  ) {
    $("input[name='certification_name[]']").prop("required", true);
    $("input[name='certification_organization[]']").prop("required", true);
    $("input[name='certification_conclusion_date[]']").prop("required", true);
  } else {
    $("input[name='certification_name[]']").prop("required", false);
    $("input[name='certification_organization[]']").prop("required", false);
    $("input[name='certification_conclusion_date[]']").prop("required", false);
  }
}

function professional_validation() {
  if (
    $("input[name='company[]']").val() ||
    $("input[name='position[]']").val() ||
    $("input[name='professional_join_date[]']").val() ||
    $("input[name='professional_end_date[]']").val() ||
    $("textarea[name='work_functions[]']").val()
  ) {
    $("input[name='company[]']").prop("required", true);
    $("input[name='position[]']").prop("required", true);
    $("input[name='professional_join_date[]']").prop("required", true);
    $("textarea[name='work_functions[]']").prop("required", true);
  } else {
    $("input[name='company[]']").prop("required", false);
    $("input[name='position[]']").prop("required", false);
    $("input[name='professional_join_date[]']").prop("required", false);
    $("textarea[name='work_functions[]']").prop("required", false);
  }
}
//Add educational line action
function add_educational_line() {
  var f = $("[name=educational_line]:last"),
    c = f.clone(true, true).find("input").val("").end().show();
  c.insertAfter(f);

  //Insert delete button in new line
  if (cont_educational <= 1) {
    $("[name=educational_line]:last").append(
      "<div class='align-self-end' style='height: 100%;'> <button class='btn btn-primary border rounded-pill border-0 d-xl-flex align-items-xl-center' type='button' style='color: #c91526;background: var(--bs-form-invalid-color);' id='remove_educational_btn' onclick='remove_line($(this).parent().parent()),cont_educational--'><svg class='text-center d-xl-flex justify-content-xl-center align-items-xl-center' xmlns='http://www.w3.org/2000/svg' height='1em' viewBox='0 0 24 24' width='1em' fill='currentColor'style='border-color: var(--bs-btn-color);color: var(--bs-emphasis-color);'><path d='M0 0h24v24H0z' fill='none'></path><path d='M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z'></path></svg></button></div>"
    );
  }
  cont_educational++;
}
//Add certification line action
function add_certification_line() {
  var f = $("[name=certification_line]:last"),
    c = f.clone(true, true).find("input").val("").end().show();
  c.insertAfter(f);

  //Insert delete button in new line
  if (cont_certification <= 1) {
    $("[name=certification_line]:last").append(
      "<div class='align-self-end' style='height: 100%;'> <button class='btn btn-primary border rounded-pill border-0 d-xl-flex align-items-xl-center' type='button' style='color: #c91526;background: var(--bs-form-invalid-color);' id='remove_certification_btn' onclick='remove_line($(this).parent().parent()),cont_certification--'><svg class='text-center d-xl-flex justify-content-xl-center align-items-xl-center' xmlns='http://www.w3.org/2000/svg' height='1em' viewBox='0 0 24 24' width='1em' fill='currentColor'style='border-color: var(--bs-btn-color);color: var(--bs-emphasis-color);'><path d='M0 0h24v24H0z' fill='none'></path><path d='M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z'></path></svg></button></div>"
    );
  }
  cont_certification++;
}
//Add language line action
function add_language_line() {
  var f = $("[name=languages_div]:last"),
    c = f.clone(true, true).find("input").val("").end().show();
  c.insertAfter(f);

  //Insert delete button in new line
  if (cont_languages <= 1) {
    $("[name=languages_div]:last").append(
      "<div class='align-self-end' style='height: 100%;'> <button class='btn btn-primary border rounded-pill border-0 d-xl-flex align-items-xl-center' type='button' style='color: #c91526;background: var(--bs-form-invalid-color);' id='remove_language_btn' onclick='remove_line($(this).parent().parent()),cont_languages--'><svg class='text-center d-xl-flex justify-content-xl-center align-items-xl-center' xmlns='http://www.w3.org/2000/svg' height='1em' viewBox='0 0 24 24' width='1em' fill='currentColor'style='border-color: var(--bs-btn-color);color: var(--bs-emphasis-color);'><path d='M0 0h24v24H0z' fill='none'></path><path d='M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z'></path></svg></button></div>"
    );
  }
  cont_languages++;
}
//Add professional line action
function add_professional_line() {
  var f = $("[name=professional_block1]:last"),
    c = f.clone(true, true).find("input").val("").end().show();

  c.insertAfter(f);

  //Insert delete button in new line
  if (cont_professional <= 1) {
    $("[name=professional_line1]:last").append(
      "<div class='align-self-end' style='height: 100%;'> <button class='btn btn-primary border rounded-pill border-0 d-xl-flex align-items-xl-center' type='button' style='color: #c91526;background: var(--bs-form-invalid-color);' id='remove_language_btn' onclick='remove_line($(this).parent().parent().parent()),cont_professional--'><svg class='text-center d-xl-flex justify-content-xl-center align-items-xl-center' xmlns='http://www.w3.org/2000/svg' height='1em' viewBox='0 0 24 24' width='1em' fill='currentColor'style='border-color: var(--bs-btn-color);color: var(--bs-emphasis-color);'><path d='M0 0h24v24H0z' fill='none'></path><path d='M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z'></path></svg></button></div>"
    );
  }
  cont_professional++;
}
//Remove line action
function remove_line(caller) {
  caller.remove();
}

function build_header(name, email, phone, linkedin, district, city, uf) {
  const countSpace = linkedin ? 2 : 1;

  return [
    {
      style: "tablePersonalName",
      table: {
        widths: ["*", "*"],
        body: [
          [
            {
              alignment: "center",
              rowSpan: 5,
              border: [false, false, true, false],
              text: "\n".repeat(countSpace) + name,
            },
            "",
          ],
          [
            "",
            {
              fontSize: 10,
              alignment: "left",
              border: [undefined],
              table: {
                widths: ["auto", "*"],
                body: [
                  [
                    {
                      alignment: "left",
                      border: [undefined],
                      svg: '<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="10" height="10" viewBox="0 0 48 48"><path fill="#90CAF9" d="M24 29A18 6.5 0 1 0 24 42A18 6.5 0 1 0 24 29Z"></path><path fill="#FF3D00" d="M24,6c-6.075,0-11,4.858-11,10.85C13,22.843,24,37,24,37s11-14.157,11-20.15C35,10.858,30.075,6,24,6z M24,22c-2.762,0-5-2.239-5-5s2.239-5,5-5c2.761,0,5,2.239,5,5S26.762,22,24,22z"></path></svg>',
                    },
                    {
                      alignment: "left",
                      border: [undefined],
                      text: district
                        ? district + " – " + city + "," + uf
                        : city + "," + uf,
                    },
                  ],
                ],
              },
            },
          ],
          [
            "",
            {
              fontSize: 10,
              alignment: "left",
              border: undefined,
              table: {
                widths: ["auto", "*"],
                body: [
                  [
                    {
                      alignment: "left",
                      border: [undefined],
                      svg: '<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="10" height="10" viewBox="0 0 24 24"><path fill="#eceff1" d="m20.52 3.449c-2.28-2.204-5.28-3.449-8.475-3.449-9.17 0-14.928 9.935-10.349 17.838l-1.696 6.162 6.335-1.652c2.76 1.491 5.021 1.359 5.716 1.447 10.633 0 15.926-12.864 8.454-20.307z"></path><path fill="#4caf50" d="m12.067 21.751-.006-.001h-.016c-3.182 0-5.215-1.507-5.415-1.594l-3.75.975 1.005-3.645-.239-.375c-.99-1.576-1.516-3.391-1.516-5.26 0-8.793 10.745-13.19 16.963-6.975 6.203 6.15 1.848 16.875-7.026 16.875z"></path><path fill="#fafafa" d="m17.507 14.307-.009.075c-.301-.15-1.767-.867-2.04-.966-.613-.227-.44-.036-1.617 1.312-.175.195-.349.21-.646.075-.3-.15-1.263-.465-2.403-1.485-.888-.795-1.484-1.77-1.66-2.07-.293-.506.32-.578.878-1.634.1-.21.049-.375-.025-.524-.075-.15-.672-1.62-.922-2.206-.24-.584-.487-.51-.672-.51-.576-.05-.997-.042-1.368.344-1.614 1.774-1.207 3.604.174 5.55 2.714 3.552 4.16 4.206 6.804 5.114.714.227 1.365.195 1.88.121.574-.091 1.767-.721 2.016-1.426.255-.705.255-1.29.18-1.425-.074-.135-.27-.21-.57-.345z"></path></svg>',
                    },
                    {
                      alignment: "left",
                      border: [undefined],
                      text: phone,
                    },
                  ],
                ],
              },
            },
          ],
          [
            "",
            {
              fontSize: 10,
              alignment: "left",
              border: undefined,
              table: {
                widths: ["auto", "*"],
                body: [
                  [
                    {
                      alignment: "left",
                      border: [undefined],
                      svg: '<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="10" height="10" viewBox="0 0 24 24"><path d="M 3.75 4 C 2.784 4 2 4.784 2 5.75 L 12 12 L 22 5.75 C 22 4.784 21.216 4 20.25 4 L 3.75 4 z M 2 7.7519531 L 2 18 C 2 19.105 2.895 20 4 20 L 20 20 C 21.105 20 22 19.105 22 18 L 22 7.7519531 L 12 14 L 2 7.7519531 z"></path></svg>',
                    },
                    {
                      alignment: "left",
                      border: [undefined],
                      text: email,
                    },
                  ],
                ],
              },
            },
          ],
          linkedin
            ? [
                "",
                {
                  fontSize: 10,
                  alignment: "left",
                  border: undefined,
                  noWrap: true,
                  table: {
                    widths: ["auto", "*"],
                    body: [
                      [
                        {
                          alignment: "left",
                          border: [undefined],
                          svg: '<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="10" height="10" viewBox="0 0 24 24"><path fill="#0077b5" d="m22 0h-20c-1.105 0-2 .895-2 2v20c0 1.105.895 2 2 2h20c1.105 0 2-.895 2-2v-20c0-1.105-.895-2-2-2zm-14.971 21h-3.732v-12.017h3.732zm-1.868-13.657c-1.193 0-2.161-.988-2.161-2.181s.968-2.162 2.161-2.162 2.161.969 2.161 2.162-.968 2.181-2.161 2.181zm15.839 13.656h-.004v.001h-3.723v-5.85c0-1.395-.028-3.183-1.94-3.183-1.94 0-2.237 1.515-2.237 3.081v5.95h-3.729v-12.016h3.579v1.639h.052c.498-.945 1.716-1.941 3.531-1.941 3.776 0 4.471 2.487 4.471 5.717z"></path></svg>',
                        },
                        {
                          alignment: "left",
                          border: [undefined],
                          text: linkedin,
                        },
                      ],
                    ],
                  },
                },
              ]
            : ["", ""],
        ],
      },
      layout: {
        defaultBorder: false,
      },
    },
  ];
}

function build_personalKnows(personal_informations) {
  return [
    {
      style: "tableGeneralHeaders",
      table: {
        widths: ["*"],
        body: [
          [
            {
              alignment: "left",
              border: [false, false, false, true],
              text: "\nSíntese de Conhecimentos",
            },
          ],
          [
            {
              style: "tableGeneralText",
              alignment: "left",
              border: [undefined],
              text: personal_informations,
            },
          ],
        ],
      },
    },
  ];
}

//PDF Generator
function cv_generator(form) {
  //Structures
  var bodyHeader = [];
  var bodyAcademic = [];
  var bodyCertifications = [];
  var bodyLanguage = [];
  var bodyProfessional = [];
  var bodyPersonalKnows = [];
  var bodyTechnologies = [];

  //Form Values
  const name = form.name.value;
  const email = form.email.value;
  const phone = form.phone.value;
  const linkedin = form.linkedin.value;
  const district = form.district.value;
  const city = form.city.value;
  const uf = form.uf.value;
  const personal_informations = form.personal_informations.value;
  const position = form.position_desired.value;
  const technologies = form.technologies.value;

  //Maps to get multiple input field
  //Courses
  const courses = $("input[name='course[]']")
    .map(function () {
      return $(this).val();
    })
    .get();

  //Certifications
  const certifications = $("input[name='certification_name[]']")
    .map(function () {
      return $(this).val();
    })
    .get();

  //Languages
  const languages = $("input[name='languages[]']")
    .map(function () {
      return $(this).val();
    })
    .get();

  const companies = $("input[name='company[]']")
    .map(function () {
      return $(this).val();
    })
    .get();

  //Build Header
  if (name) {
    bodyHeader.push(
      build_header(name, email, phone, linkedin, district, city, uf)
    );
  } else {
    bodyHeader.push([]);
  }
  //Build PersonalKnows
  if (personal_informations) {
    bodyPersonalKnows.push(build_personalKnows(personal_informations));
  } else {
    bodyPersonalKnows.push([]);
  }

  //If any course, change required status for institution field and conclusion date
  //And build structure for PDF
  if ($("input[name='course[]']").val()) {
    var institutions = $("input[name='institution[]']")
      .map(function () {
        return $(this).val();
      })
      .get();

    var courses_conclusion_date = $("input[name='course_conclusion_date[]']")
      .map(function () {
        var temp = $(this).val().split("-");
        var date = new Date(temp[0] + "-" + parseInt(temp[1]));
        return (
          new Intl.DateTimeFormat("pt-br", { month: "long" }).format(date) +
          " de " +
          date.getFullYear()
        );
      })
      .get();
    bodyAcademic.push([
      {
        alignment: "left",
        border: [false, false, false, true],
        text: "\nFormação Acadêmica",
      },
    ]);
    courses.forEach((course, i) => {
      bodyAcademic.push([
        {
          style: "tableGeneralText",
          fontSize: 10,
          alignment: "left",
          border: [undefined],
          table: {
            widths: ["auto", "*"],
            body: [
              [
                {
                  alignment: "left",
                  border: [undefined],
                  svg: '<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="5" height="5" viewBox="0 0 48 48"><path d="M44,24c0-2.782-1.544-5.289-3.912-6.58c0.896-2.652,0.251-5.687-1.785-7.723c-2.036-2.036-5.07-2.679-7.723-1.785	C29.289,5.544,26.782,4,24,4s-5.289,1.544-6.58,3.912c-2.654-0.897-5.688-0.251-7.723,1.785c-2.036,2.036-2.682,5.071-1.785,7.723	C5.544,18.711,4,21.218,4,24s1.544,5.289,3.912,6.58c-0.896,2.652-0.251,5.687,1.785,7.723c2.037,2.036,5.073,2.682,7.723,1.785	C18.711,42.456,21.218,44,24,44s5.289-1.544,6.58-3.912c2.653,0.897,5.687,0.25,7.723-1.785c2.036-2.036,2.682-5.071,1.785-7.723	C42.456,29.289,44,26.782,44,24z M32.561,20.561l-10,10C22.268,30.854,21.884,31,21.5,31s-0.768-0.146-1.061-0.439l-5-5	c-0.586-0.585-0.586-1.536,0-2.121c0.586-0.586,1.535-0.586,2.121,0l3.939,3.939l8.939-8.939c0.586-0.586,1.535-0.586,2.121,0	C33.146,19.025,33.146,19.975,32.561,20.561z"></path></svg>',
                },
                {
                  alignment: "left",
                  border: [undefined],
                  text:
                    course +
                    " | " +
                    institutions[i] +
                    " - " +
                    courses_conclusion_date[i],
                },
              ],
            ],
          },
        },
      ]);
    });
  } else {
    bodyAcademic.push([]);
  }

  //If any course, change required status for institution field and conclusion date
  //And build structure for PDF
  if ($("input[name='certification_name[]']").val()) {
    var certification_organizations = $(
      "input[name='certification_organization[]']"
    )
      .map(function () {
        return $(this).val();
      })
      .get();

    var certifications_conclusion_date = $(
      "input[name='certification_conclusion_date[]']"
    )
      .map(function () {
        var temp = $(this).val().split("-");
        var date = new Date(temp[0] + "-" + parseInt(temp[1]));
        return (
          new Intl.DateTimeFormat("pt-br", { month: "long" }).format(date) +
          " de " +
          date.getFullYear()
        );
      })
      .get();

    bodyCertifications.push([
      {
        alignment: "left",
        border: [false, false, false, true],
        text: "\nCursos e Certificações",
      },
    ]);

    certifications.forEach((certification, i) => {
      bodyCertifications.push([
        {
          style: "tableGeneralText",
          fontSize: 10,
          alignment: "left",
          border: [undefined],
          table: {
            widths: ["auto", "*"],
            body: [
              [
                {
                  alignment: "left",
                  border: [undefined],
                  svg: '<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="5" height="5" viewBox="0 0 48 48"><path d="M44,24c0-2.782-1.544-5.289-3.912-6.58c0.896-2.652,0.251-5.687-1.785-7.723c-2.036-2.036-5.07-2.679-7.723-1.785	C29.289,5.544,26.782,4,24,4s-5.289,1.544-6.58,3.912c-2.654-0.897-5.688-0.251-7.723,1.785c-2.036,2.036-2.682,5.071-1.785,7.723	C5.544,18.711,4,21.218,4,24s1.544,5.289,3.912,6.58c-0.896,2.652-0.251,5.687,1.785,7.723c2.037,2.036,5.073,2.682,7.723,1.785	C18.711,42.456,21.218,44,24,44s5.289-1.544,6.58-3.912c2.653,0.897,5.687,0.25,7.723-1.785c2.036-2.036,2.682-5.071,1.785-7.723	C42.456,29.289,44,26.782,44,24z M32.561,20.561l-10,10C22.268,30.854,21.884,31,21.5,31s-0.768-0.146-1.061-0.439l-5-5	c-0.586-0.585-0.586-1.536,0-2.121c0.586-0.586,1.535-0.586,2.121,0l3.939,3.939l8.939-8.939c0.586-0.586,1.535-0.586,2.121,0	C33.146,19.025,33.146,19.975,32.561,20.561z"></path></svg>',
                },
                {
                  style: "tableGeneralText",
                  alignment: "left",
                  border: [undefined],
                  text:
                    certification +
                    " | " +
                    certification_organizations[i] +
                    " - " +
                    certifications_conclusion_date[i],
                },
              ],
            ],
          },
        },
      ]);
    });
  } else {
    bodyCertifications.push([]);
  }

  //If any course, change required status for institution field and conclusion date
  //And build structure for PDF
  if ($("input[name='course[]']").val()) {
    bodyLanguage.push([
      {
        alignment: "left",
        border: [false, false, false, true],
        text: "\nIdiomas",
      },
    ]);

    languages.forEach((language) => {
      bodyLanguage.push([
        {
          style: "tableGeneralText",
          fontSize: 10,
          alignment: "left",
          border: [undefined],
          table: {
            widths: ["auto", "*"],
            body: [
              [
                {
                  alignment: "left",
                  border: [undefined],
                  svg: '<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="5" height="5" viewBox="0 0 48 48"><path d="M44,24c0-2.782-1.544-5.289-3.912-6.58c0.896-2.652,0.251-5.687-1.785-7.723c-2.036-2.036-5.07-2.679-7.723-1.785	C29.289,5.544,26.782,4,24,4s-5.289,1.544-6.58,3.912c-2.654-0.897-5.688-0.251-7.723,1.785c-2.036,2.036-2.682,5.071-1.785,7.723	C5.544,18.711,4,21.218,4,24s1.544,5.289,3.912,6.58c-0.896,2.652-0.251,5.687,1.785,7.723c2.037,2.036,5.073,2.682,7.723,1.785	C18.711,42.456,21.218,44,24,44s5.289-1.544,6.58-3.912c2.653,0.897,5.687,0.25,7.723-1.785c2.036-2.036,2.682-5.071,1.785-7.723	C42.456,29.289,44,26.782,44,24z M32.561,20.561l-10,10C22.268,30.854,21.884,31,21.5,31s-0.768-0.146-1.061-0.439l-5-5	c-0.586-0.585-0.586-1.536,0-2.121c0.586-0.586,1.535-0.586,2.121,0l3.939,3.939l8.939-8.939c0.586-0.586,1.535-0.586,2.121,0	C33.146,19.025,33.146,19.975,32.561,20.561z"></path></svg>',
                },
                {
                  style: "tableGeneralText",
                  alignment: "left",
                  border: [undefined],
                  text: language,
                },
              ],
            ],
          },
        },
      ]);
    });
  } else {
    bodyLanguage.push([]);
  }

  //Map to get each certification

  if ($("input[name='company[]']").val()) {
    var positions = $("input[name='position[]']")
      .map(function () {
        return $(this).val();
      })
      .get();

    var professional_join_dates = $("input[name='professional_join_date[]']")
      .map(function () {
        var temp = $(this).val().split("-");
        var date = new Date(temp[0] + "-" + parseInt(temp[1]));
        return (
          new Intl.DateTimeFormat("pt-br", { month: "long" }).format(date) +
          " de " +
          date.getFullYear()
        );
      })
      .get();

    var professional_end_dates = [];
    var temp_professional_end_dates = $("input[name='professional_end_date[]']")
      .map(function () {
        if ($(this).val() !== "") {
          var temp = $(this).val().split("-");
          var date = new Date(temp[0] + "-" + parseInt(temp[1]));
          professional_end_dates.push(
            new Intl.DateTimeFormat("pt-br", { month: "long" }).format(date) +
              " de " +
              date.getFullYear()
          );
        } else {
          professional_end_dates.push("Atual");
        }
      })
      .get();

    var work_functions = $("textarea[name='work_functions[]']")
      .map(function () {
        return $(this).val();
      })
      .get();

    if (technologies) {
      bodyTechnologies.push({
        style: "tableGeneralHeaders",
        table: {
          widths: ["*"],
          body: [
            [
              {
                alignment: "left",
                border: [false, false, false, true],
                text: "\nSíntese de Conhecimentos",
              },
            ],
            [
              {
                style: "tableGeneralText",
                alignment: "left",
                border: [undefined],
                text: personal_informations,
              },
            ],
          ],
        },
      });
    } else {
      bodyTechnologies.push([]);
    }

    bodyProfessional.push([
      {
        alignment: "left",
        border: [false, false, false, true],
        text: "\nTrajetória Profissional",
      },
    ]);

    companies.forEach((company, i) => {
      bodyProfessional.push(
        [
          {
            style: "tableProfessionalHeader",
            alignment: "left",
            border: [undefined],
            text: company,
          },
        ],
        [
          {
            style: "tableProfessionalSubHeader",
            alignment: "left",
            border: [undefined],
            text:
              positions[i] +
              " | " +
              professional_join_dates[i] +
              " – " +
              professional_end_dates[i],
          },
        ],
        [
          {
            style: "tableGeneralText",
            alignment: "left",
            border: [undefined],
            text: work_functions[i],
          },
        ]
      );
    });
  } else {
    bodyProfessional.push([]);
  }

  const docDefinition = {
    content: [
      bodyHeader,
      {
        style: "tablePosition",
        table: {
          widths: ["*"],
          body: [
            [
              {
                alignment: "center",
                border: [undefined],
                text: "\n" + position,
              },
            ],
          ],
        },
      },
      bodyPersonalKnows,
      {
        style: "tableGeneralHeaders",
        table: {
          widths: ["*"],
          body: bodyAcademic,
        },
      },
      bodyTechnologies,
      {
        style: "tableGeneralHeaders",
        table: {
          widths: ["*"],
          body: bodyProfessional,
        },
      },
      {
        style: "tableGeneralHeaders",
        table: {
          widths: ["*"],
          body: bodyCertifications,
        },
      },
      {
        style: "tableGeneralHeaders",
        table: {
          widths: ["*"],
          body: bodyLanguage,
        },
      },
    ],
    styles: {
      header: {
        fontSize: 18,
        bold: true,
        margin: [0, 0, 0, 10],
      },
      subheader: {
        fontSize: 16,
        bold: true,
        margin: [0, 10, 0, 5],
      },
      tablePersonalName: {
        verticalAlign: "center",
        fontSize: 20,
        margin: [0, 0, 0, 0],
        alignment: "center",
      },
      tablePersonalInfos: {
        fontSize: 20,
        margin: [0, 0, 0, 0],
        alignment: "center",
      },
      tablePosition: {
        bold: true,
        fontSize: 10,
        color: "black",
      },
      tableGeneralHeaders: {
        bold: true,
        fontSize: 10,
        color: "#00afef",
      },
      tableProfessionalHeader: {
        bold: true,
        fontSize: 10,
        color: "black",
      },
      tableProfessionalSubHeader: {
        bold: true,
        fontSize: 9,
        color: "black",
      },
      tableGeneralText: {
        bold: false,
        fontSize: 8,
        color: "black",
      },
    },
    defaultStyle: {
      // alignment: 'justify'
    },
  };

  const pdf = createPdf(docDefinition);
  pdf.download(name + " CV.pdf");
}
