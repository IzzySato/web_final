//TODO change the parapeters
const temp01 = ({id, name, sex, country, hobby}) => `
<ul id="${id}" class="personUl">
  <li>name: ${name}</li>
  <li>sex: ${sex}</li>
  <li>country: ${country}</li>
  <li>hobby: ${hobby}</li>
</ul>
`;

//JSON data
const getJSONdata01 = () => {
  $.ajax({
    url: '/people',
    dataType: 'json',
    type: 'GET',
    data: {format: 'json'},
    success: (data) => {
      const html = data.map(n => temp01(n)).join('');
      $('#container01').html(html);

      $('#filterNameBtn').click( () => {
        $('.personUl').css('display', 'none');
        const filterName = $('#filterName').val();
        const personId = data.filter(p => p.name === filterName).map(p => p.id);
        $(`${'#' + personId}`).css('display', 'block');
      });
    },
    error: (jqXHR, textStatus, errorThrown) => {
      $("#container01").text(jqXHR.statusText);
      console.log("ERROR:", jqXHR, textStatus, errorThrown);
    }
  });
};

//HTML data
const getHTMLdata = () => {
  $.ajax({
    url: '/people',
    dataType: 'html',
    type: 'GET',
    data: {format: 'html'},
    success: (data) => {
      $('#container02').html(data);
    },
    error: (jqXHR, textStatus, errorThrown) => {
      $("#container02").text(jqXHR.statusText);
      console.log("ERROR:", jqXHR, textStatus, errorThrown);
    }
  });
};

//POST
const postName = () => {
  //TODO change the parameter and html id
  const name = $('#name').val();
  const age = $('#age').val();
  const sex = $('#sex').val();
  const country = $('#country').val();
  const hobby = $('#hobby').val();

  $.ajax({
    url: '/people',
    dataType: 'html',
    type: 'POST',
    data: { name, age, sex, country, hobby },
    success: (data) => {
      $('#outputContainer').html(temp01({name, age, sex, country, hobby}));
    },
    error: function(jqXHR, textStatus, errorThrown) {
        $("#outputContainer").text(jqXHR.statusText);
        console.log("ERROR:", jqXHR, textStatus, errorThrown);
    }
  });
};

$(document).ready(()=> {
  console.log('ready');
  $('#submitButton').click(() => {
    postName();
  });
  getJSONdata01();
  getHTMLdata();
});