// This script gets injected into any opened page
// whose URL matches the pattern defined in the manifest
// (see "content_script" key).
// Several foreground scripts can be declared
// and injected into the same or different pages.
let area = document.querySelector("body > div.js-page-wrapper > div > div.sg-flex.sg-flex--column.js-feed > div.sg-layout > div > div.sg-layout__aside-content")
let token = null
let opened = false
let url = String(window.location.href)
function loadedmsg() {
    let topbar = document.querySelector("#private-messages-container > section.brn-messages__chatbox.brn-chatbox.js-chatbox > div > div:nth-child(4) > footer > div.sg-content-box.sg-content-box--spaced-top.js-chatbox-footer > div > div > div.sg-actions-list__hole.sg-actions-list__hole--to-end")
    let thmsg = document.createElement("button")
    let corrmsg = document.createElement("button")
    let isadmin = localStorage.getItem("0576474418")
    if (isadmin === "true") {
        topbar.appendChild(thmsg)
        thmsg.outerHTML = '<button id="INCOMPLETE" style="height:32px; font-size: 12px; top: 1px; background-color:rgb(251, 190, 46)"class="sg-button">\n' +
            '                        <span class="sg-button__text">INC</span>\n' +document.querySelector("body > div.js-page-wrapper > div > nav > div.brn-moderation-panel__content.sg-box.sg-box--padding-m.sg-box--shadow.js-moderation-panel-content > div > div.sg-content-box__title > h3")
	    
            '                    </button>';
        document.getElementById("INCOMPLETE").addEventListener("click", function() {
            let textfield = document.querySelector("#private-messages-container > section.brn-messages__chatbox.brn-chatbox.js-chatbox > div > div:nth-child(4) > footer > div.sg-content-box.sg-content-box--spaced-top.js-chatbox-footer > div > div > div.sg-actions-list__hole.sg-actions-list__hole--grow > textarea")
            textfield.value = "Hey there! Brainly is all about giving students the tools they need to tackle future problems on their own, so it's important to always show your work. Your answers didn't contain enough explanation to follow our guidelines, so all of your answers have been removed. In the future, please be sure to elaborate and add more to your answers, such as full explanations, examples, and any information that can help our fellow Brainiacs. Thanks!"

        });

        topbar.appendChild(corrmsg)
        corrmsg.outerHTML = '<button id="CORRECTION" style="  margin-left: 4px; height:32px; font-size: 12px; top: 1px; background-color:rgb(251, 190, 46)"class="sg-button">\n' +
            '                        <span class="sg-button__text">COR</span>\n' +
            '                    </button>';
        document.getElementById("CORRECTION").addEventListener("click", function() {
            let textfield = document.querySelector("#private-messages-container > section.brn-messages__chatbox.brn-chatbox.js-chatbox > div > div:nth-child(4) > footer > div.sg-content-box.sg-content-box--spaced-top.js-chatbox-footer > div > div > div.sg-actions-list__hole.sg-actions-list__hole--grow > textarea")
            textfield.value = "Hi there! I'm a moderator here on Brainly and just wanted to send you a friendly reminder to check your notifications regarding the answer that we asked you to correct. Please remember that you can only edit it within the next 24 hours. Please do not respond to this message."

        });
    }



}

if (url.includes("message") === true) {
    async function f() {

        let promise = new Promise((resolve, reject) => {
            setTimeout(() => resolve(loadedmsg()), 1000)

        });

        let result = await promise; // wait until the promise resolves (*)

    }

    f();

}
function expire(modelx){
    var data = JSON.stringify({
        "model_id": modelx,
        "model_type_id": 1,
        "schema": ""
      });
      
      var xhr = new XMLHttpRequest();
      xhr.withCredentials = true;
      
      xhr.addEventListener("readystatechange", function() {
        if(this.readyState === 4) {
          
        }
      });
      function getCookie(cname) {
        let name = cname + "=";
        let decodedCookie = decodeURIComponent(document.cookie);
        let ca = decodedCookie.split(';');
        for (let i = 0; i < ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
    }

      token = getCookie("Zadanepl_cookie[Token][Long]")
      xhr.open("POST", "https://brainly.com/api/28/moderate_tickets/expire");
      xhr.setRequestHeader("authority", "brainly.com");
      xhr.setRequestHeader("sec-ch-ua", "\"Chromium\";v=\"94\", \"Google Chrome\";v=\"94\", \";Not A Brand\";v=\"99\"");
      xhr.setRequestHeader("sec-ch-ua-mobile", "?0");
      xhr.setRequestHeader("user-agent", "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.61 Safari/537.36");
      xhr.setRequestHeader("content-type", "application/json");
      xhr.setRequestHeader("x-b-token-long", String(token));
      xhr.setRequestHeader("accept", "text/plain, */*; q=0.01");
      xhr.setRequestHeader("x-requested-with", "XMLHttpRequest");
      xhr.setRequestHeader("sec-ch-ua-platform", "\"macOS\"");
      xhr.setRequestHeader("origin", "https://brainly.com");
      xhr.setRequestHeader("sec-fetch-site", "same-origin");
      xhr.setRequestHeader("sec-fetch-mode", "cors");
      xhr.setRequestHeader("sec-fetch-dest", "empty");
      xhr.setRequestHeader("referer", "https://brainly.com/question/"+modelx+"?answeringSource=feedPublic%2FhomePage%2F1");
      xhr.setRequestHeader("accept-language", "en-US,en;q=0.9");
      xhr.setRequestHeader("cookie", "_gcl_au=1.1.2102877201.1632589551; _ga=GA1.2.407199889.1632589551; _gid=GA1.2.2053091205.1632589551; _dlt=1; notice_behavior=implied,us; _hjid=1b581735-7fba-4927-ab75-8f52ccbf31ef; _fbp=fb.1.1632589551260.132509322; __qca=P0-1236078561-1632589551233; Zadanepl_cookie[Token][Guest]=XqVFLflPofaRY25ybZtHwP71qnWhQNPRfYI2hQzD3ZG9U6uXHGm97Iq9itwKopKX0EIY6KPOmjn19iKX; G_ENABLED_IDPS=google; G_AUTHUSER_H=0; _gaexp=GAX1.2.oczpohZYSbi759I8LVPtRA.18977.0u0021OmDk7RnSTuiRYAJpeorQZg.18976.2u0021AjtxuCidSe6-foSp9rjORw.18984.1; zadane_sid=b360c2d63773edde9c911f33ecdd48af; __utmc=153832555; __utmz=153832555.1632589645.1.1.utmcsr=(direct)|utmccn=(direct)|utmcmd=(none); notice_preferences=7:; notice_gdpr_prefs=0,1,2,3,4,5,6,7:; cmapi_gtm_bl=; cmapi_cookie_privacy=permit 1,2,3,4,5,6,7,8; ocean_session=1632590805378.cmfjhkdl; first_visit=1632590807; myHash=bd531c10aec027593c71ab0579b92272; Zadanepl_cookie[Token][Long]=Tdeo8DpAbkgjp7_k-AISxLZa4k0u0OcS1uYVZb0EKss%3D; Student_unpaid=True; Student=True; authHash=aab5705f25c3dd06b0ee7598db1bdaa5; cnx_userId=fa6b93f2ac1f41238c5c5cf726518e96; _pbjs_userid_consent_data=3524755945110770; _pubcid=efcca236-2d79-4885-9c86-fd31c79aaa97; __gads=ID=f02f96a8ef04d99a:T=1632628570:S=ALNI_Ma8lOHfUJkfZea6KwT4qeJVkOULLg; _lr_env_src_ats=false; panoramaId_expiry=1633233371014; _cc_id=e78ffe171e7dbdbb062659e75c4eca35; panoramaId=b40dc3f7b624307cd8ecbdb4e8e516d539381d96aba392df941d3dc1f66f4060; idl_env=AhTl2EurULac1fvOQXtBds02YYiS0sX1vyJo9zTytYYS5-hfr1kXCnnmi9q2wxLkWhHif2r8PxDp4e0W-NbuRKpwKKNeqj55wFF9; pbjs-unifiedid=%7B%22TDID%22%3A%225375acd5-7eb7-44d7-a041-8340c7834bd2%22%2C%22TDID_LOOKUP%22%3A%22TRUE%22%2C%22TDID_CREATED_AT%22%3A%222021-08-26T03%3A56%3A11%22%7D; _lr_geo_location=US; g_state={\"i_l\":0}; cto_bidid=9WqgOF9GJTJCclFKRTlJcDIxakdyT0hSTHloY29CTEEyUzFyVk9RV3BrOXBoWndpb2VLZ1Z3Y1p5WXJCY2E5MzY3SGd5QXVSU0RmTElrJTJGU3lKTFZSRFIyNklFNWN5cDYyeUFFJTJGODVaTXlGciUyRmJPWWI0JTNE; cto_bundle=MbtO0F9zeVIlMkJIT25KWE5KRXR3NkNrNURIeWtqUDglMkJ3c2RHZTFUY2lvZndnU2tza3VTQ0FSJTJGaTZqOGRjTDN0R01pMlg0N1QzZ1RkJTJCWCUyRkYxb0pPazhUeSUyRlprQjU5TSUyQmQ3Umtydkcwa0FMNEZkMEJLbWR0TWRXNlR6Y3JyZjVMVXFiMGZOa2h0eDhBRTJUa0JMdlFMJTJCdUJHTlJ3JTNEJTNE; _parrable_id=eid%253A01.1632634904.d5d6575084128779bbf79868d4c47e7a56e28a5149c3da20cc51834d995cdd30994ff10e61ee7a699248844ac5a94221eef2f46b1010dcd626c337c26292606d4acb9845e63cd0c7ac21%252Ctpc%253A0%252CtpcUntil%253A1632721304; viewer_uid=U0ZSSjdDM2JPOGd6ZkdiYUdoVWxxa3A4ZjlQY242blVad080TEVjOHRxND0tLVVSSUhVd25YOTIvUUZvNGlobHMwQXc9PQ%3D%3D--d2f9aba8de2109b9834aa813242e860b0b7bab83; __utma=153832555.407199889.1632589551.1632677003.1632681295.9; amplitude_id_710046ca554fe7c78d358b8c5e09a168brainly.com=eyJkZXZpY2VJZCI6ImUzMzIzNjBmLTk5NzctNDgwZS1hNzAyLTRhMWFlM2I0ZDQ4YlIiLCJ1c2VySWQiOm51bGwsIm9wdE91dCI6ZmFsc2UsInNlc3Npb25JZCI6MTYzMjY5MTI4MzQ3MSwibGFzdEV2ZW50VGltZSI6MTYzMjY5MTM5NjE5NiwiZXZlbnRJZCI6ODEsImlkZW50aWZ5SWQiOjAsInNlcXVlbmNlTnVtYmVyIjo4MX0=; _hjAbsoluteSessionInProgress=0; Zadanepl_cookie[isLoggedIn]=1; _hjIncludedInSessionSample=0; _dc_gtm_UA-43896087-1=1; datadome=Hec5N_hHE1fTGS_vS~sfSobpuHWNioe31iiBIb1WqumP_Of3q_N6~iGSJ~Tzn.t0EupVR4_Rx-tUo-OB-z9ofEGGPhS63y-WMdclvGd8rN");
      
      xhr.send(data);
}
function getMeta(metaName) {
    const metas = document.getElementsByTagName('meta');
  
    for (let i = 0; i < metas.length; i++) {
      if (metas[i].getAttribute('name') === metaName) {
        return metas[i].getAttribute('content');
      }
    }
  
    return '';
  }
  
  let fullobj = JSON.parse(getMeta('user_data'));
  let id = fullobj["id"]
  let user = fullobj["nick"]
  var xhr = new XMLHttpRequest();
  xhr.withCredentials = true;
  
  xhr.addEventListener("readystatechange", function() {
    if(this.readyState === 4) {
      let parsed = JSON.parse(String(this.responseText).replace("/*O_o*/","").replace("google.visualization.Query.setResponse(","").replace(");",""))
      console.log(parsed)
      let rows = parsed["table"]["rows"]
      localStorage.setItem("iteration","false")
      let cn = 0
      for (let i = 0; i < rows.length; i++) {
        cn += 1
        try {
            let all = rows[i]["c"][0]["f"]
            if (String(all) === String(id)){
                localStorage.setItem("iteration","true")
            }
        } catch(err){
            //pass
        }
        
	     
      }
      
      localStorage.setItem("ucount",cn)
      if (String(localStorage.getItem("iteration")) === "false"){
      	let div = document.createElement("div")
            div.innerHTML = '<div id="remove" class="sg-flash">\n'+
              '    <div class="sg-flash__message sg-flash__message--error">\n'+
              '      <div class="sg-text sg-text--bold sg-text--small sg-text--to-center">\n'+
              '          <strong>'+user+': </strong> You\'re not authorised to use this extension\n'+
              '      </div>\n'+
              '  </div></div>';
  
              document.querySelector("body > div.js-page-wrapper > div > div.brn-header-container.brn-header-container--has-sub-navigation > div.js-main-header.brn-header.js-react-header-next.js-ads-screening-header.js-ads-top-offset-element > div.flash-messages-container.js-flash-messages.js-flash-messages-container").appendChild(div)
              var style = document.createElement('style');
              style.innerHTML = ' .dropdown{display:none} .dropdownmod{display:none} .show{display:none} .more{display:none};';
              document.head.appendChild(style);
              document.getElementsByClassName("brn-moderation-panel__content sg-box sg-box--padding-m sg-box--shadow js-moderation-panel-content")[0].style.display = "none"
              document.querySelector("body > div.js-page-wrapper > div > nav > div.sg-content-box > div > div").style.display = "none"
	}
      
    }
  });
  
  xhr.open("GET", "https://docs.google.com/spreadsheets/d/1LqCyb30rVq5l1y39t53pdSFWKH1icQOnH07YaZxjmNg/gviz/tq?tqx=out:json");
  xhr.withCredentials = false;
  xhr.send();
function notes(){
    let root = document.documentElement;


    root.style.setProperty('--tablewidth', String(localStorage.getItem("noteswidth")) + "px");
    keys = Object.keys(localStorage)
    let i = keys.length;
    document.body.outerHTML = '<!DOCTYPE html>\n'+
                '<html>\n'+
                '<style>\n'+
                'table, th, td {\n'+
                '  border:1px solid black;\n'+
                '}\n'+
                '</style>\n'+
                '<body>\n'+
                '\n'+
                '\n'+
                '<table id="table" style="width:100%">\n'+
                '  <tr>\n'+
                '    <th><h1 class="sg-text-bit sg-text-bit--purple-primary sg-text--to-center" style="height: 10p;font-size: 30px;">User-ID</h1></th>\n'+
                '    <th><h1 class="sg-text-bit sg-text-bit--lavender-primary sg-text--to-center" style="font-size: 30px;">Note Text</h1></th>\n'+
                '    <th><h1 class="sg-text-bit sg-text-bit--peach-primary sg-text--to-center" style="font-size: 20px;">DELETE</h1></th>\n'+
                '\n'+
                '  </tr>\n'+
                
                '</table>\n'+
                '\n'+
                '\n'+
                '\n'+
                '</body>\n'+
                '</html>\n'+
                '\n'+
                '';
                
    while ( i-- ) {
        if (String(keys[i]).length >= 6 && String(keys[i]).length <= 9){
            if (parseInt(keys[i]) !== undefined && String(parseInt(keys[i])) !== "NaN"){
                let note = localStorage.getItem(keys[i])
                let user = keys[i]
                let row = document.createElement("tr")
                row.style.textAlign = "center"
                row.id="row"
                
                document.getElementById("table").appendChild(row)
                let data = document.createElement("td")
                data.className = "userId"
                data.innerHTML = user
                row.appendChild(data)
                let data2 = document.createElement("td")
                data2.innerHTML = note
                row.appendChild(data2)
                let remove = document.createElement("input")
                remove.className = "selremove"
                remove.type = "checkbox"
                row.appendChild(remove)
                
            }
            
        }
    }
    let actionsdiv = document.createElement("div")
    document.body.appendChild(actionsdiv)
    function fnExcelReport()
    {
        var tab_text="<table border='2px'><tr>";
        var textRange; var j=1;
        tab = document.getElementById('table'); // id of table

        for(j = 0 ; j < tab.rows.length ; j++) 
        {     
            tab_text=tab_text+tab.rows[j].innerHTML+"</tr>";
            tab_text = String(tab_text).replace('<th><h1 class="sg-text-bit sg-text-bit--peach-primary sg-text--to-center" style="font-size: 20px;">DELETE</h1></th>',"").replace("font-size: 30px;","")
        
            //tab_text=tab_text+"</tr>";
        }

        tab_text=tab_text+"</table>";
        tab_text= tab_text.replace(/<A[^>]*>|<\/A>/g, "");
        tab_text= tab_text.replace(/<img[^>]*>/gi,""); 
        //tab_text= tab_text.replace(/<input[^>]*>|<\/input>/gi, "");

        var ua = window.navigator.userAgent;
        var msie = ua.indexOf("MSIE "); 

        if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./))      // If Internet Explorer
        {
            txtArea1.document.open("txt/html","replace");
            txtArea1.document.write(tab_text);
            txtArea1.document.close();
            txtArea1.focus(); 
            sa=txtArea1.document.execCommand("SaveAs",true,"Notes");
        }  
        else                 //other browser not tested on IE 11
            sa = window.open('data:application/vnd.ms-excel,' + encodeURIComponent(tab_text));  

        return (sa);
    }
    let archive = document.createElement("button")
    actionsdiv.appendChild(archive)
    let fetchDeleted = document.createElement("button")
    actionsdiv.appendChild(fetchDeleted)
    


    fetchDeleted.outerHTML = ' <button id="fetch" style="margin-left:10px; float:left; background-color:#4FB3F6; color:white; font-weight:bold;" class="sg-text">Select Deleted Accounts</button>    '
    archive.outerHTML = ' <button id="sheets" style="margin-left:40%; float:left; background-color:#60d399; color:white; font-weight:bold;" class="sg-text">Download as XLS</button>    '
    document.getElementById("sheets").addEventListener("click",function(){
        fnExcelReport()
    })
    document.getElementById("fetch").addEventListener("click",function(){
        let ids = document.getElementsByClassName("userId")
        for (let i = 0; i < ids.length; i++) {
          function reqListener () {
              if (this.status === 410){
                  ids[i].style.backgroundColor = "#FBBE2E"
                  ids[i].parentElement.children[2].checked = true
              }
            }
        
            var oReq = new XMLHttpRequest();
            oReq.addEventListener("load", reqListener);
            oReq.open("GET", "https://brainly.com/profile/user-"+ids[i].innerText.replace("!","").replace("Deleted user",""));
            oReq.send();
        }    
    })
    let delbtn = document.createElement("button")
        actionsdiv.appendChild(delbtn)
                        delbtn.outerHTML = ' <button id="delete" style="margin-left:10px; float:left;" class="btn btn-mini btn-danger delete">Remove Selected</button>    '
        
                        let delbtnall = document.createElement("button")
        actionsdiv.appendChild(delbtnall)
        delbtnall.outerHTML = ' <button id="deleteall" style="margin-left:10px; float:left;" class="btn btn-mini btn-danger delete">Remove All</button>    '
    document.getElementById("deleteall").addEventListener("click",function(){
        let check = confirm("Are you sure?")
        if (check === true){
            let ids = document.getElementsByClassName("userId")
            let countnum = 0
            for (let i = 0; i < ids.length; i++) {
                localStorage.removeItem(ids[i].innerText)
                ids[i].parentElement.style.opacity = 0.5
                ids[i].parentElement.style.backgroundColor = "#ffc7bf"
                countnum += 1
            }
            alert(countnum+" notes removed.")
            countnum = 0
        }
    })
    document.getElementById("delete").addEventListener("click",function(){
        let check = confirm("Are you sure?")
        if (check === true){
            let notescheck = document.getElementsByClassName("selremove")
            let countnum = 0
            for (let i = 0; i < notescheck.length; i++) {
                if (notescheck[i].checked === true){
                    localStorage.removeItem(notescheck[i].parentElement.children[0].innerText)
                    notescheck[i].parentElement.style.opacity = 0.5
                    notescheck[i].parentElement.style.backgroundColor = "#ffc7bf"
                    countnum += 1
                }
                
            }
            alert(countnum+" notes removed.")
        }
    })
    }


let update = localStorage.getItem("newupdate")
if (String(update) === "true"){
    let div = document.createElement("div")
    div.innerHTML = '<div id="remove" class="sg-flash">\n'+
    '    <div class="sg-flash__message sg-flash__message">\n'+
    '      <div class="sg-text sg-text--bold sg-text--small sg-text--to-center">\n'+
    '          A new update is availiable. Please update the extension at chrome://extensions as soon as possible.'+
    '      </div>\n'+
    '  </div></div>';
    
    document.querySelector("body > div.js-page-wrapper > div > div.brn-header-container.brn-header-container--has-sub-navigation > div.js-main-header.brn-header.js-react-header-next.js-ads-screening-header.js-ads-top-offset-element > div.flash-messages-container.js-flash-messages.js-flash-messages-container").appendChild(div)
    document.getElementById("remove").addEventListener("click",function(){
        this.style.display = "none"
    }) 
}
function get(modal){

    var url = "https://brainly.com/api/28/moderation_new/get_content";

    var xhr = new XMLHttpRequest();
    xhr.open("POST", url);



    xhr.onreadystatechange = function () {
       if (xhr.readyState === 4) {
          console.log(xhr.status);
          console.log(xhr.responseText);
       }};

    var data = '{"model_id":'+modal+',"model_type_id":1,"schema":"moderation.content.result.res"}';

    xhr.send(data);


    var xhr = new XMLHttpRequest();
    xhr.open("POST", url);

    xhr.setRequestHeader("authority", "brainly.com");

    xhr.setRequestHeader("sec-ch-ua-mobile", "?0");
    xhr.setRequestHeader("user-agent", "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/93.0.4577.63 Safari/537.36");
    xhr.setRequestHeader("content-type", "application/json");
    xhr.setRequestHeader("x-b-token-long", "C96T745-hKfqcELexqyCeadxcN9wMd_oOixPq9HUlCo=");
    xhr.setRequestHeader("accept", "text/plain, */*; q=0.01");
    xhr.setRequestHeader("x-requested-with", "XMLHttpRequest");

    xhr.setRequestHeader("origin", "https://brainly.com");
    xhr.setRequestHeader("sec-fetch-site", "same-origin");
    xhr.setRequestHeader("sec-fetch-mode", "cors");
    xhr.setRequestHeader("sec-fetch-dest", "empty");
    xhr.setRequestHeader("referer", "https://brainly.com/question/"+modal+"?answeringSource=feedPublic%2FhomePage%2F1");
    xhr.setRequestHeader("accept-language", "en-US,en;q=0.9");


    xhr.onreadystatechange = function () {
       if (xhr.readyState === 4) {
          console.log(xhr.status);
          const resp = JSON.parse(xhr.responseText)
          if (String(resp["message"]) === "Ticket is already reserved for another moderator"){
            
            let div = document.createElement("div")
            div.innerHTML = '<div id="remove" class="sg-flash">\n'+
            '    <div class="sg-flash__message sg-flash__message">\n'+
            '      <div class="sg-text sg-text--bold sg-text--small sg-text--to-center">\n'+
            '          Ticket is reserved.\n'+
            '      </div>\n'+
            '  </div></div>';
            
            document.querySelector("body > div.js-page-wrapper > div > div.brn-header-container.brn-header-container--has-sub-navigation > div.js-main-header.brn-header.js-react-header-next.js-ads-screening-header.js-ads-top-offset-element > div.flash-messages-container.js-flash-messages.js-flash-messages-container").appendChild(div)
            }
          let parsed = JSON.parse(xhr.responseText);
          console.log(parsed)
          let responses = parsed["data"]["responses"]
          console.log(responses)
          let questionid = parsed["data"]["task"]["id"]
          let pointsforanswering = parsed["data"]["task"]["points"]["ptsForResp"]
          let allsubjects = {"1":{"id":"1","name":"English","icon":{"ldpi":"/img/subject_icons/en-us/ldpi/literature.png","mdpi":"/img/subject_icons/en-us/mdpi/literature.png","hdpi":"/img/subject_icons/en-us/hdpi/literature.png","browser":"/img/subject_icons/en-us/browser/literature.png"},"enabled":true,"slug":"english","best_in_name":"","solved":0},"2":{"id":"2","name":"Mathematics","icon":{"ldpi":"/img/subject_icons/en-us/ldpi/mathematics.png","mdpi":"/img/subject_icons/en-us/mdpi/mathematics.png","hdpi":"/img/subject_icons/en-us/hdpi/mathematics.png","browser":"/img/subject_icons/en-us/browser/mathematics.png"},"enabled":true,"slug":"mathematics","best_in_name":"","solved":0},"3":{"id":"3","name":"Social Studies","icon":{"ldpi":"/img/subject_icons/en-us/ldpi/sociology.png","mdpi":"/img/subject_icons/en-us/mdpi/sociology.png","hdpi":"/img/subject_icons/en-us/hdpi/sociology.png","browser":"/img/subject_icons/en-us/browser/sociology.png"},"enabled":true,"slug":"social_studies","best_in_name":"","solved":0},"4":{"id":"4","name":"Business","icon":{"ldpi":"/img/subject_icons/en-us/ldpi/business.png","mdpi":"/img/subject_icons/en-us/mdpi/business.png","hdpi":"/img/subject_icons/en-us/hdpi/business.png","browser":"/img/subject_icons/en-us/browser/business.png"},"enabled":true,"slug":"business","best_in_name":"","solved":0},"5":{"id":"5","name":"History","icon":{"ldpi":"/img/subject_icons/en-us/ldpi/history.png","mdpi":"/img/subject_icons/en-us/mdpi/history.png","hdpi":"/img/subject_icons/en-us/hdpi/history.png","browser":"/img/subject_icons/en-us/browser/history.png"},"enabled":true,"slug":"history","best_in_name":"","solved":0},"6":{"id":"6","name":"Health","icon":{"ldpi":"/img/subject_icons/en-us/ldpi/health.png","mdpi":"/img/subject_icons/en-us/mdpi/health.png","hdpi":"/img/subject_icons/en-us/hdpi/health.png","browser":"/img/subject_icons/en-us/browser/health.png"},"enabled":true,"slug":"health","best_in_name":"","solved":0},"7":{"id":"7","name":"Geography","icon":{"ldpi":"/img/subject_icons/en-us/ldpi/geography.png","mdpi":"/img/subject_icons/en-us/mdpi/geography.png","hdpi":"/img/subject_icons/en-us/hdpi/geography.png","browser":"/img/subject_icons/en-us/browser/geography.png"},"enabled":true,"slug":"geography","best_in_name":"","solved":0},"8":{"id":"8","name":"Biology","icon":{"ldpi":"/img/subject_icons/en-us/ldpi/biology.png","mdpi":"/img/subject_icons/en-us/mdpi/biology.png","hdpi":"/img/subject_icons/en-us/hdpi/biology.png","browser":"/img/subject_icons/en-us/browser/biology.png"},"enabled":true,"slug":"biology","best_in_name":"","solved":0},"15":{"id":"15","name":"Physics","icon":{"ldpi":"/img/subject_icons/en-us/ldpi/physics.png","mdpi":"/img/subject_icons/en-us/mdpi/physics.png","hdpi":"/img/subject_icons/en-us/hdpi/physics.png","browser":"/img/subject_icons/en-us/browser/physics.png"},"enabled":true,"slug":"physics","best_in_name":"","solved":0},"18":{"id":"18","name":"Chemistry","icon":{"ldpi":"/img/subject_icons/en-us/ldpi/chemistry.png","mdpi":"/img/subject_icons/en-us/mdpi/chemistry.png","hdpi":"/img/subject_icons/en-us/hdpi/chemistry.png","browser":"/img/subject_icons/en-us/browser/chemistry.png"},"enabled":true,"slug":"chemistry","best_in_name":"","solved":0},"19":{"id":"19","name":"Computers and Technology","icon":{"ldpi":"/img/subject_icons/en-us/ldpi/informatics.png","mdpi":"/img/subject_icons/en-us/mdpi/informatics.png","hdpi":"/img/subject_icons/en-us/hdpi/informatics.png","browser":"/img/subject_icons/en-us/browser/informatics.png"},"enabled":true,"slug":"computers_and_technology","best_in_name":"","solved":0},"21":{"id":"21","name":"Arts","icon":{"ldpi":"/img/subject_icons/en-us/ldpi/artmusic.png","mdpi":"/img/subject_icons/en-us/mdpi/artmusic.png","hdpi":"/img/subject_icons/en-us/hdpi/artmusic.png","browser":"/img/subject_icons/en-us/browser/artmusic.png"},"enabled":true,"slug":"arts","best_in_name":"","solved":0},"22":{"id":"22","name":"World Languages","icon":{"ldpi":"/img/subject_icons/en-us/ldpi/otherlanguages.png","mdpi":"/img/subject_icons/en-us/mdpi/otherlanguages.png","hdpi":"/img/subject_icons/en-us/hdpi/otherlanguages.png","browser":"/img/subject_icons/en-us/browser/otherlanguages.png"},"enabled":true,"slug":"world_languages","best_in_name":"","solved":0},"28":{"id":"28","name":"Spanish","icon":{"ldpi":"/img/subject_icons/en-us/ldpi/spanish.png","mdpi":"/img/subject_icons/en-us/mdpi/spanish.png","hdpi":"/img/subject_icons/en-us/hdpi/spanish.png","browser":"/img/subject_icons/en-us/browser/spanish.png"},"enabled":true,"slug":"spanish","best_in_name":"","solved":0},"29":{"id":"29","name":"French","icon":{"ldpi":"/img/subject_icons/en-us/ldpi/french.png","mdpi":"/img/subject_icons/en-us/mdpi/french.png","hdpi":"/img/subject_icons/en-us/hdpi/french.png","browser":"/img/subject_icons/en-us/browser/french.png"},"enabled":true,"slug":"french","best_in_name":"","solved":0},"30":{"id":"30","name":"German","icon":{"ldpi":"/img/subject_icons/en-us/ldpi/german.png","mdpi":"/img/subject_icons/en-us/mdpi/german.png","hdpi":"/img/subject_icons/en-us/hdpi/german.png","browser":"/img/subject_icons/en-us/browser/german.png"},"enabled":true,"slug":"german","best_in_name":"","solved":0},"31":{"id":"31","name":"Advanced Placement (AP)","icon":{"ldpi":"/img/subject_icons/en-us/ldpi/pedagogics.png","mdpi":"/img/subject_icons/en-us/mdpi/pedagogics.png","hdpi":"/img/subject_icons/en-us/hdpi/pedagogics.png","browser":"/img/subject_icons/en-us/browser/pedagogics.png"},"enabled":true,"slug":"advanced_placement_ap_","best_in_name":"Advanced Placement (AP)","solved":0},"32":{"id":"32","name":"SAT","icon":{"ldpi":"/img/subject_icons/en-us/ldpi/egzam.png","mdpi":"/img/subject_icons/en-us/mdpi/egzam.png","hdpi":"/img/subject_icons/en-us/hdpi/egzam.png","browser":"/img/subject_icons/en-us/browser/egzam.png"},"enabled":true,"slug":"sat","best_in_name":"SAT","solved":0},"33":{"id":"33","name":"Medicine","icon":{"ldpi":"/img/subject_icons/en-us/ldpi/first-aid.png","mdpi":"/img/subject_icons/en-us/mdpi/first-aid.png","hdpi":"/img/subject_icons/en-us/hdpi/first-aid.png","browser":"/img/subject_icons/en-us/browser/first-aid.png"},"enabled":true,"slug":"medicine","best_in_name":"Medicine","solved":0},"34":{"id":"34","name":"Law","icon":{"ldpi":"/img/subject_icons/en-us/ldpi/law.png","mdpi":"/img/subject_icons/en-us/mdpi/law.png","hdpi":"/img/subject_icons/en-us/hdpi/law.png","browser":"/img/subject_icons/en-us/browser/law.png"},"enabled":true,"slug":"law","best_in_name":"Law","solved":0},"35":{"id":"35","name":"Engineering","icon":{"ldpi":"/img/subject_icons/en-us/ldpi/technology.png","mdpi":"/img/subject_icons/en-us/mdpi/technology.png","hdpi":"/img/subject_icons/en-us/hdpi/technology.png","browser":"/img/subject_icons/en-us/browser/technology.png"},"enabled":true,"slug":"engineering","best_in_name":"Engineering","solved":0}}
          let subjectname = allsubjects[parseInt(parsed["data"]["task"]["subject_id"])]["name"]
          let content =  parsed["data"]["task"]["content"]
          try{
            let ans1content =  parsed["data"]["responses"][0]["content"]
          } catch(err) {
            let ans1content =  "none"
          }
          let count = responses.length
          let asker = parsed["users_data"][1]["nick"]
          let answerer1 = null
          let answerer1id = null
          try{
             answerer1 = parsed["users_data"][2]["nick"]
             answerer1id = parsed["users_data"][2]["id"]
          } catch(err){
              answerer1 = "user"
              answerer1id = "id"
          }
          let attatchments = parsed["data"]["task"]["attachments"]
          let askerid = parsed["users_data"][1]["id"]
          
          let askerank = null
          let askerrankcolor = null
          let answerer1rank = null
          let answerer1rankcolor = null
          try {
             askerank = parsed["users_data"][1]["ranks"]["names"][0]
             askerrankcolor = parsed["users_data"][1]["ranks"]["color"]
          } catch(err){
             askerank = "No Rank"
             askerrankcolor = "black"
          }
          try {
             answerer1rank = parsed["users_data"][2]["ranks"]["names"][0]
             answerer1rankcolor = parsed["users_data"][2]["ranks"]["color"]
          } catch(err){
             answerer1rank = "No Rank"
             answerer1rankcolor = "black"
          }
          
          
          
          let allgrades = {"2":{"id":"2","name":"Middle School","icon":{"ldpi":"/img/grade_icons/en-us/ldpi/lvl2.png","mdpi":"/img/grade_icons/en-us/mdpi/lvl2.png","hdpi":"/img/grade_icons/en-us/hdpi/lvl2.png","browser":"/img/grade_icons/en-us/browser/lvl2.png"},"filter_name":"Middle","slug":"middle_school"},"5":{"id":"5","name":"High School","icon":{"ldpi":"/img/grade_icons/en-us/ldpi/lvl3.png","mdpi":"/img/grade_icons/en-us/mdpi/lvl3.png","hdpi":"/img/grade_icons/en-us/hdpi/lvl3.png","browser":"/img/grade_icons/en-us/browser/lvl3.png"},"filter_name":"High","slug":"high_school"},"6":{"id":"6","name":"College","icon":{"ldpi":"/img/grade_icons/en-us/ldpi/lvl4.png","mdpi":"/img/grade_icons/en-us/mdpi/lvl4.png","hdpi":"/img/grade_icons/en-us/hdpi/lvl4.png","browser":"/img/grade_icons/en-us/browser/lvl4.png"},"filter_name":"College","slug":"college"}}
          let questiongrade = allgrades[parseInt(parsed["data"]["task"]["grade_id"])]["name"]
          
          let timeasked = new Date(String(parsed["data"]["task"]["created"]))
          let millipast = Date.now() - timeasked
          let askedago = "x minutes ago"
          let seconds = Math.floor(millipast / 1000);
          var minutes = Math.floor(millipast / 60000);
          var hours = Math.floor((millipast / (1000 * 60 * 60)) % 24);
          var days = parseInt(Math.floor(hours / 24));
          var months = parseInt(Math.floor(days / 365));
          var years = parseInt(Math.floor(months / 12));

          console.log(days)
          if (seconds < 60 && seconds > 0){
            if (seconds === 1){
                askedago = seconds+" second ago"
            } else {
                askedago = seconds+" seconds ago"
            }
          } else if (minutes < 60 && minutes > 0){
            if (minutes === 1){
                askedago = minutes+" minute ago"
            } else {
                askedago = minutes+" minutes ago"
            }
            
          } else if (hours < 24 && hours > 0){
            if (hours === 1){
                askedago = hours+" hour ago"
            } else {
                askedago = hours+" hours ago"
            }
            
          } else if (days > 0 && days < 30){
            if (days === 1){
                askedago = days+" day ago"
            } else {
                askedago = days+" days ago"
            }
          } else if (months > 0 && months < 12){
            if (months === 1){
                askedago = months+" month ago"
            } else {
                askedago = months+" months ago"
            }
          } else if (years > 0){
            if (years === 1){
                askedago = years+" year ago"
            } else {
                askedago = years+" years ago"
            }
          } else {
              askedago = "error fetching date"
          }

          console.log(askedago)
          let avatarasker = null
          try {
            
            avatarasker = parsed["users_data"][1]["avatar"]["64"]
          } catch(err){
            avatarasker = "https://brainly.com/img/avatars/100-ON.png"
          }
          
        
          

          
          function getLongString(count) {
            
                return `<div class="sg-toplayer sg-toplayer--modal sg-toplayer--large" style="position: fixed;top: 80px;left: 35%;right: 60%;"><div class="sg-toplayer__close"><div class="sg-icon sg-icon--gray-secondary sg-icon--x24"><svg class="sg-icon__svg"><use xlink:href="#icon-close"></use></svg></div></div><div class="sg-toplayer__wrapper"><div class="sg-flex sg-flex--column"><div class="sg-flex sg-flex--justify-content-space-between sg-flex--wrap sg-flex--margin-top-s sg-flex--margin-bottom-m"><div class="sg-text sg-text--large sg-text--gray sg-text--extra-bold">Question Moderation</div><div class="sg-flex sg-flex--align-items-center sg-flex--margin-right-s"><div class="sg-label sg-label--transparent-color"><div class="sg-label__icon"><div class="sg-icon sg-icon--peach sg-icon--x16"><svg class="sg-icon__svg"><use xlink:href="#icon-counter"></use></svg></div></div><span class="sg-label__text"><div class="sg-text sg-text--small sg-text--peach-dark sg-text--bold sg-text--no-wrap">14:47</div></span></div><div class="sg-flex"><button class="sg-button sg-button--s sg-button--transparent sg-button--icon-only sg-button--transparent-toggle-blue"><span class="sg-button__icon sg-button__icon--s"><div class="sg-icon sg-icon--adaptive"><svg class="sg-icon__svg"><use xlink:href="#icon-add_more"></use></svg></div></span><span class="sg-button__text"></span></button></div></div></div><div class="sg-flex"><div class="sg-flex sg-flex--full-width sg-flex--column"><div class="sg-flex sg-flex--margin-bottom-xs sg-flex--margin-left-s"><a class="sg-text sg-text--peach-dark sg-text--bold sg-text--link" target="_blank" href="https://brainly.com/question/`+questionid+`">#`+questionid+`</a></div><div class="sg-flex sg-flex--full-width sg-flex--column"><div class="sg-box sg-box--padding-xs sg-box--border sg-box--border-color-gray-secondary-lightest"><div class="sg-flex"><div class="sg-box sg-box--padding-xs"><div class="sg-flex sg-flex--column"><div class="sg-flex sg-flex--column sg-flex--grow"><div class="sg-flex sg-flex--wrap sg-flex--margin-bottom-s"><div class="sg-flex sg-flex--grow"><div class="sg-flex"><div class="sg-avatar"><a href="https://brainly.com/profile/`+asker+`-`+askerid+`"><div class="sg-avatar"><a href="https://brainly.com/profile/makakakak37273-22051671"><img class="sg-avatar__image" src="`+avatarasker+`"></a></div></a></div></div><div class="sg-flex sg-flex--column sg-flex--margin-left-s"><div class="sg-flex"><ul class="sg-breadcrumb-list"><li class="sg-breadcrumb-list__element"><a class="sg-text sg-text--small sg-text--bold sg-text--link" target="_blank" href="https://brainly.com/profile/`+asker+`-`+askerid+`">`+asker+`</a></li><li class="sg-breadcrumb-list__element"><span class="sg-text sg-text--small" style="color: `+askerrankcolor+`">`+askerank+`</span></li></ul></div><div class="sg-flex"><ul class="sg-breadcrumb-list"><li class="sg-breadcrumb-list__element"><span class="sg-text sg-text--xsmall sg-text--gray-secondary">`+askedago+`</span></li><li class="sg-breadcrumb-list__element"><span class="sg-text sg-text--xsmall sg-text--gray-secondary">`+subjectname+`</span></li><li class="sg-breadcrumb-list__element"><span class="sg-text sg-text--xsmall sg-text--gray-secondary">`+questiongrade+`</span></li></ul></div></div></div><div class="sg-flex sg-flex--align-items-center sg-flex--justify-content-flex-end sg-flex--wrap sg-flex--grow"><div class="sg-flex sg-flex--margin-left-xs"><div class="sg-counter sg-counter--with-icon"><div class="sg-flex sg-counter__icon-container"><div class="sg-icon sg-icon--dark sg-icon--x24 sg-counter__icon"><svg class="sg-icon__svg"><use xlink:href="#icon-points"></use></svg></div></div><div class="sg-flex sg-flex--align-items-center"><span class="sg-text sg-text--small sg-text--bold sg-text--no-wrap sg-counter__text">+`+pointsforanswering+` <span class="sg-text sg-text--small sg-text--gray-secondary sg-text--bold">pts</span></span></div></div></div></div></div><div class="sg-flex sg-flex--column sg-flex--margin-bottom-s"><div class="sg-text sg-text--break-words">
`+content+`</div></div></div><div class="sg-flex sg-flex--justify-content-space-between sg-flex--wrap"><div class="sg-flex sg-flex--wrap"><div class="sg-flex sg-flex--margin-top-xxs sg-flex--margin-bottom-xxs sg-flex--margin-left-xxs sg-flex--relative sg-flex--margin-right-xs"><button style="fill:white"; class="sg-button sg-button--outline sg-button--icon-only sg-button--outline-toggle-peach sg-button--outline-white" title="See more deletion options"><span class="sg-button__icon"><div class="sg-icon sg-icon--adaptive omenu" id="openmenu"><svg style="fill:white" class="sg-icon__svg"><use xlink:href="#icon-trash"></use></svg></div></span><span class="sg-button__text"></span></button></div></div><div class="sg-flex sg-flex--justify-content-flex-end sg-flex--wrap sg-flex--grow"></div></div><div class="actions">
<span class="subcategories question line pull-left" >
<input type="button" class="btn btn-mini sub-1" value="Too Many Questions " placeholder="Whoa there! Turns out there can be too much of a good thing. Your questions are great, but there are just too many rolled into one. Please post your questions individually to make sure other users can get the opportunity to help you. Thanks! For more information on what makes a great question, check out our Content Guidelines: https://faq.brainly.com/hc/en-us/articles/360014661139">
<input type="button" class="btn btn-mini sub-1" value="Link in Question" placeholder="Your question has been removed because it contained a link to a website other than Brainly. Please keep in mind that links to outside sites or sources are not allowed. Thanks for keeping Brainly safe! For more information on what makes a great question, check out our Content Guidelines: https://faq.brainly.com/hc/en-us/articles/360014661139">
<input type="button" class="btn btn-mini sub-1" value="Essay or Project" placeholder="Your question has been removed because it was too complex. You'll need to complete this project on your own rather than asking other Brainly users to do it for you. If you have any specific questions about the assignment that could help you get started, feel free to post those instead!">
<input type="button" class="btn btn-mini sub-1" value="Too Trivial" placeholder="Your question has been removed because it seems a bit too simple for other Brainly users to help with. This question can be solved with common knowledge or some help from a calculator. Other users won't be able to help you understand the problem by solving it for you. Please help keep the quality of Brainly high by posting some more challenging questions. Thanks!">
<input type="button" class="btn btn-mini sub-1" value="Brainly-Related Question" placeholder="It looks like you've asked a question about how to use Brainly! Since Brainly is only intended for help with school-related questions, we had to remove this one. Instead, check out our help site to see if your question has been answered here: faq.brainly.com. If you still need help, send us a message at https://brainly.com/contact/index and we'll get back to you soon!">
<input type="button" class="btn btn-mini sub-1" value="Wrong Subject" placeholder="Whoops! It looks like you've posted your question under the wrong subject. If your question is in the wrong category, it may not be seen by a user who could help! Please repost your question under the correct subject so you can get the answer you need. If you can't find the specific class that you need help in, pick the subject that is most closely related. Thanks!">
<input type="button" class="btn btn-mini sub-1" value="Not a School Problem " placeholder="Whoops! It looks like your question was not part of an academic assignment. Since Brainly is only intended for homework questions, we had to remove it. Please keep the question feed clear of personal questions so other users can get the help they need. Thanks!">
</span>
<span class="subcategories question line pull-left" >
                                                        <input type="button" class="btn btn-mini sub-22" value="Default" placeholder="Your question violates our Community Guidelines, so we had to take it down. Please review the guidelines here: https://faq.brainly.com/hc/en-us/articles/360014661139. Thanks for being a team player!">
                                                        <input type="button" class="btn btn-mini sub-22" value="Not English" placeholder="Hi! Hola! Salut! Hallo! It looks like you've posted a question in a language other than English. Please be sure to select &quot;World Languages&quot; when asking your question. Otherwise, if you live outside the United States or want to use Brainly in a different language, check out the other language versions of Brainly here: https://faq.brainly.com/hc/en-us/articles/115001185650-How-do-I-use-Brainly-in-a-different-language-">
                                                        <input type="button" class="btn btn-mini sub-22" value="Multiple Posting" placeholder="Whoops! It looks like this question has already been asked on Brainly. To ensure all questions get answered in a timely matter, we had to remove this duplicate question. Make sure to use the search bar to see if your question has already been answered before posting a new one. Thanks!">
                                                        <input type="button" class="btn btn-mini sub-22" value="Inappropriate Content" placeholder="Your question has been removed because it violates Brainly's Community Guidelines. This should be a safe and respectful learning environment for every student. That being said, we have a zero-tolerance policy for inappropriate subjects such as swear words or explicit content. If you continue to post those on Brainly, your account will be deleted. Please review our Community Guidelines to keep Brainly safe and stay out of trouble: https://brainly.com/our-policies/community-guidelines.">
                                                        <input type="button" class="btn btn-mini sub-22" value="Personal Information" placeholder="Your question has been removed because it’s not safe to share or ask for personal information online. Keep information like your real name, school name, address, and social media usernames to yourself!">
                                                        <input type="button" class="btn btn-mini sub-22" value="Self Harm" placeholder="We had to remove your question because it was not school-related. More importantly, we're concerned about the content you are posting about wanting to hurt yourself, and we want to encourage you to seek help.

We recommend that you talk to a parent or other adult you trust about how you're feeling. If you'd prefer to get help from someone else, you can use the following resources to be connected with a trained staff member from a prevention service provider in your area:

National Phone Hotline: 1-800-273-TALK
Crisis Text Line: http://www.crisistextline.org/
Safety on Brainly: https://faq.brainly.com/hc/en-us/articles/360013472580-Safety-on-Brainly-">
                                                </span>
                                                <span class="subcategories question line pull-left" >
                                                        <input type="button" class="btn btn-mini sub-36" value="Unclear Question" placeholder="Uh oh! It looks like your question is unclear or a bit confusing. Please double-check your assignment and make sure you have all the parts of the question and any details needed to solve it. For more information on what makes a great question, check out our Question Guidelines: https://faq.brainly.com/hc/en-us/articles/360011452800-Question-Guidelines.">
                                                        <input type="button" class="btn btn-mini sub-36" value="Unclear Attachment" placeholder="We love a good puzzle, but your attachment is unreadable! Please retake the photo and repost your question. Make sure the photo is clear and no parts of the question are cut off. For more information on what you can attach to your questions, check out this link: https://faq.brainly.com/hc/en-us/articles/360014748820">
                                                        <input type="button" class="btn btn-mini sub-36" value="Too General " placeholder="Uh oh! It looks like your question is a bit too vague for other students to answer. Brainly is designed to give answers to specific homework questions. Rather than asking about a general topic, try to narrow your question down to one academic problem. Thanks!">
                                                        <input type="button" class="btn btn-mini sub-36" value="Incomplete Question " placeholder="Uh oh! It looks like your question is missing some crucial information. Please repost it with any helpful information such as diagrams, excerpts, or answer choices needed to solve it. For more information on what makes a great question, check out our Question Guidelines: https://faq.brainly.com/hc/en-us/articles/360011452800-Question-Guidelines.">
                                                </span>
                                                <span class="subcategories question line pull-left" >
                                                        <input type="button" class="btn btn-mini sub-37" value="Content from Another Source" placeholder="Your question has been removed because plagiarism is serious business. Posting content from another website, person, or source without permission is strictly forbidden. Check out our article on academic integrity for more information: https://faq.brainly.com/hc/en-us/articles/360011207279-Academic-Integrity.">
                                                        <input type="button" class="btn btn-mini sub-37" value="Content Prohibited" placeholder="Your question has been removed due to a violation of our Honor Code. Brainly has a zero-tolerance policy for academic dishonesty. Questions taken from assessments, exams, or quizzes are not permitted. Thanks for your cooperation! For more information on this policy, check out our honor code: https://faq.brainly.com/hc/en-us/articles/360011207279-Academic-Integrity.">
                                                </span>
                                                <textarea class="text-reason question" placeholder="Write additional information for users"></textarea>
                       
                                                <p>
        <label class="pull-left fine fineq"><input type="checkbox" class="take-answerers-points question" checked="checked"><span class="question"> take back respondent's points</span></label>
        <label class="pull-left fine fineq"><input type="checkbox" class="dont-return-points question "><span class="question"> take away asker's points</span></label>
        <label class="pull-left fine fineq"><input type="checkbox" class="give-warning question"><span class="question"> warn user</span></label>

       
        <button class="proceed question btn btn-warning btn-mini">Confirm</button>
        </div></div></div></div></div></div><div class="sg-horizontal-separator sg-horizontal-separator--spaced"></div>

     
        
            
</div>
</div></div>`
            
            
            
          }
          let ticketcontent = getLongString(count)
          //let ticketcontent = ("<div class='sg-flex sg-flex--margin-top-m sg-flex--margin-right-m sg-flex--margin-bottom-l sg-flex--margin-left-m'><strong> <p> "+parsed["data"]["task"]["points"]["ptsForResp"]+" pts + "+parsed["data"]["task"]["points"]["ptsForBest"]+" for brainliest</p></strong><br></br>"+parsed["data"]["task"]["created"] + " <strong><br></br>" + parsed["users_data"][1].nick  +" </strong><p><br></br>" +  " "+parsed["data"]["task"]["content"]+" </p></div>")
          let model = document.createElement("div")
          try{
            document.querySelector("body > div.js-page-wrapper > div > div.sg-flex.sg-flex--column.js-feed > div.sg-layout").style.opacity = "0.2"
     
          } catch(err){
              document.getElementById("question-sg-layout-container").style.opacity = "0.2"
          }
          
          
          
          document.getElementsByClassName("sg-layout")[0].appendChild(model) 
          model.style.backgroundColor = "white"
          
          model.innerHTML = ticketcontent
	  let closes = document.getElementsByClassName("sg-toplayer__close")
          for (let i = 0; i < closes.length; i++) {
		  closes[i].addEventListener("click",function(){
              expire(modal)
              this.parentElement.style.display = "none"
              try{
                document.querySelector("body > div.js-page-wrapper > div > div.sg-flex.sg-flex--column.js-feed > div.sg-layout").style.opacity = "1"
         
              } catch(err){
                  document.getElementById("question-sg-layout-container").style.opacity = "1"
              }
          })
		}
	  
          
            let sub = document.getElementsByClassName("subcategories question")
            
            let fine = document.getElementsByClassName("fineq")
            let lilboxes = document.getElementsByClassName("question")
            let textrsnx = document.getElementsByClassName("text-reason question")
            let prcd = document.getElementsByClassName("proceed question")
            for (let i = 0; i < lilboxes.length; i++) {
                lilboxes[i].style.display = "none"
              }
            for (let i = 0; i < sub.length; i++) {
                sub[i].style.display = "none"
              }
            for (let i = 0; i < fine.length; i++) {
                fine[i].style.display = "none"
              }
            for (let i = 0; i < textrsnx.length; i++) {
                textrsnx[i].style.display = "none"
              }
            for (let i = 0; i < prcd.length; i++) {
                prcd[i].style.display = "none"
              }
              
        if (count > 0){
            for (let i = 0; i < count; i++) {
                
                let answerele = document.createElement("div")
                document.getElementsByClassName("sg-toplayer__wrapper")[0].appendChild(answerele)
                function getanswererdata(it, responseit){
                    let answerid = parsed["data"]["responses"][responseit]["id"]
                    let answerernick = parsed["users_data"][it]["nick"]
                    let answererid = parsed["users_data"][it]["id"]
                    let anscontent =  parsed["data"]["responses"][responseit]["content"]
                    let ansrank = parsed["users_data"][it]["ranks"]["names"][0]
                    let ansrankcolor = parsed["users_data"][it]["ranks"]["color"]
                    let ansavatar = null
                    try {
                        
                        ansavatar = parsed["users_data"][it]["avatar"]["64"]
                    } catch(err){
                        ansavatar = "https://brainly.com/img/avatars/100-ON.png"
                    }
                    let timeasked = new Date(String(parsed["data"]["responses"][responseit]["created"]))
                    let millipastans = Date.now() - timeasked
                    let askedagoans = "x minutes ago"
                    let secondsans = Math.floor(millipastans / 1000);
                    var minutesans = Math.floor(millipastans / 60000);
                    var hoursans = Math.floor((millipastans / (1000 * 60 * 60)) % 24);
                    var daysans = parseInt(Math.floor(hoursans / 24));
                    var monthsans = parseInt(Math.floor(daysans / 365));
                    var yearsans = parseInt(Math.floor(monthsans / 12));

                    
                    if (secondsans < 60 && secondsans > 0){
                        if (secondsans === 1){
                            askedagoans = secondsans+" second ago"
                        } else {
                            askedagoans = secondsans+" seconds ago"
                        }
                    } else if (minutesans < 60 && minutesans > 0){
                        if (minutesans === 1){
                            askedagoans = minutesans+" minute ago"
                        } else {
                            askedagoans = minutesans+" minutes ago"
                        }
                        
                    } else if (hoursans < 24 && hoursans > 0){
                        if (hoursans === 1){
                            askedagoans = hoursans+" hour ago"
                        } else {
                            askedagoans = hoursans+" hours ago"
                        }
                        
                    } else if (daysans > 0 && daysans < 30){
                        if (daysans === 1){
                            askedagoans = daysans+" day ago"
                        } else {
                            askedagoans = daysans+" days ago"
                        }
                    } else if (monthsans > 0 && monthsans < 12){
                        if (monthsans === 1){
                            askedagoans = monthsans+" month ago"
                        } else {
                            askedagoans = monthsans+" months ago"
                        }
                    } else if (yearsans > 0){
                        if (yearsans === 1){
                            askedagoans = yearsans+" year ago"
                        } else {
                            askedagoans = yearsans+" years ago"
                        }
                    } else {
                        askedagoans = "error fetching date"
                    }
                    answerele.outerHTML = `<div style="margin-top:15px;" id="`+answerid+`" class="sg-flex sg-flex--full-width sg-flex--column"><div class="sg-box sg-box--padding-xs sg-box--border sg-box--border-color-gray-secondary-lightest"><div class="sg-flex"><div class="sg-box sg-box--padding-xs"><div class="sg-flex sg-flex--column"><div class="sg-flex sg-flex--column sg-flex--grow"><div class="sg-flex sg-flex--wrap sg-flex--margin-bottom-s"><div class="sg-flex sg-flex--grow"><div class="sg-flex"><div class="sg-avatar"><a href="https://brainly.com/profile/`+answerernick+`-`+answererid+`"><div class="sg-avatar__image sg-avatar__image--icon"><div class="sg-icon sg-icon--gray-light sg-icon--x32 sg-avatar____icon"><img style="max-width:100%;
                    max-height:100%;"src="`+ansavatar+`"></div></div></a></div></div><div class="sg-flex sg-flex--column sg-flex--margin-left-s"><div class="sg-flex"><ul class="sg-breadcrumb-list"><li class="sg-breadcrumb-list__element"><a class="sg-text sg-text--small sg-text--bold sg-text--link" target="_blank" href="https://brainly.com/profile/`+answerernick+`-`+answererid+`">`+answerernick+`</a></li><li class="sg-breadcrumb-list__element"><span class="sg-text sg-text--small" style="color: `+ansrankcolor+`">`+ansrank+`</span></li></ul></div><div class="sg-flex"><ul class="sg-breadcrumb-list"><li class="sg-breadcrumb-list__element"><span class="sg-text sg-text--xsmall sg-text--gray-secondary">`+askedagoans+`</span></li></ul></div></div></div><div class="sg-flex sg-flex--align-items-center sg-flex--justify-content-flex-end sg-flex--wrap sg-flex--grow"></div></div><div class="sg-flex sg-flex--column sg-flex--margin-bottom-s"><div class="sg-text sg-text--break-words">`+anscontent+`</div></div></div><div class="sg-flex sg-flex--justify-content-space-between sg-flex--wrap"><div class="sg-flex sg-flex--wrap"><div class="sg-flex sg-flex--margin-top-xxs sg-flex--margin-bottom-xxs sg-flex--margin-left-xxs sg-flex--relative sg-flex--margin-right-xs"><button style="fill:white;" class="sg-button sg-button--outline sg-button--icon-only sg-button--outline-toggle-peach sg-button--outline-white openans" title="See more deletion options"><span class="sg-button__icon"><div class="sg-icon sg-icon--adaptive" id="openmenuanswer`+responseit+`"><svg style="fill:white " class="sg-icon__svg"><use xlink:href="#icon-trash"></use></svg></div></span><span class="sg-button__text"></span></button><div class="sg-flex sg-flex--margin-top-xxs sg-flex--margin-bottom-xxs sg-flex--margin-left-xxs sg-flex--relative sg-flex--margin-right-xs"><button style="top: -4PX;
                    MARGIN-LEFT: 5px;"class="sg-button sg-button--outline sg-button--icon-only sg-button--outline-toggle-blue sg-button--outline-white" title="Ask for correction"><span class="sg-button__icon"><div class="sg-icon sg-icon--adaptive"><svg class="sg-icon__svg"><use xlink:href="#icon-pencil"></use></svg></div></span><span class="sg-button__text"></span></button></div><button style="
                    top: 0;
                    MARGIN-LEFT: 1.5px;
                    border-color: #60D399 !important;
                    /* border-color: black !important; */
                    background-color: transparent !important;
                    fill: #60D399 !important;
                    " class="sg-button sg-button--outline sg-button--icon-only sg-button--outline-toggle-green sg-button--outline-white" title="Ask for correction"><span class="sg-button__icon"><div class="sg-icon sg-icon--adaptive"><svg class="sg-icon__svg" id="approve`+responseit+`"><use xlink:href="#icon-check"></use></svg></div></span><span class="sg-button__text"></span></button></div><div class="sg-flex sg-flex--justify-content-flex-end sg-flex--wrap sg-flex--grow"></div><div class="actions">
                    <span class="subcategories `+responseit+` line pull-left" style="display: inline;">
										                                            <input type="button" class="btn btn-mini sub-ans-`+responseit+`" value="Not English" placeholder="Hi! Hola! Salut! Hallo! It looks like you've posted an answer in a language other than English. If you live outside the United States or want to use Brainly in a different language, check out the other language versions of Brainly here: https://faq.brainly.com/hc/en-us/articles/115001185650-How-do-I-use-Brainly-in-a-different-language-.">
                                                                                    <input type="button" class="btn btn-mini sub-ans-`+responseit+`" value="Please Be Nice to Other Users" placeholder="If you wouldn't want your teachers to see it, don't post it! Brainly has a zero-tolerance policy for cyberbullying. If you continue to break this golden rule, your account will be deleted. Please review our Community Guidelines to keep Brainly safe and stay out of trouble: https://faq.brainly.com/hc/en-us/articles/360014661139">
                                                                                    <input type="button" class="btn btn-mini sub-ans-`+responseit+`" value="Default" placeholder="Your answer violates our Community Guidelines, so we had to take it down. Please review the guidelines here: https://faq.brainly.com/hc/en-us/articles/360014661139  - Thanks for being a team player!">
                                                                                    <input type="button" class="btn btn-mini sub-ans-`+responseit+`" value="Self Harm" placeholder="We had to remove your answer because it was not school-related. More importantly, we're concerned about the content you are posting about wanting to hurt yourself, and we want to encourage you to seek help.

We recommend that you talk to a parent or other adult you trust about how you're feeling. If you'd prefer to get help from someone else, you can use the following resources to be connected with a trained staff member from a prevention service provider in your area:

National Phone Hotline: 1-800-273-TALK
Crisis Text Line: http://www.crisistextline.org/
Safety on Brainly: https://faq.brainly.com/hc/en-us/articles/360013472580-Safety-on-Brainly-">
                                                                                    <input type="button" class="btn btn-mini sub-ans-`+responseit+`" value="Inappropriate Content" placeholder="Your answer has been removed because it violates Brainly's Community Guidelines. This should be a safe and respectful learning environment for every student. That being said, we have a zero-tolerance policy for inappropriate subjects such as swear words or explicit content. If you continue to post those on Brainly, your account will be deleted. Please review our Community Guidelines to keep Brainly safe and stay out of trouble: https://faq.brainly.com/hc/en-us/articles/360014661139">
                                                                                    <input type="button" class="btn btn-mini sub-ans-`+responseit+`" value="Personal Information" placeholder="Your answer has been removed because it’s not safe to share or ask for personal information online. Keep information like your real name, school name, address, and social media usernames to yourself!">
                                        									</span>
                                                                            <span class="subcategories `+responseit+` line pull-left" style="display: inline;">
                                                                            <input type="button" class="btn btn-mini sub-ans-`+responseit+`" value="Question about Question" placeholder="Not to be total neat freaks, but please don't use the &quot;Answer&quot; feature to ask about a question. It's meant for specific answers to questions. If you need to clarify something about a question, make sure to use the &quot;Ask for Details&quot; button instead. Thanks!">
                                                                            <input type="button" class="btn btn-mini sub-ans-`+responseit+`" value="IDK Answer " placeholder="Whoa there, Brainiac! Telling someone that you’re not sure how to answer their question isn’t very helpful to them. Next time, just move on to another question you can answer. If you’re interested in learning the answer from other users, be sure to follow this question. For more information on providing great answers, check out our Answering Guidelines: https://faq.brainly.com/hc/en-us/articles/360010136959-Answering-Guidelines">
                                                                            <input type="button" class="btn btn-mini sub-ans-`+responseit+`" value="MIstakes in Answer" placeholder="Uh oh! It looks like there are some mistakes in your answer. Please double-check your work and repost your answer. The second time's a charm!">
                                                                            <input type="button" class="btn btn-mini sub-ans-`+responseit+`" value="Spam Answer" placeholder="Please don't post unhelpful answers - keep Brainly's answer quality high! If you contribute quality answers to Brainly, you'll earn more points and help others learn. Check out what makes a great answer here: https://faq.brainly.com/hc/en-us/articles/360010136959-Answering-Guidelines   ">
                                                                    </span>
                                                                    <span class="subcategories `+responseit+` line pull-left" style="display: inline;">
										                                            <input type="button" class="btn btn-mini sub-ans-`+responseit+`" value="Not Clear" placeholder="Uh oh! It looks like your answer is unclear or does not answer the question being asked. We know you were excited to help, so double-check your answer and post it again. For more information on what makes a great answer, check out our Answering Guidelines: https://faq.brainly.com/hc/en-us/articles/360010136959-Answering-Guidelines  ">
                                                                                    <input type="button" class="btn btn-mini sub-ans-`+responseit+`" value="Incomplete Answer" placeholder="Your answer has been removed because it was incomplete. We know you were excited to help, so please repost and make sure to include any necessary explanations and details. That way other students will better understand your answer. Check out what makes a great answer here: https://faq.brainly.com/hc/en-us/articles/360010136959-Answering-Guidelines  ">
                                                                                    <input type="button" class="btn btn-mini sub-ans-`+responseit+`" value="No Calculations (STEM Only)" placeholder="Your answer has been removed because it was missing some important steps. Brainly is all about giving students the tools they need to tackle future problems on their own, so it's important to show your work and explain how you reached your final answer. Please add your calculations and repost your answer. For more information on what makes a great answer, check out our Content Guidelines: https://faq.brainly.com/hc/en-us/articles/360014661139 ">
                                        									</span>
                                                                            <span class="subcategories `+responseit+` line pull-left" style="display: inline;">
                                                                            <input type="button" class="btn btn-mini sub-ans-`+responseit+`" value="Copied From Another Source" placeholder="Your answer has been removed because plagiarism is serious business. Posting content from another website, person, or source without permission is strictly forbidden. Besides, we know you can do it on your own. Check out our article on academic integrity for more information: https://faq.brainly.com/hc/en-us/articles/360011207279-Academic-Integrity">
                                                                            <input type="button" class="btn btn-mini sub-ans-`+responseit+`" value="Link in Answer" placeholder="Your answer has been removed because it contained a link to a website other than Brainly. Please keep in mind that links to outside sites or sources are not allowed. Thanks for keeping Brainly safe! For more information on what makes a great answer, check out our Answering Guidelines: https://faq.brainly.com/hc/en-us/articles/360010136959-Answering-Guidelines ">
                                                                            <input type="button" class="btn btn-mini sub-ans-`+responseit+`" value="Copied from Another User " placeholder="Your answer has been removed because plagiarism is serious business. Copying answers from other users violates Brainly's Community Guidelines. Besides, we know you can do it on your own. Check out our article on academic integrity for more information: https://faq.brainly.com/hc/en-us/articles/360011207279-Academic-Integrity">
                                                                    </span>
                                                                    <textarea class="text-reason `+responseit+`" placeholder="Write additional information for users"></textarea>
                                           
                                                                    <p>
                            <label class="pull-left fine"><input type="checkbox" class="take-answerers-points `+responseit+`" checked="checked"><span class="textselect `+responseit+`"> take back points</span></label>
                     
                            <label class="pull-left fine"><input type="checkbox" class="give-warning `+responseit+`"><span class="textselect `+responseit+`"> warn user</span></label>
                    
                           
                            <button class="proceed `+responseit+` btn btn-warning btn-mini">Confirm</button>
                            </div></div></div></div></div></div><div class="sg-horizontal-separator sg-horizontal-separator--spaced"></div></div></div></div></div>
                    
                         
                            
                                
                    </div></div></div>`
                    document.getElementById("approve"+responseit).addEventListener("click",function(){
                        let confx = confirm("Are you sure you'd like to verify this content?")
                        if (confx === true){
                            var data = JSON.stringify({
                                "model_id": answerid,
                                "model_type": 2
                              });
                              
                              var xhr = new XMLHttpRequest();
                              xhr.withCredentials = true;
                              
                              xhr.addEventListener("readystatechange", function() {
                                if(this.readyState === 4) {
                                  
                                  let div = document.createElement("div")
                                    div.innerHTML = '<div id="remove" class="sg-flash">\n'+
                                    '    <div class="sg-flash__message sg-flash__message--success">\n'+
                                    '      <div class="sg-text sg-text--bold sg-text--small sg-text--to-center">\n'+
                                    '          Verified content.\n'+
                                    '      </div>\n'+
                                    '  </div></div>';
                                    
                                    document.querySelector("body > div.js-page-wrapper > div > div.brn-header-container.brn-header-container--has-sub-navigation > div.js-main-header.brn-header.js-react-header-next.js-ads-screening-header.js-ads-top-offset-element > div.flash-messages-container.js-flash-messages.js-flash-messages-container").appendChild(div)
                                    document.getElementById("remove").addEventListener("click",function(){
                                        this.style.display = "none"
                                    }) 
                                }
                              });
                              function getCookie(cname) {
                                let name = cname + "=";
                                let decodedCookie = decodeURIComponent(document.cookie);
                                let ca = decodedCookie.split(';');
                                for (let i = 0; i < ca.length; i++) {
                                    let c = ca[i];
                                    while (c.charAt(0) == ' ') {
                                        c = c.substring(1);
                                    }
                                    if (c.indexOf(name) == 0) {
                                        return c.substring(name.length, c.length);
                                    }
                                }
                                return "";
                            }
                
                              tokenr = getCookie("Zadanepl_cookie[Token][Long]")
                              xhr.open("POST", "https://brainly.com/api/28/api_content_quality/confirm");
                              xhr.setRequestHeader("authority", "brainly.com");
                              xhr.setRequestHeader("sec-ch-ua", "\"Chromium\";v=\"94\", \"Google Chrome\";v=\"94\", \";Not A Brand\";v=\"99\"");
                              xhr.setRequestHeader("sec-ch-ua-mobile", "?0");
                              xhr.setRequestHeader("user-agent", "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.61 Safari/537.36");
                              xhr.setRequestHeader("content-type", "application/json");
                              xhr.setRequestHeader("x-b-token-long", tokenr);
                              xhr.setRequestHeader("accept", "text/plain, */*; q=0.01");
                              xhr.setRequestHeader("x-requested-with", "XMLHttpRequest");
                              xhr.setRequestHeader("sec-ch-ua-platform", "\"macOS\"");
                              xhr.setRequestHeader("origin", "https://brainly.com");
                              xhr.setRequestHeader("sec-fetch-site", "same-origin");
                              xhr.setRequestHeader("sec-fetch-mode", "cors");
                              xhr.setRequestHeader("sec-fetch-dest", "empty");
                              xhr.setRequestHeader("referer", "https://brainly.com/question/"+questionid);
                              xhr.setRequestHeader("accept-language", "en-US,en;q=0.9");
                              xhr.setRequestHeader("cookie", "_gcl_au=1.1.2102877201.1632589551; _ga=GA1.2.407199889.1632589551; _gid=GA1.2.2053091205.1632589551; notice_behavior=implied,us; _hjid=1b581735-7fba-4927-ab75-8f52ccbf31ef; _fbp=fb.1.1632589551260.132509322; __qca=P0-1236078561-1632589551233; Zadanepl_cookie[Token][Guest]=XqVFLflPofaRY25ybZtHwP71qnWhQNPRfYI2hQzD3ZG9U6uXHGm97Iq9itwKopKX0EIY6KPOmjn19iKX; G_ENABLED_IDPS=google; G_AUTHUSER_H=0; zadane_sid=b360c2d63773edde9c911f33ecdd48af; __utmc=153832555; notice_preferences=7:; notice_gdpr_prefs=0,1,2,3,4,5,6,7:; cmapi_gtm_bl=; cmapi_cookie_privacy=permit 1,2,3,4,5,6,7,8; _pubcid=efcca236-2d79-4885-9c86-fd31c79aaa97; __gads=ID=f02f96a8ef04d99a:T=1632628570:S=ALNI_Ma8lOHfUJkfZea6KwT4qeJVkOULLg; panoramaId_expiry=1633233371014; _cc_id=e78ffe171e7dbdbb062659e75c4eca35; panoramaId=b40dc3f7b624307cd8ecbdb4e8e516d539381d96aba392df941d3dc1f66f4060; viewer_uid=U0ZSSjdDM2JPOGd6ZkdiYUdoVWxxa3A4ZjlQY242blVad080TEVjOHRxND0tLVVSSUhVd25YOTIvUUZvNGlobHMwQXc9PQ%3D%3D--d2f9aba8de2109b9834aa813242e860b0b7bab83; _gaexp=GAX1.2.oczpohZYSbi759I8LVPtRA.18977.0u0021AjtxuCidSe6-foSp9rjORw.18984.1; __utmz=153832555.1632874470.19.2.utmcsr=google|utmccn=(organic)|utmcmd=organic|utmctr=(not%20provided); ocean_session=1632924350174.afeivobo; first_visit=1632924352; myHash=ef15d84e3efadfa721ef7e74e5356adc; Student_unpaid=True; Student=True; authHash=aab5705f25c3dd06b0ee7598db1bdaa5; cnx_userId=fa6b93f2ac1f41238c5c5cf726518e96; _pbjs_userid_consent_data=3524755945110770; _lr_env_src_ats=false; idl_env=AroKr1lX8JGsdDtGJy6c5-CJGlCanv_3jkvwau6q4DYX0cYu0JU0Jiulzjg69-PWJDpDzq2irt0msBW53weg56-U0KteI7jx9ktp; pbjs-unifiedid=%7B%22TDID%22%3A%225375acd5-7eb7-44d7-a041-8340c7834bd2%22%2C%22TDID_LOOKUP%22%3A%22TRUE%22%2C%22TDID_CREATED_AT%22%3A%222021-08-29T23%3A43%3A02%22%7D; g_state={\"i_l\":0}; Zadanepl_cookie[Token][Long]=KHpx8199cfK-43wL_Ai7_TCWzEqxGwPdYSmO1jrof1w%3D; _hjIncludedInSessionSample=0; Zadanepl_cookie[isLoggedIn]=1; _hjAbsoluteSessionInProgress=0; amplitude_id_710046ca554fe7c78d358b8c5e09a168brainly.com=eyJkZXZpY2VJZCI6ImUzMzIzNjBmLTk5NzctNDgwZS1hNzAyLTRhMWFlM2I0ZDQ4YlIiLCJ1c2VySWQiOm51bGwsIm9wdE91dCI6ZmFsc2UsInNlc3Npb25JZCI6MTYzMzA0ODgxOTY5MywibGFzdEV2ZW50VGltZSI6MTYzMzA0OTA4Nzg0OSwiZXZlbnRJZCI6OTksImlkZW50aWZ5SWQiOjAsInNlcXVlbmNlTnVtYmVyIjo5OX0=; __utma=153832555.407199889.1632589551.1633045515.1633049369.28; __utmb=153832555.0.10.1633049369; _dc_gtm_UA-43896087-1=1; cto_bidid=jgpU8F9GJTJCclFKRTlJcDIxakdyT0hSTHloY29CTEEyUzFyVk9RV3BrOXBoWndpb2VLZ1Z3Y1p5WXJCY2E5MzY3SGd5QXVNV1JKbkJWUmFscXBIZkdhdGZXNiUyQndNZDFHNXJJdG5DVlVUUFVTQ3YzZE9kU1VxWWhHMGtQQmRFbnUlMkZpRUxJU0VyeEJsYjROTXBSdkZEUWo5WmtnOUElM0QlM0Q; cto_bundle=KoHsCF9zeVIlMkJIT25KWE5KRXR3NkNrNURIeW1nQlZrNkRhY3dFZTE4ZTE2TVFvR0lmWmVDeEZmdlBRV2FhUFRXclJGc0t5SERpZ0V6QTQxSzlnYkF3JTJCYlp4WlZXZ3ZlbCUyRkxEZ1JWTW82T3hSdVMwM29UcGRqTEowOSUyRm1kYUh5JTJGS3MyUjFTMSUyRkNMb3RhaXN0N1d5JTJGN0NEUzh6RmdEa1BMOVVCakNZZFZqWkdraWpYVDhKYk9CcmowOG12ekxWd3FWSnZyWA; _parrable_id=eid%253A01.1633049382.2e55d01153b1c36d10b09b774eb366c27788cbcd77242afa959c1dd135b3ff5ca33bba20b48040d187cf0523a22ad2d7a8507a6e93f41aa172c1a9936bc88e69eed15386e36794ebdd21%252Ctpc%253A0%252CtpcUntil%253A1633135782; _lr_geo_location=US; datadome=9cIwj88Z4gsR55AfmY4T-6MA1_AmeInpY6JpYwl1kBBORAS.GtujLcaTPBRbqbYhUWpK3N7bQ11g807pSwqwhwY-m.Ml3r~FhOZj~LlqgX");
                              
                              xhr.send(data);
                        }
                       
                        
                        
                        
                    })
                        
                        
                    
                     sub = document.getElementsByClassName("subcategories "+responseit+"")
            
                     fine = document.getElementsByClassName("fine "+responseit+"")
                    
                     textrsnx = document.getElementsByClassName("text-reason "+responseit+"")
                     prcd = document.getElementsByClassName("proceed "+responseit+"")
                     txtselect = document.getElementsByClassName("textselect "+responseit+"")
                     for (let i = 0; i < txtselect.length; i++) {
                        txtselect[i].style.display = "none"
                      }
                    for (let i = 0; i < sub.length; i++) {
                        sub[i].style.display = "none"
                      }
                    for (let i = 0; i < fine.length; i++) {
                        fine[i].style.display = "none"
                      }
                    for (let i = 0; i < textrsnx.length; i++) {
                        textrsnx[i].style.display = "none"
                      }
                    for (let i = 0; i < prcd.length; i++) {
                        prcd[i].style.display = "none"
                      }
                      let boxes = document.getElementsByClassName(responseit)
                      for (let i = 0; i < boxes.length; i++) {
                          boxes[i].style.display = "none"
                      }
                    document.getElementById("openmenuanswer"+responseit).addEventListener("click",function(){
                        
                        if (opened === false){
                            opened = true
                            todo = "block"
                        } else {
                            opened = false
                            todo = "none"
                        }
                        let sub = document.getElementsByClassName("subcategories "+responseit+"")
                        
                        let fine = document.getElementsByClassName("fine "+responseit+"")
                        
                        let textrsnx = document.getElementsByClassName("text-reason "+responseit+"")
                        let prcd = document.getElementsByClassName("proceed "+responseit+"")
                        let boxes = document.getElementsByClassName(responseit)
                        let txtselect = document.getElementsByClassName("textselect "+responseit+"")
                        for (let i = 0; i < txtselect.length; i++) {
                            txtselect[i].style.display = todo
                          }
                        for (let i = 0; i < boxes.length; i++) {
                            boxes[i].style.display = todo
                        }
                        for (let i = 0; i < sub.length; i++) {
                            sub[i].style.display = todo
                        }
                        for (let i = 0; i < fine.length; i++) {
                            fine[i].style.display =todo
                        }
                        for (let i = 0; i < textrsnx.length; i++) {
                            textrsnx[i].style.display = todo
                        }
                        for (let i = 0; i < prcd.length; i++) {
                            prcd[i].style.display = todo
                        }
                    
            
            
                    })
                
                  }
                  getanswererdata(i + 2, i)
                
                }
            }
        if (attatchments.length > 0){
            for (let i = 0; i < attatchments.length; i++) {
                let atc = document.createElement("img")
                document.getElementsByClassName("sg-box sg-box--padding-xs")[3].appendChild(atc)
                atc.outerHTML = "<a target='_blank' href='"+attatchments[i]["full"]+"'><img style='width:20%;border-style: solid;border-width: 1px;' src="+attatchments[i]["full"]+"></img></a>"
                
                
                }
            }
       
         let menus = document.getElementsByClassName("omenu")
	 for (let i = 0; i < menus.length; i++) {
		  menus[i] .addEventListener("click",function(){
            if (opened === false){
                opened = true
                todo = "block"
            } else {
                opened = false
                todo = "none"
            }
            
            let sub = document.getElementsByClassName("subcategories question")
            
            let fine = document.getElementsByClassName("fineq")
            
            let textrsnx = document.getElementsByClassName("text-reason question")
            let prcd = document.getElementsByClassName("proceed question")
            let lilboxes = document.getElementsByClassName("question")
            
            for (let i = 0; i < lilboxes.length; i++) {
                lilboxes[i].style.display = todo
              }
            for (let i = 0; i < sub.length; i++) {
                sub[i].style.display = todo
              }
            for (let i = 0; i < fine.length; i++) {
                fine[i].style.display = todo
              }
            for (let i = 0; i < textrsnx.length; i++) {
                textrsnx[i].style.display = todo
              }
            for (let i = 0; i < prcd.length; i++) {
                prcd[i].style.display = todo
              }
          


        })
		}
       
          document.getElementsByClassName("proceed btn btn-warning btn-mini")[0].addEventListener("click",function(){
            let tbrp = document.getElementsByClassName("take-answerers-points")[0].checked
            let drp = document.getElementsByClassName("dont-return-points")[0].checked
            let gw = document.getElementsByClassName("give-warning")[0].checked
            let tval = localStorage.getItem("ticketvalue")
            let txtofrsn = document.getElementsByClassName("text-reason")[0].value
            var data = JSON.stringify({
                "model_id": modal,
                "model_type_id": 1,
                "reason_id": parseInt(tval),
                "reason": String(txtofrsn),
                "give_warning": gw,
                "take_points": tbrp,
                "return_points": drp,
                "schema": ""
              });
              
              var xhr = new XMLHttpRequest();
              xhr.withCredentials = true;
              
              xhr.addEventListener("readystatechange", function() {
                if(this.readyState === 4) {
                  
                  let div = document.createElement("div")
                        div.innerHTML = '<div id="remove" class="sg-flash">\n'+
                        '    <div class="sg-flash__message sg-flash__message--error">\n'+
                        '      <div class="sg-text sg-text--bold sg-text--small sg-text--to-center">\n'+
                        '          Successfully removed https://brainly.com/question/'+ modal +'\n'+
                        '      </div>\n'+
                        '  </div></div>';
                        
                        document.querySelector("body > div.js-page-wrapper > div > div.brn-header-container.brn-header-container--has-sub-navigation > div.js-main-header.brn-header.js-react-header-next.js-ads-screening-header.js-ads-top-offset-element > div.flash-messages-container.js-flash-messages.js-flash-messages-container").appendChild(div)
                        document.getElementById("remove").addEventListener("click",function(){
                            this.style.display = "none"
                        }) 
                }
              });
              function getCookie(cname) {
                let name = cname + "=";
                let decodedCookie = decodeURIComponent(document.cookie);
                let ca = decodedCookie.split(';');
                for (let i = 0; i < ca.length; i++) {
                    let c = ca[i];
                    while (c.charAt(0) == ' ') {
                        c = c.substring(1);
                    }
                    if (c.indexOf(name) == 0) {
                        return c.substring(name.length, c.length);
                    }
                }
                return "";
            }

              token = getCookie("Zadanepl_cookie[Token][Long]")
              xhr.open("POST", "https://brainly.com/api/28/moderation_new/delete_task_content");
              xhr.setRequestHeader("authority", "brainly.com");
              xhr.setRequestHeader("sec-ch-ua", "\"Chromium\";v=\"94\", \"Google Chrome\";v=\"94\", \";Not A Brand\";v=\"99\"");
              xhr.setRequestHeader("accept-language", "en-GB,en-US;q=0.9,en;q=0.8");
              xhr.setRequestHeader("sec-ch-ua-mobile", "?0");
              xhr.setRequestHeader("user-agent", "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.61 Safari/537.36");
              xhr.setRequestHeader("content-type", "application/json");
              xhr.setRequestHeader("x-b-token-long", String(token));
              xhr.setRequestHeader("accept", "text/plain, */*; q=0.01");
              xhr.setRequestHeader("x-requested-with", "XMLHttpRequest");
              xhr.setRequestHeader("sec-ch-ua-platform", "\"macOS\"");
              xhr.setRequestHeader("origin", "https://brainly.com");
              xhr.setRequestHeader("sec-fetch-site", "same-origin");
              xhr.setRequestHeader("sec-fetch-mode", "cors");
              xhr.setRequestHeader("sec-fetch-dest", "empty");
              xhr.setRequestHeader("referer", "https://brainly.com/");
             
              console.log(data)
              console.log(modal)
              xhr.send(data);
        })
        let buttons2 = document.getElementsByClassName("sub-ans-1")
       
        let buttons2x = []
        for (let i = 0; i < buttons2.length; i++) {
            buttons2x.push(buttons2[i])
            }
           
            for (let i = 0; i < buttons2x.length; i++) {
                buttons2x[i].addEventListener("click",function(){
                    console.log(this.value)
                    document.getElementsByClassName("text-reason")[2].value = this.placeholder
                    if (String(this.value) === "Not English"){
                        localStorage.setItem("ticketvalueanswer2","21")
                    } else if (String(this.value) === "Please Be Nice to Other Users"){
                        localStorage.setItem("ticketvalueanswer2","22")
                    } else if (String(this.value) === "Default"){
                        localStorage.setItem("ticketvalueanswer2","57")
                    } else if (String(this.value) === "Self Harm"){
                        localStorage.setItem("ticketvalueanswer2","73")
                    } else if (String(this.value) === "Inappropriate Content"){
                        localStorage.setItem("ticketvalueanswer2","84")
                    } else if (String(this.value) === "Personal Information"){
                        localStorage.setItem("ticketvalueanswer2","85")
                    } else if (String(this.value) === "Question about Question"){
                        localStorage.setItem("ticketvalueanswer2","32")
                    } else if (String(this.value) === "IDK Answer"){
                        localStorage.setItem("ticketvalueanswer2","35")
                    } else if (String(this.value) === "MIstakes in Answer"){
                        localStorage.setItem("ticketvalueanswer2","48")
                    } else if (String(this.value) === "Spam Answer"){
                        localStorage.setItem("ticketvalueanswer2","55")
                    } else if (String(this.value) === "Not Clear"){
                        localStorage.setItem("ticketvalueanswer2","13")
                    } else if (String(this.value) === "Incomplete Answer"){
                        localStorage.setItem("ticketvalueanswer2","20")
                    } else if (String(this.value) === "No Calculations (STEM Only)"){
                        localStorage.setItem("ticketvalueanswer2","33")
                    } else if (String(this.value) === "Copied From Another Source"){
                        localStorage.setItem("ticketvalueanswer2","7")
                    } else if (String(this.value) === "Link in Answer"){
                        localStorage.setItem("ticketvalueanswer2","8")
                    } else if (String(this.value) === "Copied from Another User "){
                        localStorage.setItem("ticketvalueanswer2","83")
                    } 
                    
                        
                })
                }
                try {
                    document.getElementsByClassName("proceed btn btn-warning btn-mini")[2].addEventListener("click",function(){
                    
                        let drp = document.getElementsByClassName("take-answerers-points")[2].checked
                        let gw = document.getElementsByClassName("give-warning")[2].checked
                        let tval = localStorage.getItem("ticketvalueanswer2")
                        let modalid = parseInt(this.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.id)
                        let txtofrsn = document.getElementsByClassName("text-reason")[2].value
                        var data = JSON.stringify({
                            "model_id": modalid,
                            "model_type_id": 2,
                            "reason_id": tval,
                            "reason": txtofrsn,
                            "give_warning": gw,
                            "take_points": drp,
                            "schema": "moderation.response.delete.req"
                          });
                          
                          var xhr = new XMLHttpRequest();
                          xhr.withCredentials = true;
                          
                          xhr.addEventListener("readystatechange", function() {
                            if(this.readyState === 4) {
                              
                              let div = document.createElement("div")
                            div.innerHTML = '<div id="remove" class="sg-flash">\n'+
                            '    <div class="sg-flash__message sg-flash__message--error">\n'+
                            '      <div class="sg-text sg-text--bold sg-text--small sg-text--to-center">\n'+
                            '          Successfully removed answer. \n'+
                            '      </div>\n'+
                            '  </div></div>';
                            
                            document.querySelector("body > div.js-page-wrapper > div > div.brn-header-container.brn-header-container--has-sub-navigation > div.js-main-header.brn-header.js-react-header-next.js-ads-screening-header.js-ads-top-offset-element > div.flash-messages-container.js-flash-messages.js-flash-messages-container").appendChild(div)
                            document.getElementById("remove").addEventListener("click",function(){
                                this.style.display = "none"
                            }) 
                            }
                          });
                          function getCookie(cname) {
                            let name = cname + "=";
                            let decodedCookie = decodeURIComponent(document.cookie);
                            let ca = decodedCookie.split(';');
                            for (let i = 0; i < ca.length; i++) {
                                let c = ca[i];
                                while (c.charAt(0) == ' ') {
                                    c = c.substring(1);
                                }
                                if (c.indexOf(name) == 0) {
                                    return c.substring(name.length, c.length);
                                }
                            }
                            return "";
                        }
                          token = getCookie("Zadanepl_cookie[Token][Long]")
                          xhr.open("POST", "https://brainly.com/api/28/moderation_new/delete_response_content");
                          xhr.setRequestHeader("authority", "brainly.com");
                          xhr.setRequestHeader("sec-ch-ua", "\"Chromium\";v=\"94\", \"Google Chrome\";v=\"94\", \";Not A Brand\";v=\"99\"");
                          xhr.setRequestHeader("sec-ch-ua-mobile", "?0");
                          xhr.setRequestHeader("user-agent", "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.61 Safari/537.36");
                          xhr.setRequestHeader("content-type", "application/json");
                          xhr.setRequestHeader("x-b-token-long", String(token));
                          xhr.setRequestHeader("accept", "text/plain, */*; q=0.01");
                          xhr.setRequestHeader("x-requested-with", "XMLHttpRequest");
                          xhr.setRequestHeader("sec-ch-ua-platform", "\"macOS\"");
                          xhr.setRequestHeader("origin", "https://brainly.com");
                          xhr.setRequestHeader("sec-fetch-site", "same-origin");
                          xhr.setRequestHeader("sec-fetch-mode", "cors");
                          xhr.setRequestHeader("sec-fetch-dest", "empty");
                          xhr.setRequestHeader("referer", "https://brainly.com/question/24887386?answeringSource=feedPublic%2FhomePage%2F32");
                          xhr.setRequestHeader("accept-language", "en-US,en;q=0.9");
                          xhr.setRequestHeader("cookie", "_gcl_au=1.1.2102877201.1632589551; _ga=GA1.2.407199889.1632589551; _gid=GA1.2.2053091205.1632589551; notice_behavior=implied,us; _hjid=1b581735-7fba-4927-ab75-8f52ccbf31ef; _fbp=fb.1.1632589551260.132509322; __qca=P0-1236078561-1632589551233; Zadanepl_cookie[Token][Guest]=XqVFLflPofaRY25ybZtHwP71qnWhQNPRfYI2hQzD3ZG9U6uXHGm97Iq9itwKopKX0EIY6KPOmjn19iKX; G_ENABLED_IDPS=google; G_AUTHUSER_H=0; zadane_sid=b360c2d63773edde9c911f33ecdd48af; __utmc=153832555; notice_preferences=7:; notice_gdpr_prefs=0,1,2,3,4,5,6,7:; cmapi_gtm_bl=; cmapi_cookie_privacy=permit 1,2,3,4,5,6,7,8; _pubcid=efcca236-2d79-4885-9c86-fd31c79aaa97; __gads=ID=f02f96a8ef04d99a:T=1632628570:S=ALNI_Ma8lOHfUJkfZea6KwT4qeJVkOULLg; panoramaId_expiry=1633233371014; _cc_id=e78ffe171e7dbdbb062659e75c4eca35; panoramaId=b40dc3f7b624307cd8ecbdb4e8e516d539381d96aba392df941d3dc1f66f4060; viewer_uid=U0ZSSjdDM2JPOGd6ZkdiYUdoVWxxa3A4ZjlQY242blVad080TEVjOHRxND0tLVVSSUhVd25YOTIvUUZvNGlobHMwQXc9PQ%3D%3D--d2f9aba8de2109b9834aa813242e860b0b7bab83; _gaexp=GAX1.2.oczpohZYSbi759I8LVPtRA.18977.0u0021AjtxuCidSe6-foSp9rjORw.18984.1; __utmz=153832555.1632874470.19.2.utmcsr=google|utmccn=(organic)|utmcmd=organic|utmctr=(not%20provided); ocean_session=1632924350174.afeivobo; first_visit=1632924352; myHash=ef15d84e3efadfa721ef7e74e5356adc; authHash=aab5705f25c3dd06b0ee7598db1bdaa5; cnx_userId=fa6b93f2ac1f41238c5c5cf726518e96; _pbjs_userid_consent_data=3524755945110770; _lr_env_src_ats=false; idl_env=AroKr1lX8JGsdDtGJy6c5-CJGlCanv_3jkvwau6q4DYX0cYu0JU0Jiulzjg69-PWJDpDzq2irt0msBW53weg56-U0KteI7jx9ktp; pbjs-unifiedid=%7B%22TDID%22%3A%225375acd5-7eb7-44d7-a041-8340c7834bd2%22%2C%22TDID_LOOKUP%22%3A%22TRUE%22%2C%22TDID_CREATED_AT%22%3A%222021-08-29T23%3A43%3A02%22%7D; g_state={\"i_l\":0}; Zadanepl_cookie[Token][Long]=KHpx8199cfK-43wL_Ai7_TCWzEqxGwPdYSmO1jrof1w%3D; amplitude_id_710046ca554fe7c78d358b8c5e09a168brainly.com=eyJkZXZpY2VJZCI6ImUzMzIzNjBmLTk5NzctNDgwZS1hNzAyLTRhMWFlM2I0ZDQ4YlIiLCJ1c2VySWQiOm51bGwsIm9wdE91dCI6ZmFsc2UsInNlc3Npb25JZCI6MTYzMzA0ODgxOTY5MywibGFzdEV2ZW50VGltZSI6MTYzMzA0OTA4Nzg0OSwiZXZlbnRJZCI6OTksImlkZW50aWZ5SWQiOjAsInNlcXVlbmNlTnVtYmVyIjo5OX0=; cto_bidid=jgpU8F9GJTJCclFKRTlJcDIxakdyT0hSTHloY29CTEEyUzFyVk9RV3BrOXBoWndpb2VLZ1Z3Y1p5WXJCY2E5MzY3SGd5QXVNV1JKbkJWUmFscXBIZkdhdGZXNiUyQndNZDFHNXJJdG5DVlVUUFVTQ3YzZE9kU1VxWWhHMGtQQmRFbnUlMkZpRUxJU0VyeEJsYjROTXBSdkZEUWo5WmtnOUElM0QlM0Q; cto_bundle=KoHsCF9zeVIlMkJIT25KWE5KRXR3NkNrNURIeW1nQlZrNkRhY3dFZTE4ZTE2TVFvR0lmWmVDeEZmdlBRV2FhUFRXclJGc0t5SERpZ0V6QTQxSzlnYkF3JTJCYlp4WlZXZ3ZlbCUyRkxEZ1JWTW82T3hSdVMwM29UcGRqTEowOSUyRm1kYUh5JTJGS3MyUjFTMSUyRkNMb3RhaXN0N1d5JTJGN0NEUzh6RmdEa1BMOVVCakNZZFZqWkdraWpYVDhKYk9CcmowOG12ekxWd3FWSnZyWA; _parrable_id=eid%253A01.1633049382.2e55d01153b1c36d10b09b774eb366c27788cbcd77242afa959c1dd135b3ff5ca33bba20b48040d187cf0523a22ad2d7a8507a6e93f41aa172c1a9936bc88e69eed15386e36794ebdd21%252Ctpc%253A0%252CtpcUntil%253A1633135782; Student_unpaid=True; Student=True; _hjIncludedInSessionSample=1; _hjAbsoluteSessionInProgress=0; Zadanepl_cookie[isLoggedIn]=1; __utma=153832555.407199889.1632589551.1633064535.1633149998.30; __utmb=153832555.0.10.1633149998; _dc_gtm_UA-43896087-1=1; datadome=M9LElao0CXXMF9GFAe.8pneeuC6_CqR121oeUgNyeTk2k3p07doBnVympFZkvXd3_b~RrZuK3U2wJbWUOxJhle34fvqbc.NKhCWpmgGU8g");
                          console.log(data)
                          xhr.send(data);
                    })
                } catch(err) {
                    //pass
                }
             
        let buttons1 = document.getElementsByClassName("sub-ans-0")
       
        let buttons = []
        for (let i = 0; i < buttons1.length; i++) {
                buttons.push(buttons1[i])
            }
           
            for (let i = 0; i < buttons.length; i++) {
                buttons[i].addEventListener("click",function(){
                    console.log(this.value)
                    document.getElementsByClassName("text-reason")[1].value = this.placeholder
                    if (String(this.value) === "Not English"){
                        localStorage.setItem("ticketvalueanswer","21")
                    } else if (String(this.value) === "Please Be Nice to Other Users"){
                        localStorage.setItem("ticketvalueanswer","22")
                    } else if (String(this.value) === "Default"){
                        localStorage.setItem("ticketvalueanswer","57")
                    } else if (String(this.value) === "Self Harm"){
                        localStorage.setItem("ticketvalueanswer","73")
                    } else if (String(this.value) === "Inappropriate Content"){
                        localStorage.setItem("ticketvalueanswer","84")
                    } else if (String(this.value) === "Personal Information"){
                        localStorage.setItem("ticketvalueanswer","85")
                    } else if (String(this.value) === "Question about Question"){
                        localStorage.setItem("ticketvalueanswer","32")
                    } else if (String(this.value) === "IDK Answer"){
                        localStorage.setItem("ticketvalueanswer","35")
                    } else if (String(this.value) === "MIstakes in Answer"){
                        localStorage.setItem("ticketvalueanswer","48")
                    } else if (String(this.value) === "Spam Answer"){
                        localStorage.setItem("ticketvalueanswer","55")
                    } else if (String(this.value) === "Not Clear"){
                        localStorage.setItem("ticketvalueanswer","13")
                    } else if (String(this.value) === "Incomplete Answer"){
                        localStorage.setItem("ticketvalueanswer","20")
                    } else if (String(this.value) === "No Calculations (STEM Only)"){
                        localStorage.setItem("ticketvalueanswer","33")
                    } else if (String(this.value) === "Copied From Another Source"){
                        localStorage.setItem("ticketvalueanswer","7")
                    } else if (String(this.value) === "Link in Answer"){
                        localStorage.setItem("ticketvalueanswer","8")
                    } else if (String(this.value) === "Copied from Another User "){
                        localStorage.setItem("ticketvalueanswer","83")
                    } 
                    
                        
                })
                }
                try{
                    document.getElementsByClassName("proceed btn btn-warning btn-mini")[1].addEventListener("click",function(){
                    
                        let drp = document.getElementsByClassName("take-answerers-points")[1].checked
                        let gw = document.getElementsByClassName("give-warning")[1].checked
                        let tval = localStorage.getItem("ticketvalueanswer")
                        let modalid = parseInt(this.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.id)
                        let txtofrsn = document.getElementsByClassName("text-reason")[1].value
                        var data = JSON.stringify({
                            "model_id": modalid,
                            "model_type_id": 2,
                            "reason_id": tval,
                            "reason": txtofrsn,
                            "give_warning": gw,
                            "take_points": drp,
                            "schema": "moderation.response.delete.req"
                          });
                          
                          var xhr = new XMLHttpRequest();
                          xhr.withCredentials = true;
                          
                          xhr.addEventListener("readystatechange", function() {
                            if(this.readyState === 4) {
                              
                              let div = document.createElement("div")
                            div.innerHTML = '<div id="remove" class="sg-flash">\n'+
                            '    <div class="sg-flash__message sg-flash__message--error">\n'+
                            '      <div class="sg-text sg-text--bold sg-text--small sg-text--to-center">\n'+
                            '          Successfully removed answer. \n'+
                            '      </div>\n'+
                            '  </div></div>';
                            
                            document.querySelector("body > div.js-page-wrapper > div > div.brn-header-container.brn-header-container--has-sub-navigation > div.js-main-header.brn-header.js-react-header-next.js-ads-screening-header.js-ads-top-offset-element > div.flash-messages-container.js-flash-messages.js-flash-messages-container").appendChild(div)
                            document.getElementById("remove").addEventListener("click",function(){
                                this.style.display = "none"
                            }) 
                            }
                          });
                          function getCookie(cname) {
                            let name = cname + "=";
                            let decodedCookie = decodeURIComponent(document.cookie);
                            let ca = decodedCookie.split(';');
                            for (let i = 0; i < ca.length; i++) {
                                let c = ca[i];
                                while (c.charAt(0) == ' ') {
                                    c = c.substring(1);
                                }
                                if (c.indexOf(name) == 0) {
                                    return c.substring(name.length, c.length);
                                }
                            }
                            return "";
                        }
                          token = getCookie("Zadanepl_cookie[Token][Long]")
                          xhr.open("POST", "https://brainly.com/api/28/moderation_new/delete_response_content");
                          xhr.setRequestHeader("authority", "brainly.com");
                          xhr.setRequestHeader("sec-ch-ua", "\"Chromium\";v=\"94\", \"Google Chrome\";v=\"94\", \";Not A Brand\";v=\"99\"");
                          xhr.setRequestHeader("sec-ch-ua-mobile", "?0");
                          xhr.setRequestHeader("user-agent", "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.61 Safari/537.36");
                          xhr.setRequestHeader("content-type", "application/json");
                          xhr.setRequestHeader("x-b-token-long", String(token));
                          xhr.setRequestHeader("accept", "text/plain, */*; q=0.01");
                          xhr.setRequestHeader("x-requested-with", "XMLHttpRequest");
                          xhr.setRequestHeader("sec-ch-ua-platform", "\"macOS\"");
                          xhr.setRequestHeader("origin", "https://brainly.com");
                          xhr.setRequestHeader("sec-fetch-site", "same-origin");
                          xhr.setRequestHeader("sec-fetch-mode", "cors");
                          xhr.setRequestHeader("sec-fetch-dest", "empty");
                          xhr.setRequestHeader("referer", "https://brainly.com/question/24887386?answeringSource=feedPublic%2FhomePage%2F32");
                          xhr.setRequestHeader("accept-language", "en-US,en;q=0.9");
                          xhr.setRequestHeader("cookie", "_gcl_au=1.1.2102877201.1632589551; _ga=GA1.2.407199889.1632589551; _gid=GA1.2.2053091205.1632589551; notice_behavior=implied,us; _hjid=1b581735-7fba-4927-ab75-8f52ccbf31ef; _fbp=fb.1.1632589551260.132509322; __qca=P0-1236078561-1632589551233; Zadanepl_cookie[Token][Guest]=XqVFLflPofaRY25ybZtHwP71qnWhQNPRfYI2hQzD3ZG9U6uXHGm97Iq9itwKopKX0EIY6KPOmjn19iKX; G_ENABLED_IDPS=google; G_AUTHUSER_H=0; zadane_sid=b360c2d63773edde9c911f33ecdd48af; __utmc=153832555; notice_preferences=7:; notice_gdpr_prefs=0,1,2,3,4,5,6,7:; cmapi_gtm_bl=; cmapi_cookie_privacy=permit 1,2,3,4,5,6,7,8; _pubcid=efcca236-2d79-4885-9c86-fd31c79aaa97; __gads=ID=f02f96a8ef04d99a:T=1632628570:S=ALNI_Ma8lOHfUJkfZea6KwT4qeJVkOULLg; panoramaId_expiry=1633233371014; _cc_id=e78ffe171e7dbdbb062659e75c4eca35; panoramaId=b40dc3f7b624307cd8ecbdb4e8e516d539381d96aba392df941d3dc1f66f4060; viewer_uid=U0ZSSjdDM2JPOGd6ZkdiYUdoVWxxa3A4ZjlQY242blVad080TEVjOHRxND0tLVVSSUhVd25YOTIvUUZvNGlobHMwQXc9PQ%3D%3D--d2f9aba8de2109b9834aa813242e860b0b7bab83; _gaexp=GAX1.2.oczpohZYSbi759I8LVPtRA.18977.0u0021AjtxuCidSe6-foSp9rjORw.18984.1; __utmz=153832555.1632874470.19.2.utmcsr=google|utmccn=(organic)|utmcmd=organic|utmctr=(not%20provided); ocean_session=1632924350174.afeivobo; first_visit=1632924352; myHash=ef15d84e3efadfa721ef7e74e5356adc; authHash=aab5705f25c3dd06b0ee7598db1bdaa5; cnx_userId=fa6b93f2ac1f41238c5c5cf726518e96; _pbjs_userid_consent_data=3524755945110770; _lr_env_src_ats=false; idl_env=AroKr1lX8JGsdDtGJy6c5-CJGlCanv_3jkvwau6q4DYX0cYu0JU0Jiulzjg69-PWJDpDzq2irt0msBW53weg56-U0KteI7jx9ktp; pbjs-unifiedid=%7B%22TDID%22%3A%225375acd5-7eb7-44d7-a041-8340c7834bd2%22%2C%22TDID_LOOKUP%22%3A%22TRUE%22%2C%22TDID_CREATED_AT%22%3A%222021-08-29T23%3A43%3A02%22%7D; g_state={\"i_l\":0}; Zadanepl_cookie[Token][Long]=KHpx8199cfK-43wL_Ai7_TCWzEqxGwPdYSmO1jrof1w%3D; amplitude_id_710046ca554fe7c78d358b8c5e09a168brainly.com=eyJkZXZpY2VJZCI6ImUzMzIzNjBmLTk5NzctNDgwZS1hNzAyLTRhMWFlM2I0ZDQ4YlIiLCJ1c2VySWQiOm51bGwsIm9wdE91dCI6ZmFsc2UsInNlc3Npb25JZCI6MTYzMzA0ODgxOTY5MywibGFzdEV2ZW50VGltZSI6MTYzMzA0OTA4Nzg0OSwiZXZlbnRJZCI6OTksImlkZW50aWZ5SWQiOjAsInNlcXVlbmNlTnVtYmVyIjo5OX0=; cto_bidid=jgpU8F9GJTJCclFKRTlJcDIxakdyT0hSTHloY29CTEEyUzFyVk9RV3BrOXBoWndpb2VLZ1Z3Y1p5WXJCY2E5MzY3SGd5QXVNV1JKbkJWUmFscXBIZkdhdGZXNiUyQndNZDFHNXJJdG5DVlVUUFVTQ3YzZE9kU1VxWWhHMGtQQmRFbnUlMkZpRUxJU0VyeEJsYjROTXBSdkZEUWo5WmtnOUElM0QlM0Q; cto_bundle=KoHsCF9zeVIlMkJIT25KWE5KRXR3NkNrNURIeW1nQlZrNkRhY3dFZTE4ZTE2TVFvR0lmWmVDeEZmdlBRV2FhUFRXclJGc0t5SERpZ0V6QTQxSzlnYkF3JTJCYlp4WlZXZ3ZlbCUyRkxEZ1JWTW82T3hSdVMwM29UcGRqTEowOSUyRm1kYUh5JTJGS3MyUjFTMSUyRkNMb3RhaXN0N1d5JTJGN0NEUzh6RmdEa1BMOVVCakNZZFZqWkdraWpYVDhKYk9CcmowOG12ekxWd3FWSnZyWA; _parrable_id=eid%253A01.1633049382.2e55d01153b1c36d10b09b774eb366c27788cbcd77242afa959c1dd135b3ff5ca33bba20b48040d187cf0523a22ad2d7a8507a6e93f41aa172c1a9936bc88e69eed15386e36794ebdd21%252Ctpc%253A0%252CtpcUntil%253A1633135782; Student_unpaid=True; Student=True; _hjIncludedInSessionSample=1; _hjAbsoluteSessionInProgress=0; Zadanepl_cookie[isLoggedIn]=1; __utma=153832555.407199889.1632589551.1633064535.1633149998.30; __utmb=153832555.0.10.1633149998; _dc_gtm_UA-43896087-1=1; datadome=M9LElao0CXXMF9GFAe.8pneeuC6_CqR121oeUgNyeTk2k3p07doBnVympFZkvXd3_b~RrZuK3U2wJbWUOxJhle34fvqbc.NKhCWpmgGU8g");
                          
                          xhr.send(data);
                    })
                } catch(err){
                    //pass
                }
                
        let btns1 = document.getElementsByClassName("sub-37")
        let btns2 = document.getElementsByClassName("sub-36")
        let btns3 = document.getElementsByClassName("sub-22")
        let btns4 = document.getElementsByClassName("sub-1")
        let btns = []
        for (let i = 0; i < btns1.length; i++) {
        btns.push(btns1[i])
        }
        for (let i = 0; i < btns2.length; i++) {
        btns.push(btns2[i])
        }
        for (let i = 0; i < btns3.length; i++) {
        btns.push(btns3[i])
        }
        for (let i = 0; i < btns4.length; i++) {
        btns.push(btns4[i])
        }
        for (let i = 0; i < btns.length; i++) {
        btns[i].addEventListener("click",function(){
            console.log(this.value)
            document.getElementsByClassName("text-reason")[0].value = this.placeholder
            if (String(this.value) === "Too Many Questions "){
                localStorage.setItem("ticketvalue","11")
            } else if (String(this.value) === "Link in Question"){
                localStorage.setItem("ticketvalue","15")
            } else if (String(this.value) === "Essay or Project"){
                localStorage.setItem("ticketvalue","17")
            } else if (String(this.value) === "Too Trivial"){
                localStorage.setItem("ticketvalue","30")
            } else if (String(this.value) === "Brainly-Related Question"){
                localStorage.setItem("ticketvalue","67")
            } else if (String(this.value) === "Wrong Subject"){
                localStorage.setItem("ticketvalue","75")
            } else if (String(this.value) === "Not a School Problem "){
                localStorage.setItem("ticketvalue","78")
            } else if (String(this.value) === "Default"){
                localStorage.setItem("ticketvalue","6")
            } else if (String(this.value) === "Not English"){
                localStorage.setItem("ticketvalue","9")
            } else if (String(this.value) === "Multiple Posting"){
                localStorage.setItem("ticketvalue","24")
            } else if (String(this.value) === "Inappropriate Content"){
                localStorage.setItem("ticketvalue","38")
            } else if (String(this.value) === "Personal Information"){
                localStorage.setItem("ticketvalue","56")
            } else if (String(this.value) === "Self Harm"){
                localStorage.setItem("ticketvalue","72")
            } else if (String(this.value) === "Unclear Question"){
                localStorage.setItem("ticketvalue","36")
            } else if (String(this.value) === "Unclear Attachment"){
                localStorage.setItem("ticketvalue","80")
            } else if (String(this.value) === "Too General "){
                localStorage.setItem("ticketvalue","81")
            } else if (String(this.value) === "Incomplete Question "){
                localStorage.setItem("ticketvalue","82")
            } else if (String(this.value) === "Content from Another Source"){
                localStorage.setItem("ticketvalue","77")
            } else if (String(this.value) === "Content Prohibited"){
                localStorage.setItem("ticketvalue","79")
            }
            
                
        })
        }
        }};

    

    xhr.send(data);
    
}

chrome.runtime.sendMessage({type: "notification", options: { 
    type: "notification", 
    
    title: "loaded",
    message: 'inject'
}});
var intervalId = window.setInterval(function() {
    loadedhome()
}, 100);

function language(){
    let first = document.createElement("option")
  
    let filter = document.getElementById("status")
    let loadmore = document.querySelector("#main-content > div.sg-animation-fade-in-fast > div.sg-flex.sg-flex--full-width.sg-flex--justify-content-center.sg-flex--margin-top-m.sg-flex--margin-bottom-m > button")
    loadmore.click();
    
    
    first.innerHTML = "Spanish Questions"
    first.value = "spanish"
    filter.appendChild(first)
    
    filter.addEventListener("change", function(){
    if (String(this.value) === "spanish"){
        filter.value = "CAN_ANSWER"
        async function f() {
            loadmore.click();
            let promise = new Promise((resolve, reject) => {
            setTimeout(() => resolve(firstq()), 500)

        });

            let result = await promise; // wait until the promise resolves (*)

        }
       
        f();
        function firstq(){
                let questions = document.getElementsByClassName("sg-text sg-text--break-words")

            var i;
            for (i = 0; i < questions.length; i++) {
                let content = questions[i].innerHTML;
                let test = /[áéíóúüñ¿¡]/.test(content)
                if (test === false){
            questions[i].parentElement.parentElement.parentElement.parentElement.parentElement.style.display = "none"
                }
            }


        }
        
        
        }

    });
}
// This script gets injected into any opened page
// whose URL matches the pattern defined in the manifest
// (see "content_script" key).
// Several foreground scripts can be declared
// and injected into the same or different pages.


function getMeta(metaName) {
    const metas = document.getElementsByTagName('meta');

    for (let i = 0; i < metas.length; i++) {
        if (metas[i].getAttribute('name') === metaName) {
            return metas[i].getAttribute('content');
        }
    }

    return '';
}

let data = getMeta('user_data')
data = JSON.parse(data)
let ranks = data["ranks"]
let i;
url = window.location.href;
if (url.includes("question") === false) {
    
    for (i = 0; i < ranks.length; i++) {
        let name = ranks[i]["name"]
    
        if (String(name).includes("Moderator") === true) {
            document.querySelector("body > div.js-page-wrapper > div > nav > div.brn-moderation-panel__content.sg-box.sg-box--padding-m.sg-box--shadow.js-moderation-panel-content > div > div.sg-content-box__title > h3").innerHTML = name+" Panel"
            let choice = localStorage.getItem("widget")
            if (choice !== undefined){
                if (choice === "time"){
                    let p = document.createElement("p")
                    var today = new Date();
                    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
                    p.innerHTML = `${time}`
                    p.style = 'color: grey; font-size: 17px; margin-top: 15px; margin-bottom: 15px;'
                    document.querySelector("body > div.js-page-wrapper > div > nav > div.brn-moderation-panel__content.sg-box.sg-box--padding-m.sg-box--shadow.js-moderation-panel-content > div > div.sg-content-box__title > h3").appendChild(p)
                } else if (choice === "weekend"){
                    let p = document.createElement("p")
                    var today = new Date();
                    let friday = 6 - today.getDay()
                    p.innerHTML = `${friday} days until the weekend!`
                    p.style = 'color: grey; font-size: 17px; margin-top: 15px; margin-bottom: 15px;'
                    document.querySelector("body > div.js-page-wrapper > div > nav > div.brn-moderation-panel__content.sg-box.sg-box--padding-m.sg-box--shadow.js-moderation-panel-content > div > div.sg-content-box__title > h3").appendChild(p)
                } else if (choice === "personal"){
                    let p = document.createElement("p")
                    let greetings = ["Hey","Hi","Hello","Howdy","Nice to see you","Welcome back"]
                    const randomElement = greetings[Math.floor(Math.random() * greetings.length)];
                    p.innerHTML = `${randomElement}, ${JSON.parse(document.querySelector('meta[name="user_data"]').content).nick}!`
                    p.style = 'color: grey; font-size: 17px; margin-top: 15px; margin-bottom: 15px;'
                    document.querySelector("body > div.js-page-wrapper > div > nav > div.brn-moderation-panel__content.sg-box.sg-box--padding-m.sg-box--shadow.js-moderation-panel-content > div > div.sg-content-box__title > h3").appendChild(p)
                }
            }
            localStorage.setItem("0576474418", true)
        }
    }

}



let isadmin = localStorage.getItem("0576474418")


if (url.includes("question") === true) {
    async function f() {

        let promise = new Promise((resolve, reject) => {
            setTimeout(() => resolve(loadedquestion()), 1000)

        });

        let result = await promise; // wait until the promise resolves (*)

    }

    f();
    

}
function loadedpanel(){
    //Improper Q Section
    
    if (document.getElementsByClassName("btn btn-mini btn-info to-correct")[1] !== undefined){
        document.getElementsByClassName("category cat-1")[3].addEventListener("click",function(){
        
            document.getElementsByClassName("btn btn-mini sub-39")[3].addEventListener("click",function(){
                localStorage.setItem("reasonans2", this.value)
            })
            document.getElementsByClassName("btn btn-mini sub-39")[4].addEventListener("click",function(){
                localStorage.setItem("reasonans2", this.value)
            })
            document.getElementsByClassName("btn btn-mini sub-39")[5].addEventListener("click",function(){
                localStorage.setItem("reasonans2", this.value)
            })
            
           
                
            
        })
        document.getElementsByClassName("category cat-0")[1].addEventListener("click",function(){
        
            document.getElementsByClassName("btn btn-mini sub-40")[3].addEventListener("click",function(){
                localStorage.setItem("reasonans2", this.value)
            })
            document.getElementsByClassName("btn btn-mini sub-40")[4].addEventListener("click",function(){
                localStorage.setItem("reasonans2", this.value)
            })
            document.getElementsByClassName("btn btn-mini sub-40")[5].addEventListener("click",function(){
                localStorage.setItem("reasonans2", this.value)
            })
            
            
           
                
            
        })
        document.getElementsByClassName("category cat-2")[2].addEventListener("click",function(){
        
            document.getElementsByClassName("btn btn-mini sub-23")[6].addEventListener("click",function(){
                localStorage.setItem("reasonans2", this.value)
            })
            document.getElementsByClassName("btn btn-mini sub-23")[7].addEventListener("click",function(){
                localStorage.setItem("reasonans2", this.value)
            })
            document.getElementsByClassName("btn btn-mini sub-23")[8].addEventListener("click",function(){
                localStorage.setItem("reasonans2", this.value)
            })
            document.getElementsByClassName("btn btn-mini sub-23")[9].addEventListener("click",function(){
                localStorage.setItem("reasonans2", this.value)
            })
            document.getElementsByClassName("btn btn-mini sub-23")[10].addEventListener("click",function(){
                localStorage.setItem("reasonans2", this.value)
            })
            document.getElementsByClassName("btn btn-mini sub-23")[11].addEventListener("click",function(){
                localStorage.setItem("reasonans2", this.value)
            })
            
           
                
            
        })
        document.getElementsByClassName("category cat-2")[3].addEventListener("click",function(){
        
            document.getElementsByClassName("btn btn-mini sub-38")[4].addEventListener("click",function(){
                localStorage.setItem("reasonans2", this.value)
            })
            document.getElementsByClassName("btn btn-mini sub-38")[5].addEventListener("click",function(){
                localStorage.setItem("reasonans2", this.value)
            })
            document.getElementsByClassName("btn btn-mini sub-38")[6].addEventListener("click",function(){
                localStorage.setItem("reasonans2", this.value)
            })
            document.getElementsByClassName("btn btn-mini sub-38")[7].addEventListener("click",function(){
                localStorage.setItem("reasonans2", this.value)
            })
            
            
           
                
            
        })
    } 
    
    
    document.getElementsByClassName("category cat-1")[0].addEventListener("click",function(){
        console.log(String(this.value))
        if (String(this.value) === "1"){
            document.getElementsByClassName("btn btn-mini sub-1")[0].addEventListener("click",function(){
                localStorage.setItem("reason", this.value)
            })
            document.getElementsByClassName("btn btn-mini sub-1")[1].addEventListener("click",function(){
                localStorage.setItem("reason", this.value)
            })
            document.getElementsByClassName("btn btn-mini sub-1")[2].addEventListener("click",function(){
                localStorage.setItem("reason", this.value)
            })
            document.getElementsByClassName("btn btn-mini sub-1")[3].addEventListener("click",function(){
                localStorage.setItem("reason", this.value)
            })
            document.getElementsByClassName("btn btn-mini sub-1")[4].addEventListener("click",function(){
                localStorage.setItem("reason", this.value)
            })
            document.getElementsByClassName("btn btn-mini sub-1")[5].addEventListener("click",function(){
                localStorage.setItem("reason", this.value)
            })
            document.getElementsByClassName("btn btn-mini sub-1")[6].addEventListener("click",function(){
                localStorage.setItem("reason", this.value)
            })
        } 
        
            
        
    })
    document.getElementsByClassName("category cat-1")[1].addEventListener("click",function(){
        console.log(String(this.value))
        if (String(this.value) === "36"){
            document.getElementsByClassName("btn btn-mini sub-36")[0].addEventListener("click",function(){
                localStorage.setItem("reason", this.value)
            })
            document.getElementsByClassName("btn btn-mini sub-36")[1].addEventListener("click",function(){
                localStorage.setItem("reason", this.value)
            })
            document.getElementsByClassName("btn btn-mini sub-36")[2].addEventListener("click",function(){
                localStorage.setItem("reason", this.value)
            })
            document.getElementsByClassName("btn btn-mini sub-36")[3].addEventListener("click",function(){
                localStorage.setItem("reason", this.value)
            })
            
        }
        
            
        
    })
    
    
    document.getElementsByClassName("category cat-3")[0].addEventListener("click",function(){
        document.getElementsByClassName("btn btn-mini sub-22")[0].addEventListener("click",function(){
            localStorage.setItem("reason", this.value)
        })
        document.getElementsByClassName("btn btn-mini sub-22")[1].addEventListener("click",function(){
            localStorage.setItem("reason", this.value)
        })
        document.getElementsByClassName("btn btn-mini sub-22")[2].addEventListener("click",function(){
            localStorage.setItem("reason", this.value)
        })
        document.getElementsByClassName("btn btn-mini sub-22")[3].addEventListener("click",function(){
            localStorage.setItem("reason", this.value)
        })
        document.getElementsByClassName("btn btn-mini sub-22")[4].addEventListener("click",function(){
            localStorage.setItem("reason", this.value)
        })
        document.getElementsByClassName("btn btn-mini sub-22")[5].addEventListener("click",function(){
            localStorage.setItem("reason", this.value)
        })
       
            
        
    })
    
    document.getElementsByClassName("category cat-1")[2].addEventListener("click",function(){
        
        document.getElementsByClassName("btn btn-mini sub-39")[0].addEventListener("click",function(){
            localStorage.setItem("reasonans", this.value)
        })
        document.getElementsByClassName("btn btn-mini sub-39")[1].addEventListener("click",function(){
            localStorage.setItem("reasonans", this.value)
        })
        document.getElementsByClassName("btn btn-mini sub-39")[2].addEventListener("click",function(){
            localStorage.setItem("reasonans", this.value)
        })
        
       
            
        
    })
    
    document.getElementsByClassName("category cat-0")[0].addEventListener("click",function(){
        
        document.getElementsByClassName("btn btn-mini sub-40")[0].addEventListener("click",function(){
            localStorage.setItem("reasonans", this.value)
        })
        document.getElementsByClassName("btn btn-mini sub-40")[1].addEventListener("click",function(){
            localStorage.setItem("reasonans", this.value)
        })
        document.getElementsByClassName("btn btn-mini sub-40")[2].addEventListener("click",function(){
            localStorage.setItem("reasonans", this.value)
        })
        
        
       
            
        
    })
    
    document.getElementsByClassName("category cat-2")[1].addEventListener("click",function(){
        
        document.getElementsByClassName("btn btn-mini sub-38")[0].addEventListener("click",function(){
            localStorage.setItem("reasonans2", this.value)
        })
        document.getElementsByClassName("btn btn-mini sub-38")[1].addEventListener("click",function(){
            localStorage.setItem("reasonans2", this.value)
        })
        document.getElementsByClassName("btn btn-mini sub-38")[2].addEventListener("click",function(){
            localStorage.setItem("reasonans2", this.value)
        })
        document.getElementsByClassName("btn btn-mini sub-38")[3].addEventListener("click",function(){
            localStorage.setItem("reasonans2", this.value)
        })
        
       
            
        
    })
    
    
    document.getElementsByClassName("category cat-2")[0].addEventListener("click",function(){
        
        document.getElementsByClassName("btn btn-mini sub-23")[0].addEventListener("click",function(){
            localStorage.setItem("reasonans", this.value)
        })
        document.getElementsByClassName("btn btn-mini sub-23")[1].addEventListener("click",function(){
            localStorage.setItem("reasonans", this.value)
        })
        document.getElementsByClassName("btn btn-mini sub-23")[2].addEventListener("click",function(){
            localStorage.setItem("reasonans", this.value)
        })
        document.getElementsByClassName("btn btn-mini sub-23")[3].addEventListener("click",function(){
            localStorage.setItem("reasonans", this.value)
        })
        document.getElementsByClassName("btn btn-mini sub-23")[4].addEventListener("click",function(){
            localStorage.setItem("reasonans", this.value)
        })
        document.getElementsByClassName("btn btn-mini sub-23")[5].addEventListener("click",function(){
            localStorage.setItem("reasonans", this.value)
        })
       
            
        
    })
    document.getElementsByClassName("category cat-6")[0].addEventListener("click",function(){
        document.getElementsByClassName("btn btn-mini sub-37")[0].addEventListener("click",function(){
            localStorage.setItem("reason", this.value)
        })
        document.getElementsByClassName("btn btn-mini sub-37")[1].addEventListener("click",function(){
            localStorage.setItem("reason", this.value)
        })
        
       
            
        
    })
    document.getElementsByClassName("proceed btn btn-warning btn-mini")[0].addEventListener("click",function(){

        function getMeta(metaName) {
            const metas = document.getElementsByTagName('meta');
          
            for (let i = 0; i < metas.length; i++) {
              if (metas[i].getAttribute('name') === metaName) {
                return metas[i].getAttribute('content');
              }
            }
          
            return '';
          }
        
        let datax = JSON.parse(getMeta('user_data'));
        let usernamex = datax["nick"]
        let idx = datax["id"]
        let pfp = datax["avatar"]
        
        let username = document.querySelector("#moderate-task-toplayer > div > section > div.moderation-task.id-"+window.location.href.split("?")[0].split("/")[4]+" > div.contents > div.boxxy.text > div.body > span.nick > a").innerText
        let box = String(document.getElementsByClassName("text-reason")[0].value)
        if (String(localStorage.getItem("reason")) === "Not English"){
            box = "Hi! Hola! Salut! Hallo! It looks like you've posted a question in a language other than English. Please be sure to select World Languages when asking your question. Otherwise, if you live outside the United States or want to use Brainly in a different language, check out the other language versions of Brainly here: https://faq.brainly.com/hc/en-us/articles/115001185650-How-do-I-use-Brainly-in-a-different-language-"
        }
        chrome.runtime.sendMessage({type: "notification", options: { 
            type: "notification", 
            
            title: "deleted",
            message: '{"question":"'+String(window.location.href)+'","mod":"'+usernamex+'","modid":"'+idx+'","modpfp":"'+pfp+'","rsn":"'+String(box)+'","rsntxt":"'+String(localStorage.getItem("reason"))+'","asker":"'+username+'"}'
        }});
        console.log("Sent")
    })
    document.getElementsByClassName("proceed btn btn-warning btn-mini")[2].addEventListener("click",function(){

        function getMeta(metaName) {
            const metas = document.getElementsByTagName('meta');
          
            for (let i = 0; i < metas.length; i++) {
              if (metas[i].getAttribute('name') === metaName) {
                return metas[i].getAttribute('content');
              }
            }
          
            return '';
          }
        
        let datax = JSON.parse(getMeta('user_data'));
        let usernamex = datax["nick"]
        let idx = datax["id"]
        let pfp = datax["avatar"]
        
        let username = document.getElementsByClassName("nick")[2].children[0].innerText
        let box = String(document.getElementsByClassName("text-reason")[2].value)
        
        chrome.runtime.sendMessage({type: "notification", options: { 
            type: "notification", 
            
            title: "deletedans",
            message: '{"question":"'+String(window.location.href)+'","mod":"'+usernamex+'","modid":"'+idx+'","modpfp":"'+pfp+'","rsn":"'+String(box)+'","rsntxt":"'+String(localStorage.getItem("reasonans"))+'","asker":"'+username+'"}'
        }});
        console.log("Sent")
    })
    
    document.getElementsByClassName("proceed btn btn-warning btn-mini")[4].addEventListener("click",function(){

        function getMeta(metaName) {
            const metas = document.getElementsByTagName('meta');
          
            for (let i = 0; i < metas.length; i++) {
              if (metas[i].getAttribute('name') === metaName) {
                return metas[i].getAttribute('content');
              }
            }
          
            return '';
          }
        
        let datax = JSON.parse(getMeta('user_data'));
        let usernamex = datax["nick"]
        let idx = datax["id"]
        let pfp = datax["avatar"]
        
        let username = document.getElementsByClassName("nick")[4].children[0].innerText
        let box = String(document.getElementsByClassName("text-reason")[4].value)
        
        chrome.runtime.sendMessage({type: "notification", options: { 
            type: "notification", 
            
            title: "deletedans",
            message: '{"question":"'+String(window.location.href)+'","mod":"'+usernamex+'","modid":"'+idx+'","modpfp":"'+pfp+'","rsn":"'+String(box)+'","rsntxt":"'+String(localStorage.getItem("reasonans2"))+'","asker":"'+username+'"}'
        }});
        console.log("Sent")
    })
}
function loadedquestion(){
    let modbutton = document.createElement("button")
    document.getElementsByClassName("brn-element-wrapper")[0].appendChild(modbutton)
    modbutton.outerHTML = `<div id="newticket" class="sg-flex sg-flex--margin-left-xxs"><div class="brn-element-wrapper"><div data-testid="tooltip_container" class="Tooltip-module__brn-tooltip-container--tq9gl"><div role="button" class="Tooltip-module__brn-tooltip-children--2gl8t" tabindex="0" aria-haspopup="true" aria-expanded="false"><button title="Ticket" class="sg-button sg-button--m sg-button--transparent-light sg-button--icon-only"><span class="sg-button__icon sg-button__icon--m"><div class="sg-icon sg-icon--gray-secondary sg-icon--x24"><svg class="sg-icon__svg"><use xlink:href="#icon-shield"></use></svg></div></span><span class="sg-button__text"></span></button></div></div></div></div>`
    document.getElementById("newticket").addEventListener("click",function(){
        let id = window.location.href.split("/")[4].split("?")[0]
        get(id)
    })
    let childs = document.getElementsByClassName("brn-qpage-next-question-activity__groups")[0].children
	for (let i = 0; i < childs.length; i++) {
	  let prevdate = new Date(String(childs[i].children[0].children[0].innerHTML))
	  prevdate.setDate(prevdate.getDate() + 1);
	  childs[i].children[0].children[0].innerText = prevdate.toLocaleString().split(",")[0]

	}
    document.getElementsByClassName("sg-button sg-button--s sg-button--solid")[0].addEventListener("click", function(){
        async function f() {

            let promise = new Promise((resolve, reject) => {
                setTimeout(() => resolve(loadedpanel()), 1000)
    
            });
    
            let result = await promise; // wait until the promise resolves (*)
    
        }
    
        f();
    })
    
    document.querySelector("#question-sg-layout-container > div.brn-qpage-layout.js-main-container.js-ads-screening-content > div.brn-qpage-layout__main.empty\\:sg-space-y-m.md\\:empty\\:sg-space-y-l > div.js-react-answers.js-question-answers.empty\\:sg-space-y-m.md\\:empty\\:sg-space-y-l > div > div.empty\\:sg-space-y-xs.md\\:empty\\:sg-space-y-s > div.sg-box.sg-box--light.sg-box--padding-m.sg-box--border-color-gray-secondary-lightest.sg-box--border > div > div.sg-flex > button").outerHTML = '<button title="Approve" class="sg-button sg-button--s sg-button--solid"><span class="sg-button__icon sg-button__icon--s"><div class="sg-icon sg-icon--light sg-icon--x16"><svg class="sg-icon__svg"><use xlink:href="#icon-star_outlined"></use></svg></div></span><span class="sg-button__text">Approve</span></button>'
    let btn = document.createElement("button")
    document.querySelector("#question-sg-layout-container > div.brn-qpage-layout.js-main-container.js-ads-screening-content > div.brn-qpage-layout__main.empty\\:sg-space-y-m.md\\:empty\\:sg-space-y-l > div.js-react-answers.js-question-answers.empty\\:sg-space-y-m.md\\:empty\\:sg-space-y-l > div > div.empty\\:sg-space-y-xs.md\\:empty\\:sg-space-y-s > div.sg-box.sg-box--light.sg-box--padding-m.sg-box--border-color-gray-secondary-lightest.sg-box--border > div").appendChild(btn)
    btn.outerHTML = '<button title="Confirm" id="confq" class="sg-button sg-button--s sg-button--solid"><span class="sg-button__icon sg-button__icon--s"><div class="sg-icon sg-icon--light sg-icon--x16"><svg class="sg-icon__svg"><use xlink:href="#icon-check"></use></svg></div></span><span class="sg-button__text">Confirm (Question)</span></button>'
    document.getElementById("confq").addEventListener("click", function(){
        let currentpage = window.location.href
        let removextra = currentpage.split("?")[0]
        let id = removextra.split("/")[4]

        var data = JSON.stringify({
            "model_id": id,
            "model_type_id": 1,
            "schema": ""
          });
          
          var xhr = new XMLHttpRequest();
          xhr.withCredentials = true;
          
          xhr.addEventListener("readystatechange", function() {
            if(this.readyState === 4) {
              
                
                let resp = JSON.parse(this.responseText);
                if (resp["success"] === true) {
                    function getMeta(metaName) {
                        const metas = document.getElementsByTagName('meta');
                      
                        for (let i = 0; i < metas.length; i++) {
                          if (metas[i].getAttribute('name') === metaName) {
                            return metas[i].getAttribute('content');
                          }
                        }
                      
                        return '';
                      }
                    let datax = JSON.parse(getMeta('user_data'));
                    let usernamex = datax["nick"]
                    let idx = datax["id"]
                    let pfp = datax["avatar"]
                    chrome.runtime.sendMessage({type: "notification", options: { 
                        type: "notification", 
                        
                        title: "confirmed",
                        message: '{"question":"'+String(window.location.href)+'","mod":"'+usernamex+'","modid":"'+idx+'","modpfp":"'+pfp+'"}'
                    }});
                    
                    document.getElementsByClassName("brn-qpage-next-question-box")[0].style.backgroundColor = "#9CE8C2"
                    let div = document.createElement("div")
                    div.innerHTML = '<div id="remove" class="sg-flash">\n'+
                    '    <div class="sg-flash__message sg-flash__message--success">\n'+
                    '      <div class="sg-text sg-text--bold sg-text--small sg-text--to-center">\n'+
                    '          Successfully confirmed https://brainly.com/question/'+ id +'\n'+
                    '      </div>\n'+
                    '  </div></div>';
                     
                    document.querySelector("body > div.js-page-wrapper > div > div.brn-header-container.brn-header-container--has-sub-navigation > div.js-main-header.brn-header.js-react-header-next.js-ads-screening-header.js-ads-top-offset-element > div.flash-messages-container.js-flash-messages.js-flash-messages-container").appendChild(div)
                    document.getElementById("remove").addEventListener("click",function(){
                        this.style.display = "none"
                    })
                }
            }
          });
            function getCookie(cname) {
                let name = cname + "=";
                let decodedCookie = decodeURIComponent(document.cookie);
                let ca = decodedCookie.split(';');
                for (let i = 0; i < ca.length; i++) {
                    let c = ca[i];
                    while (c.charAt(0) == ' ') {
                        c = c.substring(1);
                    }
                    if (c.indexOf(name) == 0) {
                        return c.substring(name.length, c.length);
                    }
                }
                return "";
            }

          token = getCookie("Zadanepl_cookie[Token][Long]")
          
          xhr.open("POST", "https://brainly.com/api/28/moderation_new/accept");
          xhr.setRequestHeader("authority", "brainly.com");
          xhr.setRequestHeader("sec-ch-ua", "\"Google Chrome\";v=\"93\", \" Not;A Brand\";v=\"99\", \"Chromium\";v=\"93\"");
          xhr.setRequestHeader("sec-ch-ua-mobile", "?0");
          xhr.setRequestHeader("user-agent", "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/93.0.4577.63 Safari/537.36");
          xhr.setRequestHeader("content-type", "application/json");
          xhr.setRequestHeader("x-b-token-long", String(token));
          xhr.setRequestHeader("accept", "text/plain, */*; q=0.01");
          xhr.setRequestHeader("x-requested-with", "XMLHttpRequest");
          xhr.setRequestHeader("sec-ch-ua-platform", "\"macOS\"");
          xhr.setRequestHeader("origin", "https://brainly.com");
          xhr.setRequestHeader("sec-fetch-site", "same-origin");
          xhr.setRequestHeader("sec-fetch-mode", "cors");
          xhr.setRequestHeader("sec-fetch-dest", "empty");
          xhr.setRequestHeader("referer", "https://brainly.com/question/"+id);
          xhr.setRequestHeader("accept-language", "en-US,en;q=0.9");
          xhr.setRequestHeader("cookie", "ocean_session=1631380498275.o680i7ybn; _gcl_au=1.1.685265292.1631380498; _ga=GA1.2.2039844497.1631380499; _gid=GA1.2.1333103635.1631380499; _dlt=1; notice_behavior=implied,us; _hjid=1b581735-7fba-4927-ab75-8f52ccbf31ef; _fbp=fb.1.1631380498685.772481208; __qca=P0-1571780098-1631380498675; first_visit=1631380500; Zadanepl_cookie[Token][Guest]=7SeQCrsniUyvHkqvDqSlkjPhRYtRIVe2OhuxxBwbtshbBUkDZF3eWwhpkVskDB4WjKsoIDHwHKGxtNE1; myHash=e3d3eeab8c2185a0f5a53cfd73ba499f; G_ENABLED_IDPS=google; G_AUTHUSER_H=0; Student_unpaid=True; Student=True; zadane_sid=f6bae74f86bf9eb6af46c8fcdc189dbb; authHash=aab5705f25c3dd06b0ee7598db1bdaa5; cnx_userId=fa6b93f2ac1f41238c5c5cf726518e96; g_state={\"i_l\":0}; __utmc=153832555; __utmz=153832555.1631381012.1.1.utmcsr=(direct)|utmccn=(direct)|utmcmd=(none); _pbjs_userid_consent_data=3524755945110770; _pubcid=8c7dafde-17a1-483d-badf-2bb8484f7c3e; __gads=ID=144201869a8e6338:T=1631381122:S=ALNI_MZy4R0J-x0cAs83AFAKkdxhxiPV0A; _lr_env_src_ats=false; panoramaId_expiry=1631985923693; _cc_id=e78ffe171e7dbdbb062659e75c4eca35; panoramaId=62e78db9004cfa649d8ef7caea9416d5393822d64845cc14222790bab385512c; pbjs-unifiedid=%7B%22TDID%22%3A%224e63b9da-9752-4cd7-8414-01cd95c32d32%22%2C%22TDID_LOOKUP%22%3A%22TRUE%22%2C%22TDID_CREATED_AT%22%3A%222021-08-11T17%3A25%3A23%22%7D; _lr_geo_location=US; notice_preferences=7:; notice_gdpr_prefs=0,1,2,3,4,5,6,7:; cmapi_gtm_bl=; cmapi_cookie_privacy=permit 1,2,3,4,5,6,7,8; Parent=True; Parent_unpaid=True; Zadanepl_cookie[Token][Long]=DuAwsau4YaZi4ZOZOyyVXWBxC9IE1t3UmpeWb6qReqM%3D; _hjIncludedInSessionSample=1; Zadanepl_cookie[isLoggedIn]=1; _hjAbsoluteSessionInProgress=0; __utma=153832555.2039844497.1631380499.1631409551.1631419457.5; __utmb=153832555.0.10.1631419457; cto_bidid=zEw8619GJTJCclFKRTlJcDIxakdyT0hSTHloY29CTEEyUzFyVk9RV3BrOXBoWndpb2VLZ1Z3Y1p5WXJCY2E5MzY3SGd5QXVXWEE1c2Q4a0Fmc0pLVTAwdmgwbGNVQVNSTnhXZmRTWnRVanBKa0F2TlA2QVIwNHJLdXRuTGNTdXNvM2pJUXpHZGlEQkE4UXhzY0RheHg1VllBazI1USUzRCUzRA; cto_bundle=9lFto19zeVIlMkJIT25KWE5KRXR3NkNrNURIeXNvU0RkMG5PZG1TeGklMkZ6T1BFUEo1cVBObTFNdEt3c1NsOWNDdzRBU0lWRGhsam8wME05TzUlMkZoNk9zSVVGcCUyQjlnOGVuS2dWYU5kSnFzRmZQSEZTbUtzbk42Q3pzcFBseUd0TCUyRkxpVjM5JTJGJTJCUzZRNEhlNE1sTUcxVzVkSFMlMkJJOXdpVlpqS1dwcTAlMkZCdWpHUVElMkZnWDV1byUyQmxKZjNKbUVwR0tnOHE1TEllR3Y3; _lr_retry_request=true; _parrable_id=eid%253A01.1631420191.de715c066f730c9049e3418408addd02f8ad8eac01d365fad6b328597d597ca80325f5cdad4ad0122350a52f4b8c563232c1880e2493ba651e07b863e422b1ef74c58b679226e70f4201%252Ctpc%253A0%252CtpcUntil%253A1631506591; _dc_gtm_UA-43896087-1=1; datadome=7d1sMeYYl0uE2YZbXgGloLHqi2J3_uu3wRY7h-rMb-5FR40JSA8OX_uwOB_x2522xmNeqYdFmajfQEHoiigt7bCDSOrwybpocSsaZHOBwr");
          
          xhr.send(data);
    })
}

let webpage = String(window.location.host)
let market = webpage.split('.')[1];

if (url === "https://brainly." + market + "/") {
    let menu2 = document.querySelector("body > div.js-page-wrapper > div > nav > div.brn-moderation-panel__content.sg-box.sg-box--padding-m.sg-box--shadow.js-moderation-panel-content > div > div.sg-content-box__content > div > ul")
    let topuser = document.createElement("li")
    topuser.className = "sg-menu-list__element"
    
    topuser.innerHTML = "<a style='color:black' id=query>Query Tool</strong></a>"
    
    menu2.prepend(topuser)
    document.getElementById("query").addEventListener('click',function(){
        let div = document.createElement("div")
        let style = document.createElement("style")
        style.innerHTML = `.sg-toplayer--modal{
            width:25%
        }
        .sg-text--large{
            font-weight:900;
        }
        .sg-textarea--full-width{
            width:300px;
            margin-right:15px;
        }`
        document.head.appendChild(style)
        div.innerHTML = `<div class="sg-overlay"><div class="sg-toplayer sg-toplayer--modal sg-toplayer--fit-content sg-toplayer--max-width-large"><div class="sg-toplayer__close"><div class="sg-icon sg-icon--gray-secondary sg-icon--x24"><svg class="sg-icon__svg"><use xlink:href="#icon-close"></use></svg></div></div><div class="sg-toplayer__wrapper"><div class="sg-content-box"><div class="sg-content-box__title sg-content-box__title--spaced-top sg-content-box__title--spaced-bottom-large"><div class="sg-text sg-text--large sg-text--gray sg-text--extra-bold">Content Finder</div></div><div class="sg-content-box__content"><div class="sg-content-box append"><div class="sg-content-box__content"><div class="sg-actions-list sg-actions-list--to-top sg-actions-list--no-wrap"><div class="sg-actions-list__hole sg-actions-list__hole--22-em"><div class="sg-content-box"><div class="sg-content-box__content"><textarea class="sg-textarea sg-textarea--tall sg-textarea--full-width sg-textarea--resizable" placeholder="Profile links or IDs"></textarea></div><div class="sg-content-box__actions"><div class="sg-actions-list sg-actions-list--space-between sg-actions-list--no-wrap"><div class="sg-actions-list__hole"><div class="sg-spinner-container"><div class="sg-text sg-text--xsmall"> <span class="sg-text--bold">0</span>  questions</div></div></div><div class="sg-actions-list__hole"><div class="sg-text sg-text--xsmall sg-text--blue-dark"> <span class="sg-text--bold">0</span>  users</div></div><div class="sg-actions-list__hole"><div class="sg-text sg-text--xsmall sg-text--peach-dark"> <span class="sg-text--bold">0</span>  deleted</div></div></div></div></div></div></div></div></div></div></div></div></div></div>`
        document.getElementsByClassName("js-page-wrapper")[0].appendChild(div)
        document.getElementsByClassName("sg-toplayer__close")[0].addEventListener("click",function(){
            this.parentElement.parentElement.remove();
        })
        let text = document.getElementsByClassName("sg-textarea--tall")[0]
        //setup before functions
        let typingTimer;                //timer identifier
        let doneTypingInterval = 1000;  //time in ms (5 seconds)
        let myInput = text

        //on keyup, start the countdown
        myInput.addEventListener('keyup', () => {
            clearTimeout(typingTimer);
            if (myInput.value || myInput.value==='') {
                typingTimer = setTimeout(doneTyping, doneTypingInterval);
            }
        });

        //user is "finished typing," do something
       
        function doneTyping () {
            
            function addFoundUser(){
                document.getElementsByClassName("sg-text sg-text--xsmall sg-text--blue-dark")[0].children[0].innerText = parseInt(document.getElementsByClassName("sg-text sg-text--xsmall sg-text--blue-dark")[0].children[0].innerText) + 1
            }
            function addFoundQuestion(){
                document.getElementsByClassName("sg-spinner-container")[0].children[0].children[0].innerText = parseInt(document.getElementsByClassName("sg-spinner-container")[0].children[0].children[0].innerHTML)+1
            }
            function reset(){
                document.getElementsByClassName("sg-spinner-container")[0].children[0].children[0].innerText = '0'
                document.getElementsByClassName("sg-text sg-text--xsmall sg-text--blue-dark")[0].children[0].innerText = '0'
                document.getElementsByClassName("sg-text sg-text--xsmall sg-text--peach-dark")[1].children[0].innerText = '0'
                let appended = document.getElementsByClassName("sg-actions-list sg-actions-list--space-evenly")
                for (let i = 0; i < appended.length; i++) {
                    appended[i].remove();
                }
            }
            function addDeleted(){
                document.getElementsByClassName("sg-text sg-text--xsmall sg-text--peach-dark")[1].children[0].innerText = parseInt(document.getElementsByClassName("sg-text sg-text--xsmall sg-text--peach-dark")[1].children[0].innerText)+1
            }
            if (text.value === ''){
                reset()
            } else {
                var lines = text.value.split(/[\n\r]+/); 
           
            for (let i = 0; i < lines.length; i++) {
                if (lines[i].includes("/profile/")===true){
                    function reqListener () {
                        let responseHTML = new DOMParser().parseFromString(this.responseText, "text/html")
                        if (this.status !== 200 || responseHTML.getElementsByClassName("avatar")[0].children[0].title === 'Deleted account'){
                             
                            let userDiv = document.createElement("div")
                            if (document.getElementById(lines[i])){
                                console.log("exists")
                            } else {
                                document.getElementsByClassName("append")[0].appendChild(userDiv)
                                userDiv.outerHTML = `<div id="${lines[i]}" class="sg-actions-list sg-actions-list--space-evenly"><div class="sg-actions-list__hole"><div class="sg-spinner-container sg-spinner-container--spaced"><div class="sg-box sg-box--padding-xs sg-flex--margin-top-xxs sg-flex--margin-bottom-xxs sg-box--gray-secondary-lightest"><div class="sg-actions-list"><div class="sg-actions-list__hole"><div class="sg-checkbox"><input class="sg-checkbox__element" type="checkbox" id="9g3vqlspmv"><label class="sg-checkbox__ghost" for="9g3vqlspmv"><div class="sg-icon sg-icon--adaptive sg-icon--x16"><svg class="sg-icon__svg"><use xlink:href="#icon-check"></use></svg></div></label></div></div><div class="sg-actions-list__hole"><div class="sg-avatar sg-avatar--spaced"><a href="https://brainly.com"><img class="sg-avatar__image" src="https://brainly.com/img/avatars/100-ON.png"></a></div></div><div class="sg-actions-list__hole sg-actions-list__hole--grow"><div class="sg-content-box"><div class="sg-content-box__content sg-content-box__content--full"><div class="sg-actions-list"><div class="sg-actions-list__hole"><a class="sg-text sg-text--small sg-text--gray sg-text--bold sg-text--link" href="https://brainly.com/img/avatars/100-ON.png">Deleted Account</a></div></div></div><div class="sg-content-box__content sg-content-box__content--full"><div class="sg-actions-list"><div class="sg-actions-list__hole"><div class="sg-text sg-text--xsmall sg-text--gray" title="User has 0 points">pts: 0</div></div></div></div></div></div></div></div></div></div></div></div></div>`
                            }
                            addDeleted()
                            addFoundUser()
                            
                        } else {
                            console.log(responseHTML.getElementsByClassName("avatar")[0].children[0].title)
                             
                            let userDiv = document.createElement("div")
                            
                            if (document.getElementById(responseHTML.getElementsByClassName("ranking")[0].children[0].children[0].href.split("/")[4].split("-")[1])){
                                console.log("exists")
                            } else {
                                document.getElementsByClassName("append")[0].appendChild(userDiv)
                                userDiv.outerHTML = `<div id="${String(responseHTML.getElementsByClassName("ranking")[0].children[0].children[0].href.split("/")[4].split("-")[1])}" class="sg-actions-list sg-actions-list--space-evenly"><div class="sg-actions-list__hole"><div class="sg-spinner-container sg-spinner-container--spaced"><div class="sg-box sg-box--padding-xs sg-flex--margin-top-xxs sg-flex--margin-bottom-xxs sg-box--gray-secondary-lightest"><div class="sg-actions-list"><div class="sg-actions-list__hole"><div class="sg-checkbox"><input class="sg-checkbox__element" type="checkbox" id="9g3vqlspmv"><label class="sg-checkbox__ghost" for="9g3vqlspmv"><div class="sg-icon sg-icon--adaptive sg-icon--x16"><svg class="sg-icon__svg"><use xlink:href="#icon-check"></use></svg></div></label></div></div><div class="sg-actions-list__hole"><div class="sg-avatar sg-avatar--spaced"><a href="${responseHTML.getElementsByClassName("avatar")[0].children[0].href}"><img class="sg-avatar__image" src="${responseHTML.getElementsByClassName("avatar")[0].children[0].children[0].src}"></a></div></div><div class="sg-actions-list__hole sg-actions-list__hole--grow"><div class="sg-content-box"><div class="sg-content-box__content sg-content-box__content--full"><div class="sg-actions-list"><div class="sg-actions-list__hole"><a class="sg-text sg-text--small sg-text--gray sg-text--bold sg-text--link" href="${responseHTML.getElementsByClassName("avatar")[0].children[0].href}">${responseHTML.getElementsByClassName("ranking")[0].children[0].innerText}</a></div></div></div><div class="sg-content-box__content sg-content-box__content--full"><div class="sg-actions-list"><div class="sg-actions-list__hole"><div class="sg-text sg-text--xsmall sg-text--gray" title="User has${responseHTML.getElementsByClassName("orange bold")[0].innerText.replaceAll(" ",",")} points">pts: ${responseHTML.getElementsByClassName("orange bold")[0].innerText.replaceAll(" ",",")}</div></div></div></div></div></div></div></div></div></div></div></div></div>`
                            }
                            addFoundUser()
                        }
                      }
                      
                      var oReq = new XMLHttpRequest();
                      oReq.addEventListener("load", reqListener);
                      oReq.open("GET", lines[i]);
                      oReq.send();
                }else if (lines[i].includes("/question/")===true){
                    function reqListener () {
                        let responseHTML = new DOMParser().parseFromString(this.responseText, "text/html")
                        if (this.status === 200 && JSON.parse(responseHTML.getElementsByClassName("js-main-question js-react-question-box")[0].getAttribute("data-z"))["is_deleted"]!==true){
                            
                             
                            addFoundQuestion()
                            let questionDiv = document.createElement("div")
                            if (document.getElementById(lines[i])){
                                console.log("exists")
                            } else {
                                document.getElementsByClassName("append")[0].appendChild(questionDiv)
                                let ptsForResponse = JSON.parse(responseHTML.getElementsByClassName("js-main-question js-react-question-box")[0].getAttribute("data-z"))["pointsForResponse"]
                                questionDiv.outerHTML = `<div id="${lines[i]}" class="sg-actions-list sg-actions-list--space-evenly"><div class="sg-actions-list__hole"><div class="sg-spinner-container sg-spinner-container--spaced"><div class="sg-box sg-box--padding-xs sg-flex--margin-top-xxs sg-flex--margin-bottom-xxs sg-box--gray-secondary-lightest"><div class="sg-actions-list"><div class="sg-actions-list__hole"><div class="sg-checkbox"><input class="sg-checkbox__element" type="checkbox" id="9g3vqlspmv"><label class="sg-checkbox__ghost" for="9g3vqlspmv"><div class="sg-icon sg-icon--adaptive sg-icon--x16"><svg class="sg-icon__svg"><use xlink:href="#icon-check"></use></svg></div></label></div></div><div class="sg-actions-list__hole"><div class="sg-avatar sg-avatar--spaced"><a href="https://brainly.com"><img class="sg-avatar__image" src="https://brainly.com/img/avatars/100-ON.png"></a></div></div><div class="sg-actions-list__hole sg-actions-list__hole--grow"><div class="sg-content-box"><div class="sg-content-box__content sg-content-box__content--full"><div class="sg-actions-list"><div class="sg-actions-list__hole"><a class="sg-text sg-text--small sg-text--gray sg-text--bold sg-text--link" href="${lines[i]}">Question ${lines[i].split("/")[4].split("?")[0]}</a></div></div></div><div class="sg-content-box__content sg-content-box__content--full"><div class="sg-actions-list"><div class="sg-actions-list__hole"><div class="sg-text sg-text--xsmall sg-text--gray" title="oints">pts for answer: ${ptsForResponse}</div></div></div></div></div></div></div></div></div></div></div></div></div>`
                            }
                        } else {
                             
                            addFoundQuestion()
                            let userDiv = document.createElement("div")
                            let ptsForResponse = JSON.parse(responseHTML.getElementsByClassName("js-main-question js-react-question-box")[0].getAttribute("data-z"))["pointsForResponse"]
                            if (document.getElementById(lines[i])){
                                console.log("exists")
                            } else {
                                document.getElementsByClassName("append")[0].appendChild(userDiv)
                                userDiv.outerHTML = `<div id="${lines[i]}" class="sg-actions-list sg-actions-list--space-evenly"><div class="sg-actions-list__hole"><div class="sg-spinner-container sg-spinner-container--spaced"><div class="sg-box sg-box--padding-xs sg-flex--margin-top-xxs sg-flex--margin-bottom-xxs sg-box--gray-secondary-lightest"><div class="sg-actions-list"><div class="sg-actions-list__hole"><div class="sg-checkbox"><input class="sg-checkbox__element" type="checkbox" id="9g3vqlspmv"><label class="sg-checkbox__ghost" for="9g3vqlspmv"><div class="sg-icon sg-icon--adaptive sg-icon--x16"><svg class="sg-icon__svg"><use xlink:href="#icon-check"></use></svg></div></label></div></div><div class="sg-actions-list__hole"><div class="sg-avatar sg-avatar--spaced"><a href="https://brainly.com"><img class="sg-avatar__image" src="https://brainly.com/img/avatars/100-ON.png"></a></div></div><div class="sg-actions-list__hole sg-actions-list__hole--grow"><div class="sg-content-box"><div class="sg-content-box__content sg-content-box__content--full"><div class="sg-actions-list"><div class="sg-actions-list__hole"><a class="sg-text sg-text--small sg-text--gray sg-text--bold sg-text--link" href="${lines[i]}">Deleted Question</a></div></div></div><div class="sg-content-box__content sg-content-box__content--full"><div class="sg-actions-list"><div class="sg-actions-list__hole"><div class="sg-text sg-text--xsmall sg-text--gray" title="User has 0 points">pts: ${ptsForResponse}</div></div></div></div></div></div></div></div></div></div></div></div></div>`
                            }
                            addDeleted()
                            
                        }
                      }
                      
                      var oReq = new XMLHttpRequest();
                      oReq.addEventListener("load", reqListener);
                      oReq.open("GET", lines[i]);
                      oReq.send();
                } else {
                    function reqListener () {
                        let responseHTML = new DOMParser().parseFromString(this.responseText, "text/html")
                        if (this.status !== 200 || responseHTML.getElementsByClassName("avatar")[0].children[0].title === 'Deleted account'){
                             
                            addDeleted()
                            let userDiv = document.createElement("div")
                            if (document.getElementById(lines[i])){
                                console.log("exists")
                            } else {
                                document.getElementsByClassName("append")[0].appendChild(userDiv)
                                userDiv.outerHTML = `<div id="${lines[i]}" class="sg-actions-list sg-actions-list--space-evenly"><div class="sg-actions-list__hole"><div class="sg-spinner-container sg-spinner-container--spaced"><div class="sg-box sg-box--padding-xs sg-flex--margin-top-xxs sg-flex--margin-bottom-xxs sg-box--gray-secondary-lightest"><div class="sg-actions-list"><div class="sg-actions-list__hole"><div class="sg-checkbox"><input class="sg-checkbox__element" type="checkbox" id="9g3vqlspmv"><label class="sg-checkbox__ghost" for="9g3vqlspmv"><div class="sg-icon sg-icon--adaptive sg-icon--x16"><svg class="sg-icon__svg"><use xlink:href="#icon-check"></use></svg></div></label></div></div><div class="sg-actions-list__hole"><div class="sg-avatar sg-avatar--spaced"><a href="https://brainly.com"><img class="sg-avatar__image" src="https://brainly.com/img/avatars/100-ON.png"></a></div></div><div class="sg-actions-list__hole sg-actions-list__hole--grow"><div class="sg-content-box"><div class="sg-content-box__content sg-content-box__content--full"><div class="sg-actions-list"><div class="sg-actions-list__hole"><a class="sg-text sg-text--small sg-text--gray sg-text--bold sg-text--link" href="https://brainly.com/img/avatars/100-ON.png">Deleted Account</a></div></div></div><div class="sg-content-box__content sg-content-box__content--full"><div class="sg-actions-list"><div class="sg-actions-list__hole"><div class="sg-text sg-text--xsmall sg-text--gray" title="User has 0 points">pts: 0</div></div></div></div></div></div></div></div></div></div></div></div></div>`
                            }
                            addFoundUser()
                        } else {
                            console.log(responseHTML.getElementsByClassName("avatar")[0].children[0].title)
                             
                            addFoundUser()
                            let userDiv = document.createElement("div")
                            
                            if (document.getElementById(responseHTML.getElementsByClassName("ranking")[0].children[0].children[0].href.split("/")[4].split("-")[1])){
                                console.log("exists")
                            } else {
                                document.getElementsByClassName("append")[0].appendChild(userDiv)
                                userDiv.outerHTML = `<div id="${String(responseHTML.getElementsByClassName("ranking")[0].children[0].children[0].href.split("/")[4].split("-")[1])}" class="sg-actions-list sg-actions-list--space-evenly"><div class="sg-actions-list__hole"><div class="sg-spinner-container sg-spinner-container--spaced"><div class="sg-box sg-box--padding-xs sg-flex--margin-top-xxs sg-flex--margin-bottom-xxs sg-box--gray-secondary-lightest"><div class="sg-actions-list"><div class="sg-actions-list__hole"><div class="sg-checkbox"><input class="sg-checkbox__element" type="checkbox" id="9g3vqlspmv"><label class="sg-checkbox__ghost" for="9g3vqlspmv"><div class="sg-icon sg-icon--adaptive sg-icon--x16"><svg class="sg-icon__svg"><use xlink:href="#icon-check"></use></svg></div></label></div></div><div class="sg-actions-list__hole"><div class="sg-avatar sg-avatar--spaced"><a href="${responseHTML.getElementsByClassName("avatar")[0].children[0].href}"><img class="sg-avatar__image" src="${responseHTML.getElementsByClassName("avatar")[0].children[0].children[0].src}"></a></div></div><div class="sg-actions-list__hole sg-actions-list__hole--grow"><div class="sg-content-box"><div class="sg-content-box__content sg-content-box__content--full"><div class="sg-actions-list"><div class="sg-actions-list__hole"><a class="sg-text sg-text--small sg-text--gray sg-text--bold sg-text--link" href="${responseHTML.getElementsByClassName("avatar")[0].children[0].href}">${responseHTML.getElementsByClassName("ranking")[0].children[0].innerText}</a></div></div></div><div class="sg-content-box__content sg-content-box__content--full"><div class="sg-actions-list"><div class="sg-actions-list__hole"><div class="sg-text sg-text--xsmall sg-text--gray" title="User has${responseHTML.getElementsByClassName("orange bold")[0].innerText.replaceAll(" ",",")} points">pts: ${responseHTML.getElementsByClassName("orange bold")[0].innerText.replaceAll(" ",",")}</div></div></div></div></div></div></div></div></div></div></div></div></div>`
                            }
                            
                            

                        }
                      }
                      
                      var oReq = new XMLHttpRequest();
                      oReq.addEventListener("load", reqListener);
                      oReq.open("GET", "https://brainly.com/profile/user-"+lines[i]);
                      oReq.send();
                }
            }
            
            }
            
        }
        
       
    })
    async function f() {
        
        let promise = new Promise((resolve, reject) => {
            setTimeout(() => resolve(loadedhome()), 5000)
            let div = document.createElement("div")
            area.appendChild(div)
            div.outerHTML = '<div class="sg-box sg-box--padding-m sg-box--border-color-gray-secondary-lightest sg-box--border"><div class="sg-flex sg-flex--full-width sg-flex--margin-bottom-s"><div class="sg-flex sg-flex--align-items-flex-start sg-flex--margin-right-s"><div class="sg-icon sg-icon--mustard sg-icon--x24"><svg style="fill:black!important" class="sg-icon__svg"><use xlink:href="#icon-settings"></use></svg></div></div><div class="sg-flex sg-flex--align-items-flex-end"><h1 class="sg-headline sg-headline--small">Online Moderators</h1></div></div><div class="sg-content-box__content sg-content-box__content--spaced-top"><div class="sg-animation-fade-in-fast appendhere"> </div><div class="sg-content-box"></div></div></div></div>';
            

            function get(user,id){


                var xhr = new XMLHttpRequest();
                xhr.withCredentials = true;
                
                xhr.addEventListener("readystatechange", function() {
                if(this.readyState === 4) {
                    
                    
                        this.responseHTML = document.getElementsByClassName("proceed btn btn-warning btn-mini")[1]
                        
                        //this.responseHTML.getElementsByClassName("green")[0].innerHTML
                        this.avatar = this.responseHTML.querySelector("#main-left > div.personal_info > div.header > div.avatar > a > img").src
                        this.usernameprofile = this.responseHTML.querySelector("#main-left > div.personal_info > div.header > div.info > div.info_top > span.ranking > h2 > a").innerHTML
                        this.rank = this.responseHTML.getElementsByClassName("rank")[0].children[0].children[0].innerHTML
                        this.link = this.responseHTML.getElementsByClassName("avatar")[0].children[0].href
                        this.online = this.responseHTML.getElementsByClassName("green")[0].innerHTML
                
                        if (this.online !== undefined && this.online !== null){
                        
                            
                                    
                                this.isOn = "true"
                                let nicks = document.getElementsByClassName("modname")
                                if (String(this.online) === "\nonline "){
                                    let ele = document.createElement("div")
                                    let contain = document.getElementsByClassName("appendhere")[0]
                                    contain.appendChild(ele)
                                    ele.outerHTML = '<div class="sg-content-box sg-content-box--full"><div class="sg-content-box__content sg-content-box__content--spaced-top-small"><div class="sg-actions-list"><div class="sg-actions-list__hole"><div data-test="ranking-item-avatar" class="sg-avatar sg-avatar--spaced"><a ><img class="sg-avatar__image modimg" src="/img/avatars/100-ON.png"></a></div></div><div class="sg-actions-list__hole sg-actions-list__hole--grow"><a  class="sg-text sg-text--link-unstyled sg-text--bold"><span class="sg-text sg-text--small sg-text--gray sg-text--bold modname">User</span></a></div><div class="sg-actions-list__hole"><span class="sg-text sg-text--small sg-text--gray sg-text--bold modrank">Rank</span></div></div></div></div>'
                                    if (String(document.getElementsByClassName("modname")[0].innerHTML) === "User"){
                                        document.getElementsByClassName("modname")[0].innerHTML = this.usernameprofile
                                        document.getElementsByClassName("modname")[0].parentElement.href = this.link
                                        document.getElementsByClassName("modimg")[0].src = this.avatar
                                        
                                        document.getElementsByClassName("modrank")[0].innerHTML = this.rank
                                    } else if (String(document.getElementsByClassName("modname")[1].innerHTML) === "User"){
                                        document.getElementsByClassName("modname")[1].innerHTML = this.usernameprofile
                                        document.getElementsByClassName("modname")[1].parentElement.href = this.link
                                        
                                        document.getElementsByClassName("modimg")[1].src = this.avatar
                                        document.getElementsByClassName("modrank")[1].innerHTML = this.rank
                                    } else if (String(document.getElementsByClassName("modname")[2].innerHTML) === "User"){
                                        document.getElementsByClassName("modname")[2].innerHTML = this.usernameprofile
                                        document.getElementsByClassName("modname")[2].parentElement.href = this.link
                                        document.getElementsByClassName("modimg")[2].src = this.avatar
                                        document.getElementsByClassName("modrank")[2].innerHTML = this.rank
                                    } else if (String(document.getElementsByClassName("modname")[3].innerHTML) === "User"){
                                        document.getElementsByClassName("modname")[3].innerHTML = this.usernameprofile
                                        document.getElementsByClassName("modimg")[3].src = this.avatar
                                        document.getElementsByClassName("modname")[3].parentElement.href = this.link
                                        document.getElementsByClassName("modrank")[3].innerHTML = this.rank
                                    } else if (String(document.getElementsByClassName("modname")[4].innerHTML) === "User"){
                                        document.getElementsByClassName("modname")[4].innerHTML = this.usernameprofile
                                        document.getElementsByClassName("modimg")[4].src = this.avatar
                                        document.getElementsByClassName("modname")[4].parentElement.href = this.link
                                        document.getElementsByClassName("modrank")[4].innerHTML = this.rank
                                    }
                                    
                                }
                        
                                
                            
                    }
                
                    
                    
                
                    
                    }
                    });
                    
                    xhr.open("GET", "https://brainly.com/profile/"+user+"-"+id+"");
                    xhr.send();
                    
                }
                
               
        });

        let result = await promise; // wait until the promise resolves (*)
        


    }

    f();
    
    
        

    
    var xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.addEventListener("readystatechange", function() {
    if(this.readyState === 4) {
        let parsed = JSON.parse(this.responseText)
        let topmod = parsed["users_data"][0]["nick"]
        let menu = document.querySelector("body > div.js-page-wrapper > div > nav > div.brn-moderation-panel__content.sg-box.sg-box--padding-m.sg-box--shadow.js-moderation-panel-content > div > div.sg-content-box__content > div > ul")
        
        let footer = document.querySelector("body > div.js-page-wrapper > div > footer > div > div")
        
        let quickcustom = document.createElement("button")
        quickcustom.className = "mod-misc"
        quickcustom.id = "linkx"
        quickcustom.innerHTML = 'Extension Options'
        
        footer.appendChild(quickcustom)
        let fetchnotes = document.createElement("button")
        fetchnotes.className = "mod-misc"
        fetchnotes.id = "notes"
        fetchnotes.innerHTML = 'Fetch All Notes'
        footer.appendChild(fetchnotes)
        document.getElementById('notes').addEventListener("click",function(){
            
            notes()
        })
        document.getElementById('linkx').addEventListener("click",function(){
            console.log("Sent")
            chrome.runtime.sendMessage({type: "notification", options: { 
                type: "notification", 
                
                title: "options",
                message: 'msg'
            }});
        })
        //document.getElementById("username").innerText = topmod;
        document.getElementById("link").style.color = "black";
    }
    });

    xhr.open("GET", "https://brainly.com/api/28/api_global_rankings/view/0/10");
    xhr.setRequestHeader("authority", "brainly.com");
    xhr.setRequestHeader("sec-ch-ua", "\"Chromium\";v=\"92\", \" Not A;Brand\";v=\"99\", \"Google Chrome\";v=\"92\"");
    xhr.setRequestHeader("accept", "application/json");
    xhr.setRequestHeader("sec-ch-ua-mobile", "?0");
    xhr.setRequestHeader("user-agent", "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.159 Safari/537.36");
    xhr.setRequestHeader("content-type", "application/json");
    xhr.setRequestHeader("sec-fetch-site", "same-origin");
    xhr.setRequestHeader("sec-fetch-mode", "cors");
    xhr.setRequestHeader("sec-fetch-dest", "empty");
    xhr.setRequestHeader("referer", "https://brainly.com/moderation/ranking");
    xhr.setRequestHeader("accept-language", "en-US,en;q=0.9");
    xhr.setRequestHeader("cookie", "_gcl_au=1.1.457574581.1629564373; _ga=GA1.2.1513956525.1629564373; notice_behavior=implied,us; _dlt=1; _fbp=fb.1.1629564373505.1998992217; _hjid=1b581735-7fba-4927-ab75-8f52ccbf31ef; Zadanepl_cookie[Token][Guest]=I3jtbbrGxVL0SPFHvqBqxOB3bPr6UOT7rNvQCjV6pki8AYjNLFOTanqAoBIx2zh5oE1gsScqTxDnjOtk; G_ENABLED_IDPS=google; G_AUTHUSER_H=0; _pubcid=c44c475d-5a0c-47ee-a432-d1fcec050015; __gads=ID=43f6bb06d45182e0:T=1629565095:S=ALNI_MZZHicHRY2zqn5wCpVUBT3NyhGNOA; zadane_sid=1835df81de64477c28e2ef0703323663; __utmc=153832555; __utmz=153832555.1629565100.1.1.utmcsr=(direct)|utmccn=(direct)|utmcmd=(none); notice_preferences=7:; notice_gdpr_prefs=0,1,2,3,4,5,6,7:; cmapi_gtm_bl=; cmapi_cookie_privacy=permit 1,2,3,4,5,6,7,8; _cc_id=e78ffe171e7dbdbb062659e75c4eca35; panoramaId=62e78db9004cfa649d8ef7caea9416d5393822d64845cc14222790bab385512c; mp_f152bf766eec4e74f98b0e4d38183926_mixpanel=%7B%22distinct_id%22%3A%20%2217b6f209269ae5-0977486624c68a-35667c03-384000-17b6f20926ae83%22%2C%22%24device_id%22%3A%20%2217b6f209269ae5-0977486624c68a-35667c03-384000-17b6f20926ae83%22%2C%22%24initial_referrer%22%3A%20%22%24direct%22%2C%22%24initial_referring_domain%22%3A%20%22%24direct%22%7D; _gid=GA1.2.1381067085.1630125470; viewer_uid=VlFzbXJXN2thU2VZai9LRGxudlYwQ29neUJwc014MnNqYzR5d3NLb2dGND0tLWlDSDZ1Z1cvN2c5T3I3OUhvcmo2WXc9PQ%3D%3D--e79c18e037a487ad4c50ffc0e6b05bcc8fa0be49; panoramaId_expiry=1630814368284; ocean_session=1630260204271.phr2xxkc; first_visit=1630260217; myHash=0b837478babaf18b9f6b32d84455bce5; Zadanepl_cookie[Token][Long]=r_rTz0L2Wpsdtyasb-lGkvvt82Jl-06WJ_BW8n1N-Rs%3D; authHash=aab5705f25c3dd06b0ee7598db1bdaa5; cnx_userId=fa6b93f2ac1f41238c5c5cf726518e96; _pbjs_userid_consent_data=3524755945110770; _lr_env_src_ats=false; pbjs-unifiedid=%7B%22TDID%22%3A%224e63b9da-9752-4cd7-8414-01cd95c32d32%22%2C%22TDID_LOOKUP%22%3A%22TRUE%22%2C%22TDID_CREATED_AT%22%3A%222021-07-29T18%3A13%3A56%22%7D; user_token=ZlZwTmkzZFM1STJwLysyMkJjbldDSkMxK0wzQk90dWh6My9vY2VWVjFxdz0tLThidVhIV09MdEVsb3lBeU5rVC9kdGc9PQ%3D%3D--7af2fef10dcf128bec6b2fae3f92a8cea273e8a4; amplitude_id_710046ca554fe7c78d358b8c5e09a168brainly.com=eyJkZXZpY2VJZCI6IjE5MmM1NzBlLWFjODgtNGJiZS1hZTkyLWIxN2M3NGIyMzUzMVIiLCJ1c2VySWQiOm51bGwsIm9wdE91dCI6ZmFsc2UsInNlc3Npb25JZCI6MTYzMDY0MzY5NzA2MCwibGFzdEV2ZW50VGltZSI6MTYzMDY0MzcyNDU5MCwiZXZlbnRJZCI6ODgsImlkZW50aWZ5SWQiOjAsInNlcXVlbmNlTnVtYmVyIjo4OH0=; Student_unpaid=True; Student=True; _hjIncludedInSessionSample=1; _gaexp=GAX1.2.sx1URVOyRTaGOZxjVmhDPw.18878.0u0021upQmcKy6Th2Yy8qqID9bRw.18962.0; Zadanepl_cookie[isLoggedIn]=1; __utma=153832555.1513956525.1629564373.1630712063.1630732540.43; __utmb=153832555.0.10.1630732540; _hjAbsoluteSessionInProgress=0; cto_bidid=3dVOCl9NV3pkZDhMVEpPWCUyRlBIJTJCdkltb0pWUXVsY1N3c0wycFlqelUlMkZjQzZOM01CJTJCTFFsdWtvUVZoakdFSSUyRmpiZUtwbTlnOWJKWFBGZkdQRHlkMiUyQjdic0RqaWROT3JINVREQmJicmpIdnNzJTJCaiUyQkdSQTFpQVdDNEpBUm4yTlRNRU9ienQzRGM5bXlOMVlFSzYlMkZWNjUwQk1BQVElM0QlM0Q; cto_bundle=qk1ryF9jSzBwVWNrYmhnOGowSHhHcDdFOHVyYzJVNURMdW9NVjBLT0RoWXhoS2ZhJTJCS1NDeFdUckJRU1NVZU5qYiUyQkJiYzJybVklMkJYa2t4QWYlMkJaMVpES1lwJTJCJTJCWHZaJTJCOU5PcjNtM2d4ZHpGanZZUjE4ZlltTFpuTlJnc29IakZhSnlZdnNHVmFFVkUxJTJGM3J6JTJGRGM2eG1YMnVPSUtRbU13RmEzakV4WFo3aWhLYko1clYycSUyQmhXJTJGSSUyRjIlMkZhclNoZE94V1hzRA; _lr_retry_request=true; datadome=RB_xxx-aSgq4DahkHgmasM3Jpl37_-7tVsujfhA2Eja_LCTVK~TKA6BK3B21~~kc_0h8SKqA0ajJ-H74Qsgnr5bLNBQLklmae.BRAJJ~Zg");

    xhr.send();
    
    class ModCount {
        constructor(){

       
        let menu = document.querySelector("body > div.js-page-wrapper > div > nav > div.brn-moderation-panel__content.sg-box.sg-box--padding-m.sg-box--shadow.js-moderation-panel-content > div > div.sg-content-box__content > div > ul")
        let queuecount = document.createElement("li")
        queuecount.className = "sg-menu-list__element"
        
        queuecount.innerHTML = "<a id=link href=/tasks/archive_mod> Queue Count: <strong id=count></strong></a>"
        
        menu.prepend(queuecount)
        this.Init().then(() => document.getElementById("count").innerText = (this.totalActions.split("(")[1].split(")")[0]), document.getElementById("link").style.color = "black").catch(console.error)
        }
        
    async Init(){
        this.response = await this.requestPage()
        this.responseText = await this.response.text()
        this.responseHTML = new DOMParser().parseFromString(this.responseText, "text/html")
        this.totalActions = this.responseHTML.querySelector("#moderate-functions > ul > li.marked > a").innerText

        
        
    }

    async requestPage(){
        let response = await fetch("https://brainly.com/tasks/archive_mod", {
            redirect: "manual",
            method: "GET",
            credentials: "include"
        })

        if(!response || [0, 302].includes(response.status)) throw "You cannot view this moderator's actions"
        if(!response.ok && response.status != 200) throw "Request failed"
  
        return response
    }
        
}

    class Actions {
        constructor(moderatorID){
            this.actionsUrl = `${window.document.location.origin}/moderation_new/view_moderator/${moderatorID}/page:99999999999999999999999999999999999`
            let menu = document.querySelector("body > div.js-page-wrapper > div > nav > div.brn-moderation-panel__content.sg-box.sg-box--padding-m.sg-box--shadow.js-moderation-panel-content > div > div.sg-content-box__content > div > ul")
            let totalactionelement = document.createElement("li")
            totalactionelement.className = "sg-menu-list__element"
            
            totalactionelement.innerHTML = "<a id=link href=https://brainly.com/moderation_new/view_moderator/"+moderatorID+"> Total Actions: <strong id=actions></strong></a>"
            
            menu.prepend(totalactionelement)
            let totalusercount = document.createElement("li")
            totalusercount.className = "sg-menu-list__element"
            
            totalusercount.innerHTML = "<a id=link href='https://docs.google.com/spreadsheets/d/1LqCyb30rVq5l1y39t53pdSFWKH1icQOnH07YaZxjmNg/edit#gid=0'> Extension Users: <strong id=usercount></strong></a>"
            
            menu.prepend(totalusercount)
            document.getElementById("usercount").innerText = localStorage.getItem("ucount")
            this.Init().then(() => document.getElementById("actions").innerText = (this.totalActions), document.getElementById("link").style.color = "black").catch(console.error)
        }
            
        async Init(){
            this.response = await this.requestPage()
            this.responseText = await this.response.text()
            this.responseHTML = new DOMParser().parseFromString(this.responseText, "text/html")
            this.userNick = this.responseHTML.querySelector("h1.alignCenter.marginTop.marginBottom > a.nick").innerText
    
            this.actionsElements = this.responseHTML.querySelector("div.numbers > span.current")
            if(!this.actionsElements) return
    
            this.totalPages = Number(this.actionsElements.innerText)
            this.lastPageTotalActions = this.responseHTML.querySelectorAll(".activities > tbody > tr").length
            this.totalActions = (this.totalPages - 1) * 15 + this.lastPageTotalActions
        }
    
        async requestPage(){
            let response = await fetch(this.actionsUrl, {
                redirect: "manual",
                method: "GET",
                credentials: "include"
            })
    
            if(!response || [0, 302].includes(response.status)) throw "You cannot view this moderator's actions"
            if(!response.ok && response.status != 200) throw "Request failed"
      
            return response
        }
    }
    function getMeta(metaName) {
        const metas = document.getElementsByTagName('meta');
    
        for (let i = 0; i < metas.length; i++) {
            if (metas[i].getAttribute('name') === metaName) {
                return metas[i].getAttribute('content');
            }
        }
    
        return '';
    }
    
    let data = getMeta('user_data')
    let userid = JSON.parse(data)["id"]
    new Actions(userid)
    new ModCount()
    let img = JSON.parse(data)["avatar"]
    let username = JSON.parse(data)["nick"]
    let showed = localStorage.getItem("showed")
    let menu = document.querySelector("body > div.js-page-wrapper > div > nav > div.brn-moderation-panel__content.sg-box.sg-box--padding-m.sg-box--shadow.js-moderation-panel-content > div > div.sg-content-box__content > div > ul")
    let inputel = document.createElement("li")
    inputel.id = "inputel"
    inputel.innerHTML = `<input style='height:35px' id='searchbox' placeholder='Search Users' autocomplete = 'off'></input><button id='gobutton' style='height:40px; width: 40px; top: 1%; fill: rgb(0, 137, 227);'  id='search'>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g data-name="Layer 2"><g data-name="search"><rect width="24" height="24" opacity="0"/><path d="M20.71 19.29l-3.4-3.39A7.92 7.92 0 0 0 19 11a8 8 0 1 0-8 8 7.92 7.92 0 0 0 4.9-1.69l3.39 3.4a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42zM5 11a6 6 0 1 1 6 6 6 6 0 0 1-6-6z"/></g></g></svg>
</button>`
    let searchresult = document.createElement("li")
    searchresult.className = "searchresult"
    menu.prepend(inputel)
    
    function getUser(user){
        let prev = document.getElementsByClassName("toremove")
                for (let o = 0; o < prev.length; o++) {
                    prev[o].style.display = "none"
                }
        
        
        function reqListener () {
            this.responseText = this.response.text
            this.responseHTML = new DOMParser().parseFromString(this.responseText, "text/html")
            this.allUsers = this.responseHTML.getElementsByClassName("user-data")
            var i;
            for (i = 0; i < this.allUsers.length; i++) {
                this.allUsers[i].image = this.allUsers[i].children[0].children[0].src
                if (String(this.allUsers[i].image) === "https://brainly.com/img/"){
                    this.allUsers[i].image = "https://brainly.com/img/avatars/100-ON.png"
                }
                this.allUsers[i].nick = this.allUsers[i].children[0].title
                this.allUsers[i].link = this.allUsers[i].children[0].href
                let menu = document.querySelector("body > div.js-page-wrapper > div > nav > div.brn-moderation-panel__content.sg-box.sg-box--padding-m.sg-box--shadow.js-moderation-panel-content > div > div.sg-content-box__content > div > ul")
                let username = document.createElement("a")
                username.className = "searchname"
                username.innerHTML = "<a><p>"+this.allUsers[i].nick+"</p></a>"
                username.href = this.allUsers[i].link
                let pfp = document.createElement("img")
                pfp.className = "searchpfp"
                pfp.src = this.allUsers[i].image
                let box = document.createElement("div")
                box.className = "toremove"
                inputel.appendChild(searchresult)
                searchresult.appendChild(box)
                box.appendChild(pfp)
                box.appendChild(username)
                if (i === 1){break}
            }
            
            
            
            
            
            
            
           
        }
        
        var oReq = new XMLHttpRequest();
        oReq.addEventListener("load", reqListener);
        oReq.open("GET", "https://brainly.com/users/search/"+user);
        oReq.send();
    }
    document.getElementById("gobutton").onclick = function find(){
        getUser(this.parentElement.children[0].value)
    }
    if (showed === undefined || showed === null){
        localStorage.setItem("showed",false)
    }
    if (showed === "false"){
        
        /*Swal.fire({
            title: 'Welcome, '+username+"!",
            text: 'Thanks for downloading the extension!',
            imageUrl: img,
            confirmButtonText: "Continue",
            showDenyButton:true,
            denyButtonText: "Continue and don't show this again",
            imageAlt: 'profileimage',
        }).then((result) => {
           
            if (result.isConfirmed) {
              //pass
            } else if (result.isDenied) {
              localStorage.setItem("showed",true)
            }
          })
          
        */
        
       
        document.getElementsByClassName("swal2-image")[0].style.borderRadius = "35%"
        
        
    }
    
}


function loadedmsg() {
    let topbar = document.querySelector("#private-messages-container > section.brn-messages__chatbox.brn-chatbox.js-chatbox > div > div:nth-child(4) > footer > div.sg-content-box.sg-content-box--spaced-top.js-chatbox-footer > div > div > div.sg-actions-list__hole.sg-actions-list__hole--to-end")
    let thmsg = document.createElement("button")
    let corrmsg = document.createElement("button")
    if (isadmin === "true") {
        topbar.appendChild(thmsg)
        thmsg.outerHTML = '<button id="INCOMPLETE" style="height:32px; font-size: 12px; top: 1px; background-color:rgb(251, 190, 46)"class="sg-button">\n' +
            '                        <span class="sg-button__text">INC</span>\n' +
            '                    </button>';
        document.getElementById("INCOMPLETE").addEventListener("click", function() {
            let textfield = document.querySelector("#private-messages-container > section.brn-messages__chatbox.brn-chatbox.js-chatbox > div > div:nth-child(4) > footer > div.sg-content-box.sg-content-box--spaced-top.js-chatbox-footer > div > div > div.sg-actions-list__hole.sg-actions-list__hole--grow > textarea")
            textfield.value = "Hey there! Brainly is all about giving students the tools they need to tackle future problems on their own, so it's important to always show your work. Your answers didn't contain enough explanation to follow our guidelines, so all of your answers have been removed. In the future, please be sure to elaborate and add more to your answers, such as full explanations, examples, and any information that can help our fellow Brainiacs. Thanks!"

        });

        topbar.appendChild(corrmsg)
        corrmsg.outerHTML = '<button id="CORRECTION" style="  margin-left: 4px; height:32px; font-size: 12px; top: 1px; background-color:rgb(251, 190, 46)"class="sg-button">\n' +
            '                        <span class="sg-button__text">COR</span>\n' +
            '                    </button>';
        document.getElementById("CORRECTION").addEventListener("click", function() {
            let textfield = document.querySelector("#private-messages-container > section.brn-messages__chatbox.brn-chatbox.js-chatbox > div > div:nth-child(4) > footer > div.sg-content-box.sg-content-box--spaced-top.js-chatbox-footer > div > div > div.sg-actions-list__hole.sg-actions-list__hole--grow > textarea")
            textfield.value = "Hi there! I'm a moderator here on Brainly and just wanted to send you a friendly reminder to check your notifications regarding the answer that we asked you to correct. Please remember that you can only edit it within the next 24 hours. Please do not respond to this message."

        });
    }



}

if (url.includes("message") === true) {
    async function f() {

        let promise = new Promise((resolve, reject) => {
            setTimeout(() => resolve(loadedmsg()), 1000)

        });

        let result = await promise; // wait until the promise resolves (*)

    }

    f();

}
if (url.includes("users/view") || url.includes("." + market + "/profile/")) {
    async function f() {

        let promise = new Promise((resolve, reject) => {
            setTimeout(() => resolve(loadedold()), 10000)

        });

        let result = await promise; // wait until the promise resolves (*)

    }

    f();
    let newlink = document.querySelector("#main-left > div.personal_info > a")
    newlink.innerHTML = "New Profile";
}
if (url.includes("/app/profile")) {
    async function f() {

        let promise = new Promise((resolve, reject) => {
            setTimeout(() => resolve(loadednew()), 1500)

        });

        let result = await promise; // wait until the promise resolves (*)

    }

    f();

}



function loadedold() {

    
    
   
    let answered = document.querySelector("#tabIdsolved > span > span > a")
    answered.innerHTML = "Answered"
    let asked = document.querySelector("#tabIdsubmitted > span > span > a")
    asked.innerHTML = "Asked"
    let friends = document.getElementsByClassName("avatar")
   



    url = url.replace("/profile","/app/profile");
    url = url.replace("user-","");

    let button = document.getElementById("a");
    button.href = (url);
    


}

let asked = null;

function loadedhome() {
    
    
    function remove(mynum) {

        let selecteddel = document.getElementById("delr" + mynum)

        if (selecteddel.value !== "0") {
            remove_dictionary = {
                "1": "'Too Many Questions'",
                "2": "'Link in Question'",
                "3": "'Essay or Project'",
                "4": "'Too Trivial'",
                "5": "'Brainly-Related Question'",
                "6": "'Wrong Subject'",
                "8": "'Default'",
                "9": "'Not English'",
                "10": "'Multiple Posting'",
                "12": "'Personal Information'",
                "13": "'Self Harm'",
                "14": "'Unclear Question'",
                "15": "'Unclear Attatchment'",
                "16": "'Too General'",
                "17": "'Incomplete Question'"
            };
            let rsn_no = String(selecteddel.value);
            let txtdel = remove_dictionary[rsn_no];

            if (rsn_no === "1") {
                id = 11;
                nm = "Multiple Posting"
                text = "Whoa there! Turns out there can be too much of a good thing. Your questions are great, but there are just too many rolled into one. Please post your questions individually to make sure other users can get the opportunity to help you. Thanks! For more information on what makes a great question, check out our Content Guidelines: https:\/\/faq.brainly.com\/hc\/en-us\/articles\/360014661139"
            }
            if (rsn_no === "2") {
                id = 15;
                nm = "Link In Question"
                text = "Your question has been removed because it contained a link to a website other than Brainly. Please keep in mind that links to outside sites or sources are not allowed. Thanks for keeping Brainly safe! For more information on what makes a great question, check out our Content Guidelines: https:\/\/faq.brainly.com\/hc\/en-us\/articles\/360014661139"
            }
            if (rsn_no === "3") {
                id = 17;
                nm = "Too Complex"
                text = "Your question has been removed because it was too complex. You'll need to complete this project on your own rather than asking other Brainly users to do it for you. If you have any specific questions about the assignment that could help you get started, feel free to post those instead!"
            }
            if (rsn_no === "4") {
                id = 30;
                nm = "Too Trivial"
                text = "Your question has been removed because it seems a bit too simple for other Brainly users to help with. This question can be solved with common knowledge or some help from a calculator. Other users won't be able to help you understand the problem by solving it for you. Please help keep the quality of Brainly high by posting some more challenging questions. Thanks!"
            }
            if (rsn_no === "5") {
                id = 67;
                nm = "Brainly-related Question"
                text = "It looks like you've asked a question about how to use Brainly! Since Brainly is only intended for help with school-related questions, we had to remove this one. Instead, check out our help site to see if your question has been answered here: faq.brainly.com. If you still need help, send us a message at https:\/\/brainly.com\/contact\/index and we'll get back to you soon!"
            }
            if (rsn_no === "6") {
                id = 75;
                nm = "Wrong Subject"
                text = "Whoops! It looks like you've posted your question under the wrong subject. If your question is in the wrong category, it may not be seen by a user who could help! Please repost your question under the correct subject so you can get the answer you need. If you can't find the specific class that you need help in, pick the subject that is most closely related. Thanks!"
            }
            if (rsn_no === "8") {
                id = 6;
                nm = "Default"
                text = "Your question violates our Community Guidelines, so we had to take it down. Please review the guidelines here: https:\/\/faq.brainly.com\/hc\/en-us\/articles\/360014661139. Thanks for being a team player!"
            }
            if (rsn_no === "9") {
                id = 9;
                nm = "Not English"
                text = "Hi! Hola! Salut! Hallo! It looks like you've posted a question in a language other than English. Please be sure to select \"World Languages\" when asking your question. Otherwise, if you live outside the United States or want to use Brainly in a different language, check out the other language versions of Brainly here: https:\/\/faq.brainly.com\/hc\/en-us\/articles\/115001185650-How-do-I-use-Brainly-in-a-different-language-"
            }
            if (rsn_no === "10") {
                id = 24;
                nm = "Multiple posting"
                text = "Whoops! It looks like this question has already been asked on Brainly. To ensure all questions get answered in a timely matter, we had to remove this duplicate question. Make sure to use the search bar to see if your question has already been answered before posting a new one. Thanks!"
            }
            if (rsn_no === "12") {
                id = 56;
                nm = "Personal Information"
                text = "Your question has been removed because it\u2019s not safe to share or ask for personal information online. Keep information like your real name, school name, address, and social media usernames to yourself!"
            }
            if (rsn_no === "13") {
                id = 72;
                nm = "Not A School Problem"
                text = "We had to remove your question because it was not school-related. More importantly, we're concerned about the content you are posting about wanting to hurt yourself, and we want to encourage you to seek help.\r\n\r\nWe recommend that you talk to a parent or other adult you trust about how you're feeling. If you'd prefer to get help from someone else, you can use the following resources to be connected with a trained staff member from a prevention service provider in your area:\r\n\r\nNational Phone Hotline: 1-800-273-TALK\r\nCrisis Text Line: http:\/\/www.crisistextline.org\/\r\nSafety on Brainly: https:\/\/faq.brainly.com\/hc\/en-us\/articles\/360013472580-Safety-on-Brainly-"
            }
            if (rsn_no === "14") {
                id = 18;
                nm = "Unclear Question"
                text = "Uh oh! It looks like your question is unclear or a bit confusing. Please double-check your assignment and make sure you have all the parts of the question and any details needed to solve it. For more information on what makes a great question, check out our Question Guidelines: https:\/\/faq.brainly.com\/hc\/en-us\/articles\/360011452800-Question-Guidelines."
            }
            if (rsn_no === "15") {
                id = 80;
                nm = "Unclear Attachment"
                text = "We love a good puzzle, but your attachment is unreadable! Please retake the photo and repost your question. Make sure the photo is clear and no parts of the question are cut off. For more information on what you can attach to your questions, check out this link: https:\/\/faq.brainly.com\/hc\/en-us\/articles\/360014748820"
            }
            if (rsn_no === "16") {
                id = 81;
                nm = "Too General"
                text = "Uh oh! It looks like your question is a bit too vague for other students to answer. Brainly is designed to give answers to specific homework questions. Rather than asking about a general topic, try to narrow your question down to one academic problem. Thanks!"
            }
            if (rsn_no === "17") {
                id = 82;
                nm = "Incomplete Question"
                text = "Uh oh! It looks like your question is missing some crucial information. Please repost it with any helpful information such as diagrams, excerpts, or answer choices needed to solve it. For more information on what makes a great question, check out our Question Guidelines: https:\/\/faq.brainly.com\/hc\/en-us\/articles\/360011452800-Question-Guidelines."
            }

            let delrep = String(document.getElementById("delete" + mynum).parentElement.parentElement.parentElement.parentElement.children[3].children[0].children[0].href)
            let x1 = delrep.replace("https://brainly.com/question/", "")
            let x2 = x1.substring(0, 8)
            let numdel = parseInt(x2, 10);
            let confdel = confirm("Are you sure you'd like to delete this question with reason " + txtdel + "?")
            
            var data = JSON.stringify({
                "model_id": numdel,
                "model_type_id": 1,
                "reason_id": id,
                "reason": text,
                "give_warning": false,
                "take_points": false,
                "return_points": true,
                "schema": ""
            });

            function getCookie(cname) {
                let name = cname + "=";
                let decodedCookie = decodeURIComponent(document.cookie);
                let ca = decodedCookie.split(';');
                for (let i = 0; i < ca.length; i++) {
                    let c = ca[i];
                    while (c.charAt(0) == ' ') {
                        c = c.substring(1);
                    }
                    if (c.indexOf(name) == 0) {
                        return c.substring(name.length, c.length);
                    }
                }
                return "";
            }

            token = getCookie("Zadanepl_cookie[Token][Long]")
            var xhr = new XMLHttpRequest();
            xhr.withCredentials = true;

            xhr.addEventListener("readystatechange", function() {
                if (this.readyState === 4) {
                    
                    let resp = JSON.parse(this.responseText);
                    if (resp["success"] === true) {
                        function getMeta(metaName) {
                            const metas = document.getElementsByTagName('meta');
                          
                            for (let i = 0; i < metas.length; i++) {
                              if (metas[i].getAttribute('name') === metaName) {
                                return metas[i].getAttribute('content');
                              }
                            }
                          
                            return '';
                          }
                        let datax = JSON.parse(getMeta('user_data'));
                        let usernamex = datax["nick"]
                        let idx = datax["id"]
                        let pfp = datax["avatar"]
                        console.log(mynum)
                        let username = document.querySelector("#main-content > div.sg-animation-fade-in-fast > div.brn-feed-items > div:nth-child("+mynum+") > div > div > div.brn-feed-item__avatar > div > div > a").title
                        chrome.runtime.sendMessage({type: "notification", options: { 
                            type: "notification", 
                            
                            title: "deleted",
                            message: '{"question":"'+String(delrep)+'","mod":"'+usernamex+'","modid":"'+idx+'","modpfp":"'+pfp+'","rsn":"'+String(text.replace(/['"]+/g, ''))+'","rsntxt":"'+String(nm)+'","asker":"'+username+'"}'
                        }});
                        
                        let question = document.querySelector("#main-content > div.sg-animation-fade-in-fast > div.brn-feed-items > div:nth-child("+mynum+")")
                        question.style.backgroundColor = "#FFC7BF"
                        let div = document.createElement("div")
                        div.innerHTML = '<div id="remove" class="sg-flash">\n'+
                        '    <div class="sg-flash__message sg-flash__message--success">\n'+
                        '      <div class="sg-text sg-text--bold sg-text--small sg-text--to-center">\n'+
                        '          Successfully removed https://brainly.com/question/'+ numdel +'\n'+
                        '      </div>\n'+
                        '  </div></div>';
                        
                        document.querySelector("body > div.js-page-wrapper > div > div.brn-header-container.brn-header-container--has-sub-navigation > div.js-main-header.brn-header.js-react-header-next.js-ads-screening-header.js-ads-top-offset-element > div.flash-messages-container.js-flash-messages.js-flash-messages-container").appendChild(div)
                        document.getElementById("remove").addEventListener("click",function(){
                            this.style.display = "none"
                        }) 
                    }
                }
            });
            if (confdel === true) {
                xhr.open("POST", "https://brainly.com/api/28/moderation_new/delete_task_content");
                xhr.setRequestHeader("authority", "brainly.com");
                xhr.setRequestHeader("x-b-token-long", String(token));
                xhr.setRequestHeader("accept", "text/plain, */*; q=0.01");
                xhr.setRequestHeader("content-type", "application/json");
                xhr.setRequestHeader("x-requested-with", "XMLHttpRequest");
                xhr.setRequestHeader("sec-ch-ua-mobile", "?0");

                xhr.setRequestHeader("origin", "https://brainly.com");
                xhr.setRequestHeader("sec-fetch-site", "same-origin");
                xhr.setRequestHeader("sec-fetch-mode", "cors");
                xhr.setRequestHeader("sec-fetch-dest", "empty");
                xhr.setRequestHeader("referer", "https://brainly.com/question/" + numdel + "");
                xhr.setRequestHeader("accept-language", "en-GB,en-US;q=0.9,en;q=0.8");
                xhr.send(data);
            } else {
                //pass
            }



        }


    }

    function report_content(mynum, iterate) {
        
        if (mynum !== "0") {
            console.log(mynum)
            console.log(iterate)
            let urlrep = String(document.getElementById("report" + iterate).parentElement.parentElement.parentElement.parentElement.parentElement.children[3].children[0].children[0].href)
            if (urlrep === undefined){
                urlrep = document.getElementById("report" + iterate).parentElement.parentElement.parentElement.parentElement.parentElement.children[4].children[0].children[0].href
            }
            console.log(urlrep)
            reasons_dictionary = {
                "1": "'Request a link or scan'",
                "2": "'Link to an unknown website'",
                "3": "'Reference link'",
                "4": "'Link to a provider'",
                "5": "'No Question'",
                "6": "'Incomplete Question'",
                "7": "'Too complex'",
                "8": "'Illogical Question'",
                "9": "'Too Trivial'",
                "10": "'Swear Words'",
                "11": "'Adult Content'",
                "12": "'Wrong Subject'",
                "13": "'Website Ad'",
                "14": "'Personal Info'",
                "15": "'Live Quiz'",
            };

            let rsn_no = String(mynum);
            let textrsn = reasons_dictionary[rsn_no];


            let conf = confirm("Are you sure you'd like to report this question with the reason " + textrsn + "?")




            var main;
            var sub;
            if (rsn_no === "1") {
                main = 1
                sub = 1
            }
            if (rsn_no === "2") {
                main = 1
                sub = 2
            }
            if (rsn_no === "3") {
                main = 1
                sub = 3
            }
            if (rsn_no === "4") {
                main = 1
                sub = 4
            }
            if (rsn_no === "5") {
                main = 2
                sub = 5
            }
            if (rsn_no === "6") {
                main = 2
                sub = 6
            }
            if (rsn_no === "7") {
                main = 2
                sub = 7
            }
            if (rsn_no === "8") {
                main = 2
                sub = 8
            }
            if (rsn_no === "9") {
                main = 2
                sub = 9
            }
            if (rsn_no === "10") {
                main = 3
                sub = 10
            }
            if (rsn_no === "11") {
                main = 3
                sub = 11
            }
            if (rsn_no === "12") {
                main = 4
                sub = null;
            }
            if (rsn_no === "13") {
                main = 5
                sub = null;
            }
            if (rsn_no === "14") {
                main = 6
                sub = null;
            }
            if (rsn_no === "15") {
                main = 7
                sub = null;
            }

            let p1 = urlrep.replace("https://brainly." + market + "/question/", "")
            let p2 = p1.substring(0, 8)

            let num = parseInt(p2, 10);

            var data = JSON.stringify({
                "abuse": {
                    "category_id": main,
                    "subcategory_id": sub,
                    "data": null
                },
                "model_id": num,
                "model_type_id": 1
            });

            var xhr = new XMLHttpRequest();
            xhr.withCredentials = true;

            xhr.addEventListener("readystatechange", function() {
                if (this.readyState === 4) {
                    
                    let resp = JSON.parse(this.responseText)
                    if (resp["success"] === true) {
                        //let question = document.querySelector("#main-content > div.sg-animation-fade-in-fast > div.brn-feed-items > div:nth-child("+mynum+")")
                        //question.style.backgroundColor = "#FFC7BF"
                        let div = document.createElement("div")
                        div.innerHTML = '<div id="remove" class="sg-flash">\n'+
                        '    <div class="sg-flash__message sg-flash__message--error">\n'+
                        '      <div class="sg-text sg-text--bold sg-text--small sg-text--to-center">\n'+
                        '          Successfully reported https://brainly.com/question/'+ num +'\n'+
                        '      </div>\n'+
                        '  </div></div>';
                        
                        document.querySelector("body > div.js-page-wrapper > div > div.brn-header-container.brn-header-container--has-sub-navigation > div.js-main-header.brn-header.js-react-header-next.js-ads-screening-header.js-ads-top-offset-element > div.flash-messages-container.js-flash-messages.js-flash-messages-container").appendChild(div)
                        document.getElementById("remove").addEventListener("click",function(){
                            this.style.display = "none"
                        }) 
                    }
                }
            });
            if (conf === true) {
                xhr.open("POST", "https://brainly." + market + "/api/28/api_moderation/abuse_report");
                xhr.setRequestHeader("authority", "brainly." + market + "");
                xhr.setRequestHeader("pragma", "no-cache");
                xhr.setRequestHeader("cache-control", "no-cache");
                xhr.setRequestHeader("sec-ch-ua", "\"Chromium\";v=\"92\", \" Not A;Brand\";v=\"99\", \"Google Chrome\";v=\"92\"");
                xhr.setRequestHeader("accept", "application/json");
                xhr.setRequestHeader("sec-ch-ua-mobile", "?0");
                xhr.setRequestHeader("user-agent", "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.131 Safari/537.36");
                xhr.setRequestHeader("content-type", "application/json");
                xhr.setRequestHeader("origin", "https://brainly." + market + "");
                xhr.setRequestHeader("sec-fetch-site", "same-origin");
                xhr.setRequestHeader("sec-fetch-mode", "cors");
                xhr.setRequestHeader("sec-fetch-dest", "empty");
                xhr.setRequestHeader("referer", "https://brainly." + market + "/question/" + num + "?answeringSource=feedPublic%2FhomePage%2F1");
                xhr.setRequestHeader("accept-language", "en-US,en;q=0.9");
                xhr.setRequestHeader("cookie", "_ga=GA1.2.211202751.1620608511; _hjid=eaeac083-d704-41d2-ba08-8be74afa6a65; _fbp=fb.1.1620608511315.877960442; __qca=P0-1877865342-1620608511264; _pbjs_userid_consent_data=3524755945110770; G_ENABLED_IDPS=google; Zadanepl_cookie[Token][Long]=Hs4xBkwiEtDVd1mIUNN4__TFcdikbd7jNgRkU-iRsG4%3D; hl=en_US; first_visit=1620609257; _gcl_au=1.1.822710551.1621184964; Zadanepl_cookie[Token][Guest]=C9h7gHYDFpr0XHFOQu7SZ77rd15LlLMh3WSkbcEmnDEn0V25GbmXLgMJeWtr8oomUEt7jEjrkMuwN17g; cnx_userId=5768603e29a04fbb9cdb8e4e23644448; ubvs=b4be9dcc-86ae-42a5-a779-03e4dc124bdb; _cc_id=bd2009932fcb784f15ea420d7c4984c6; __utmz=153832555.1626113388.107.2.utmcsr=google|utmccn=(organic)|utmcmd=organic|utmctr=(not%20provided); viewer_uid=Skc2WTN0aTJmUHpyWDFYSlAzdTZONjBQbU9lenNYekNlWXdXZldqOUFEST0tLTl3R2tCdDlEaGovQTc4bVp6aGU2cEE9PQ%3D%3D--de1f173b5fe41d34c75a2f0c74f2a561642b9b61; _lr_env_src_ats=false; idl_env=AuqW0_o1c_hLHVdjlxOnLK0yk27ESnb_wcxfwT0hAHz7XB16rnqe9043ppdpppZG2nB7mVFbwUt2bkyB-GwTPqfOcIe61ms5bXly; _gid=GA1.2.2026522036.1628538953; _gaexp=GAX1.2.sx1URVOyRTaGOZxjVmhDPw.18878.1u0021okAreRLPTDSPY91XftuZ4g.18935.2; ocean_session=1628611121751.14bch8tm; notice_behavior=implied,us; zadane_sid=6b6448458b5666e00d603f8bb7382dd6; __utmc=153832555; authHash=aab5705f25c3dd06b0ee7598db1bdaa5; __aaxsc=2; _pubcid=4f63351e-1e6b-4568-a4ab-27057540aae2; panoramaId_expiry=1629316186620; panoramaId=0d07a4d5c3a1e32adc81a2b7929e16d53938a6caa919b0260705a82a2a85457d; pbjs-unifiedid=%7B%22TDID%22%3A%226acb4038-a209-45f3-9bc6-1914b7300dbf%22%2C%22TDID_LOOKUP%22%3A%22TRUE%22%2C%22TDID_CREATED_AT%22%3A%222021-07-11T19%3A49%3A46%22%7D; _dlt=1; Student_unpaid=True; Student=True; _hjAbsoluteSessionInProgress=0; _hjIncludedInSessionSample=1; __utma=153832555.211202751.1620608511.1628807074.1628809100.160; aasd=2%7C1628809105534; cto_bidid=BQ8xMl9DcDNFUFV3WG43RXU4bGdBOXVRaWtlVUhPR1N2dkVMU0VTbVUlMkJQV2dXWkJZb1U1WlBkRDhSSGxCbzNWSkdxZUxFSWtDOGVCZkhIczBnOFdzSTRUZGUwWU4lMkYlMkZEYkdwcnRqOEdScnU3d2p0Qk1vRXhhZmt0JTJCQkxtSmxXWTBQWDh5VmNuU2J1aE5HbkdtVjElMkJReUMlMkZqeEElM0QlM0Q; cto_bundle=EwWRSF9sMkR4ellHYzdvUGpTSjBlWGJIZUdKNktMaDFVRnpaN2RsJTJCbTZxJTJCWlBidDB2cWtmU2NFVFZVWDVrbE9MNGdETVZEc3RHdHlTJTJCJTJGU2tkTEhtRzhEM2ZGRzFmUEZzbzdrTDQ0R0RONEltbk56N3MyRzNwYiUyRkJEbGpNR1c5YTg4Mmxnak55YTdGRzJ4aDhSZGVlUHd3RE1EYzZFYWYwMXFGZTlHZlRLQzl5cjJLM2pMTW1EeENvdkpJNWp0ZVlycUZG; _lr_geo_location=US; user_token=RGVwMzBodWFwcFJFbFhSc2l1d0ZEajB2OC93bjZac0RwOHFMSXlmZlJZZz0tLUw3RmFWc1pRNkN3VHF2YlF0UWk2MVE9PQ%3D%3D--d77f7d2fdaca0a9c4b35f1be813acd0845b513dc; amplitude_id_710046ca554fe7c78d358b8c5e09a168brainly." + market + "=eyJkZXZpY2VJZCI6IjAxZDU2NjVmLWFkYzgtNDRhNi1iMWQ1LTI0NDZjYzRkNjc3M1IiLCJ1c2VySWQiOm51bGwsIm9wdE91dCI6ZmFsc2UsInNlc3Npb25JZCI6MTYyODgwOTM5NDgxOCwibGFzdEV2ZW50VGltZSI6MTYyODgxMDA4OTAzMywiZXZlbnRJZCI6MzEsImlkZW50aWZ5SWQiOjAsInNlcXVlbmNlTnVtYmVyIjozMX0=; notice_preferences=0:; notice_gdpr_prefs=0:; cmapi_gtm_bl=ga-ms-ua-ta-asp-bzi-sp-awct-cts-csm-img-flc-fls-mpm-mpr-m6d-tc-tdc; cmapi_cookie_privacy=permit 1 required; Zadanepl_cookie[isLoggedIn]=1; _dc_gtm_UA-43896087-1=1; datadome=F0PRolvuIrsKZ-eYP57.5EYm6iNAbW8osbkj73rJNcUgaiLrrkb.UBA7JziMMAzvvcOhSQNBbm.FPR6tuDv-FWNSwPi~PHx._3n3j-zFcE");
                xhr.send(data);
            } else {
                //pass
            }




        }

    }
    let ask = document.querySelector(".sg-button__text")
    let panel = document.getElementsByClassName("brn-feed-item__footer")
    var i;
    for (i = 0; i < panel.length + 1; i++) {
        let report = document.createElement("button")
        let ticket = document.createElement("button")
        let show = document.createElement("button")
        let more = document.createElement("button")
        if (i !== 0) {
            let section = document.querySelector("#main-content > div.sg-animation-fade-in-fast > div.brn-feed-items > div:nth-child(" + i + ") > div > div > div.brn-feed-item__footer > div > div")
            let question = document.querySelector("#main-content > div.sg-animation-fade-in-fast > div.brn-feed-items > div:nth-child(" + i +") > div > div")
            if (section.id === "") {
                question.appendChild(report)
                const button = "report" + i
                const constant = i
                let isadmin = localStorage.getItem("0576474418")
                if (isadmin === "true") {
                    section.appendChild(ticket)


                    ticket.outerHTML = '<button class="sg-button sg-button--s sg-button--solid dropdownmod" id="delete' + i + '" style="margin-left:15px; background-color:black; color:white; border-width:2px; border-style:solid; border-color:black;" class="sg-button sg-button--s sg-button--solid"><span class="sg-button__icon sg-button__icon--s"><div class="sg-icon sg-icon--light sg-icon--x16"><svg class="sg-icon__svg"><use xlink:href="#icon-settings"></use></svg></div></span><span class="sg-button__text">Delete</span><select id="delr' + constant + '"  style="border-color:transparent; background-color:black; width: 15px;margin-left: 7.6px;"><option value="0" selected="selected" disabled="disabled">Select a reason</option><option value="1">Too Many Questions</option><option value="2">Link in Question</option><option value="3">Essay or Project</option><option value="4">Too Trivial</option><option value="5">Brainly-Related Question</option><option value="6">Wrong Subject</option><option value="8">Default</option><option value="9">Not English</option><option value="10">Multiple Posting</option><option value="12">Personal Information</option>><option value="13">Self Harm\</option><option value="14">Unclear Question</option><option value="15">Unclear Attatchment</option><option value="16">Too General</option><option value="17">Incomplete Question</option><option value="18">Not a School Problem (NO WARN)</option></select></button>'
                    const delx = "delete" + i
                    document.getElementById(delx).addEventListener("click", function() {
                        
                        remove(constant)
                    });
                }



                report.outerHTML = '<div class="dropdown"><button id="report' + i + '" style="margin-left:10px;   background-color: #fbbe2e; color:black; border-color:#fbbe2e; border-style:solid; border-width:2px; position: absolute; top: -20px; right: -15px;box-shadow: 0 2px 4px 0 rgb(0 0 0 / 10%), 0 3px 5px 0 rgb(0 0 0 / 10%); width: 40px; height:40px; border-radius: 50px; "title="report" class="sg-button sg-button--s sg-button--solid" data-dashlane-rid="eeafbc4ae5f8b942" data-form-type=""><span class="sg-button__icon sg-button__icon--s"><div class="sg-icon sg-icon--light sg-icon--x16" style = "position: relative; left:35%;"><svg class="sg-icon__svg" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="40px" height="40px" viewBox="0 0 40 40" version="1.1"><defs><path d="M31.6663935,9.99965878 L23.999992,9.99965878 L23.5999922,7.99963148 C23.4429139,7.22287565 22.7596481,6.66481276 21.9671807,6.66601757 L10.0000005,6.66601757 C9.08061266,6.66902333 8.33616811,7.41382751 8.33359528,8.33322978 L8.33359528,33.333571 C8.33359528,34.2539143 9.07967031,35 10.0000005,35 C10.9203307,35 11.6664057,34.2539143 11.6664057,33.333571 L11.6664057,23.3334345 L20.9999938,23.3334345 L21.3999936,25.3334618 C21.5514803,26.1134618 22.2382799,26.6740824 23.0328051,26.6662925 L31.6663935,26.6662925 C32.5857827,26.6637196 33.3305763,25.9192645 33.33358,24.9998635 L33.33358,11.6660878 C33.3305763,10.7466868 32.5857827,10.0022316 31.6663935,9.99965878 Z M14.9999975,18.3333663 C14.9999975,19.2539253 14.2537475,20.0001859 13.3332016,20.0001859 C12.4126557,20.0001859 11.6664057,19.2539253 11.6664057,18.3333663 L11.6664057,11.6660878 C11.6664057,10.7455287 12.4126557,9.99926815 13.3332016,9.99926815 C14.2537475,9.99926815 14.9999975,10.7455287 14.9999975,11.6660878 L14.9999975,18.3333663 Z" id="path-1"/></defs><g id="Icon/Social/report_flag" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><mask id="mask-2" fill="white"><use xlink:href="#path-1"/></mask><use id="Shape" fill="white" fill-rule="nonzero" xlink:href="#path-1"/><g id="Group" mask="url(#mask-2)" fill="white"><g id="symbolInstance"><rect id="color-mask-box" x="0" y="0" width="40" height="40"/></g></g></g></svg></div></span><div class = "dropdown-content"><a class="report_element"id="'+i+'1">Request for link or scan</a><a class="report_element"id="'+i+'2">Link to an unknown website</a><a class="report_element"id="'+i+'3">Reference link</a><a class="report_element"id="'+i+'4">Link to a provider of hosting</a><a class="report_element"id="'+i+'5">No question content</a><a class="report_element"id="'+i+'6">Incomplete question content</a><a class="report_element"id="'+i+'7">Too complex</a><a class="report_element"id="'+i+'8">Illogical question</a><a class="report_element"id="'+i+'9">Too Trivial</a><a class="report_element" id="'+i+'10">Swear Words</a><a class="report_element" id="'+i+'11">Adult Content</a><a class="report_element" id="'+i+'12">Wrong Subject</a><a class="report_element" id="'+i+'13">Website Ad</a><a class="report_element" id="'+i+'14">Personal Info</a><a class="report_element" id="'+i+'15">Live Quiz</a></div></button></div>';

                let spacer = document.createElement("br")
                section.appendChild(spacer)
                question.appendChild(more)
                question.appendChild(show)
                
                show.outerHTML = '<button id="show'+i+'" class = "show" style="background-color: #2fc3f6;color: black;border-color: #2fc3f6;border-style: solid;box-shadow:0 2px 4px 0 rgb(0 0 0 / 10%), 0 3px 5px 0 rgb(0 0 0 / 10%);border-width: 2px;position: absolute;right: -15px; padding:0px; top: 25px;width: 40px; border-radius: 50px;height: 40px;" class="sg-button sg-button--s sg-button--solid" data-dashlane-rid="eeafbc4ae5f8b942" data-form-type=""><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill = "white" style = "position: relative;left: 2%;top: 10%;"viewBox="0 0 24 24"><path d="M12 4.942c1.827 1.105 3.474 1.6 5 1.833v7.76c0 1.606-.415 1.935-5 4.76v-14.353zm9-1.942v11.535c0 4.603-3.203 5.804-9 9.465-5.797-3.661-9-4.862-9-9.465v-11.535c3.516 0 5.629-.134 9-3 3.371 2.866 5.484 3 9 3zm-2 1.96c-2.446-.124-4.5-.611-7-2.416-2.5 1.805-4.554 2.292-7 2.416v9.575c0 3.042 1.69 3.83 7 7.107 5.313-3.281 7-4.065 7-7.107v-9.575z"></svg><div class = "quick"><a id="one'+i+'" style="background-color: #fbbe2e;font-size:16px; height: 35px; width: 35px; border-radius: 50px!important;padding:8px;padding-top: 10px;color: white;border-color: #fbbe2e;border-style: solid;border-width: 2px;top: -3px;z-index: 5;position: absolute;" title = "'+String(localStorage.getItem("onetxt")).replace("'","").replace("'","")+'" class="quick quick-1"data-dashlane-rid="eeafbc4ae5f8b942" data-form-type="">1</a><a id="two'+i+'" style="background-color: #fbbe2e; font-size: 16px;height: 35px; width: 35px; border-radius: 50px!important;padding:8px;padding-top: 10px;color: white;border-color: #fbbe2e;border-style: solid;border-width: 2px;top: -3px;z-index: 5;position: absolute;" title = "'+String(localStorage.getItem("twotxt")).replace("'","").replace("'","")+'" class="quick quick-2"data-dashlane-rid="eeafbc4ae5f8b942" data-form-type="">2</a><a id="three'+i+'" style="background-color: #fbbe2e;height: 35px; width: 35px; border-radius: 50px!important; font-size: 16px;padding:8px;padding-top: 10px;color: white;border-color: #fbbe2e;border-style: solid;border-width: 2px;top: -3px;z-index: 5;position: absolute;" title = "'+String(localStorage.getItem("threetxt")).replace("'","").replace("'","")+'" class="quick quick-3"data-dashlane-rid="eeafbc4ae5f8b942" data-form-type="">3</a></div></button>'
                more.outerHTML = '<button id="more'+i+'" class = "more" style="box-shadow:0 2px 4px 0 rgb(0 0 0 / 10%), 0 3px 5px 0 rgb(0 0 0 / 10%);background-color: #687B8C;color: black; border-color: #687B8C;border-style: solid;border-width: 2px;position: absolute;right: -15px;padding:0px;top: 70px;width: 40px; border-radius: 50px;height: 40px;" class="sg-button sg-button--s sg-button--solid" data-dashlane-rid="eeafbc4ae5f8b942" data-form-type=""><svg style="fill:white" class="sg-icon__svg"><use xlink:href="#icon-more"></use></svg><div class = "quick"></div></button>'
                document.getElementById("more"+i).addEventListener("click",function(){
                    const num = constant-1
                    
                    let link = document.getElementsByClassName("brn-feed-item__content")[num].children[0].children[0].href
                    let id = link.split("/")[4].split("?")[0]
                    get(id)
                    
                })
                let selectr = "selected"
                section.id = "appended"
                
                document.getElementById("one"+i).addEventListener("click",function(){
                    //Not English
                    let onenumset = parseInt(localStorage.getItem("onenum"))
                    document.getElementById("delr" + constant).value = onenumset
                    remove(constant)
                })
                document.getElementById("two"+i).addEventListener("click",function(){
                    //Too Trivial
                    let twonumset = parseInt(localStorage.getItem("twonum"))
                    document.getElementById("delr" + constant).value = twonumset
                    remove(constant)
                })
                document.getElementById("three"+i).addEventListener("click",function(){
                    //Too Trivial
                    let threenumset = parseInt(localStorage.getItem("threenum"))
                    document.getElementById("delr" + constant).value = threenumset
                    remove(constant)
                })

                document.getElementById(i+"1").addEventListener("click", function go(){report_content("1",constant)});
                document.getElementById(i+"2").addEventListener("click", function go(){report_content("2",constant)});
                document.getElementById(i+"3").addEventListener("click", function go(){report_content("3",constant)});
                document.getElementById(i+"4").addEventListener("click", function go(){report_content("4",constant)});
                document.getElementById(i+"5").addEventListener("click", function go(){report_content("5",constant)});
                document.getElementById(i+"6").addEventListener("click", function go(){report_content("6",constant)});
                document.getElementById(i+"7").addEventListener("click", function go(){report_content("7",constant)});
                document.getElementById(i+"8").addEventListener("click", function go(){report_content("8",constant)});
                document.getElementById(i+"9").addEventListener("click", function go(){report_content("9",constant)});
                document.getElementById(i+"10").addEventListener("click", function go(){report_content("10",constant)});
                document.getElementById(i+"11").addEventListener("click", function go(){report_content("11",constant)});
                document.getElementById(i+"12").addEventListener("click", function go(){report_content("12",constant)});
                document.getElementById(i+"13").addEventListener("click", function go(){report_content("13",constant)});
                document.getElementById(i+"14").addEventListener("click", function go(){report_content("14",constant)});
                document.getElementById(i+"15").addEventListener("click", function go(){report_content("15",constant)});

            } else {
                //pass
            }




        }

    }


}




function loadednew() {

    function remove(mynum) {

        let selecteddel = document.getElementById("delr" + mynum)

        if (selecteddel.value !== "0") {
            remove_dictionary = {
                "1": "'Too Many Questions'",
                "2": "'Link in Question'",
                "3": "'Essay or Project'",
                "4": "'Too Trivial'",
                "5": "'Brainly-Related Question'",
                "6": "'Wrong Subject'",
                "8": "'Default'",
                "9": "'Not English'",
                "10": "'Multiple Posting'",
                "12": "'Personal Information'",
                "13": "'Self Harm'",
                "14": "'Unclear Question'",
                "15": "'Unclear Attatchment'",
                "16": "'Too General'",
                "17": "'Incomplete Question'",
                "18": "'Not A School Problem'"
            };
            let rsn_no = String(selecteddel.value);
            let txtdel = remove_dictionary[rsn_no];

            if (rsn_no === "1") {
                id = 11;
                text = "Whoa there! Turns out there can be too much of a good thing. Your questions are great, but there are just too many rolled into one. Please post your questions individually to make sure other users can get the opportunity to help you. Thanks! For more information on what makes a great question, check out our Content Guidelines: https:\/\/faq.brainly.com\/hc\/en-us\/articles\/360014661139"
            }
            if (rsn_no === "2") {
                id = 15;
                text = "Your question has been removed because it contained a link to a website other than Brainly. Please keep in mind that links to outside sites or sources are not allowed. Thanks for keeping Brainly safe! For more information on what makes a great question, check out our Content Guidelines: https:\/\/faq.brainly.com\/hc\/en-us\/articles\/360014661139"
            }
            if (rsn_no === "3") {
                id = 17;
                text = "Your question has been removed because it was too complex. You'll need to complete this project on your own rather than asking other Brainly users to do it for you. If you have any specific questions about the assignment that could help you get started, feel free to post those instead!"
            }
            if (rsn_no === "4") {
                id = 30;
                text = "Your question has been removed because it seems a bit too simple for other Brainly users to help with. This question can be solved with common knowledge or some help from a calculator. Other users won't be able to help you understand the problem by solving it for you. Please help keep the quality of Brainly high by posting some more challenging questions. Thanks!"
            }
            if (rsn_no === "5") {
                id = 67;
                text = "It looks like you've asked a question about how to use Brainly! Since Brainly is only intended for help with school-related questions, we had to remove this one. Instead, check out our help site to see if your question has been answered here: faq.brainly.com. If you still need help, send us a message at https:\/\/brainly.com\/contact\/index and we'll get back to you soon!"
            }
            if (rsn_no === "6") {
                id = 75;
                text = "Whoops! It looks like you've posted your question under the wrong subject. If your question is in the wrong category, it may not be seen by a user who could help! Please repost your question under the correct subject so you can get the answer you need. If you can't find the specific class that you need help in, pick the subject that is most closely related. Thanks!"
            }
            if (rsn_no === "8") {
                id = 6;
                text = "Your question violates our Community Guidelines, so we had to take it down. Please review the guidelines here: https:\/\/faq.brainly.com\/hc\/en-us\/articles\/360014661139. Thanks for being a team player!"
            }
            if (rsn_no === "9") {
                id = 9;
                text = "Hi! Hola! Salut! Hallo! It looks like you've posted a question in a language other than English. Please be sure to select \"World Languages\" when asking your question. Otherwise, if you live outside the United States or want to use Brainly in a different language, check out the other language versions of Brainly here: https:\/\/faq.brainly.com\/hc\/en-us\/articles\/115001185650-How-do-I-use-Brainly-in-a-different-language-"
            }
            if (rsn_no === "10") {
                id = 24;
                text = "Whoops! It looks like this question has already been asked on Brainly. To ensure all questions get answered in a timely matter, we had to remove this duplicate question. Make sure to use the search bar to see if your question has already been answered before posting a new one. Thanks!"
            }
            if (rsn_no === "12") {
                id = 56;
                text = "Your question has been removed because it\u2019s not safe to share or ask for personal information online. Keep information like your real name, school name, address, and social media usernames to yourself!"
            }
            if (rsn_no === "13") {
                id = 72;
                text = "We had to remove your question because it was not school-related. More importantly, we're concerned about the content you are posting about wanting to hurt yourself, and we want to encourage you to seek help.\r\n\r\nWe recommend that you talk to a parent or other adult you trust about how you're feeling. If you'd prefer to get help from someone else, you can use the following resources to be connected with a trained staff member from a prevention service provider in your area:\r\n\r\nNational Phone Hotline: 1-800-273-TALK\r\nCrisis Text Line: http:\/\/www.crisistextline.org\/\r\nSafety on Brainly: https:\/\/faq.brainly.com\/hc\/en-us\/articles\/360013472580-Safety-on-Brainly-"
            }
            if (rsn_no === "14") {
                id = 18;
                text = "Uh oh! It looks like your question is unclear or a bit confusing. Please double-check your assignment and make sure you have all the parts of the question and any details needed to solve it. For more information on what makes a great question, check out our Question Guidelines: https:\/\/faq.brainly.com\/hc\/en-us\/articles\/360011452800-Question-Guidelines."
            }
            if (rsn_no === "15") {
                id = 80;
                text = "We love a good puzzle, but your attachment is unreadable! Please retake the photo and repost your question. Make sure the photo is clear and no parts of the question are cut off. For more information on what you can attach to your questions, check out this link: https:\/\/faq.brainly.com\/hc\/en-us\/articles\/360014748820"
            }
            if (rsn_no === "16") {
                id = 81;
                text = "Uh oh! It looks like your question is a bit too vague for other students to answer. Brainly is designed to give answers to specific homework questions. Rather than asking about a general topic, try to narrow your question down to one academic problem. Thanks!"
            }
            if (rsn_no === "17") {
                id = 82;
                text = "Uh oh! It looks like your question is missing some crucial information. Please repost it with any helpful information such as diagrams, excerpts, or answer choices needed to solve it. For more information on what makes a great question, check out our Question Guidelines: https:\/\/faq.brainly.com\/hc\/en-us\/articles\/360011452800-Question-Guidelines."
            }
            if (rsn_no === "18") {
                id = 78;
                text = "Whoops! It looks like your question was not part of an academic assignment. Since Brainly is only intended for homework questions, we had to remove it. Please keep the question feed clear of personal questions so other users can get the help they need. Thanks!"
            }

            let delrep = String(document.getElementById("delete" + mynum).parentElement.parentElement.children[2].children[1].href)
            let x1 = delrep.replace("https://brainly.com/question/", "")
            let x2 = x1.substring(0, 8)
            let numdel = parseInt(x2, 10);
            let confdel = confirm("Are you sure you'd like to delete this question with reason " + txtdel + "?")
            var data = JSON.stringify({
                "model_id": numdel,
                "model_type_id": 1,
                "reason_id": id,
                "reason": text,
                "give_warning": false,
                "take_points": false,
                "return_points": true,
                "schema": ""
            });

            function getCookie(cname) {
                let name = cname + "=";
                let decodedCookie = decodeURIComponent(document.cookie);
                let ca = decodedCookie.split(';');
                for (let i = 0; i < ca.length; i++) {
                    let c = ca[i];
                    while (c.charAt(0) == ' ') {
                        c = c.substring(1);
                    }
                    if (c.indexOf(name) == 0) {
                        return c.substring(name.length, c.length);
                    }
                }
                return "";
            }

            token = getCookie("Zadanepl_cookie[Token][Long]")
            var xhr = new XMLHttpRequest();
            xhr.withCredentials = true;

            xhr.addEventListener("readystatechange", function() {
                if (this.readyState === 4) {
                    
                    let resp = JSON.parse(this.responseText);
                    if (resp["success"] === true) {
                        let question = document.querySelector("body > div.js-page-wrapper > div > div.js-react-single-page-entry > div.sg-layout > div.sg-layout__container.sg-layout__container--reversed-order.sg-layout__container--no-margin-top > div.sg-layout__content.ProfilePage__container--3mI4J > main > div > div:nth-child(2) > div > div:nth-child("+mynum+") > div")
                        question.style.borderColor = "#FFC7BF"
                        let div = document.createElement("div")
                        div.innerHTML = '<div id="remove" class="sg-flash">\n'+
                        '    <div class="sg-flash__message sg-flash__message--success">\n'+
                        '      <div class="sg-text sg-text--bold sg-text--small sg-text--to-center">\n'+
                        '          Successfully removed https://brainly.com/question/'+ numdel +'\n'+
                        '      </div>\n'+
                        '  </div></div>';
                        
                        document.querySelector("body > div.js-page-wrapper > div > div.brn-header-container.brn-header-container--has-sub-navigation > div.js-main-header.brn-header.js-react-header-next.js-ads-screening-header.js-ads-top-offset-element > div.flash-messages-container.js-flash-messages.js-flash-messages-container").appendChild(div)
                        document.getElementById("remove").addEventListener("click",function(){
                            this.style.display = "none"
                        }) 
                    }
                }
            });
            if (confdel === true) {
                xhr.open("POST", "https://brainly.com/api/28/moderation_new/delete_task_content");
                xhr.setRequestHeader("authority", "brainly.com");
                xhr.setRequestHeader("x-b-token-long", String(token));
                xhr.setRequestHeader("accept", "text/plain, */*; q=0.01");
                xhr.setRequestHeader("content-type", "application/json");
                xhr.setRequestHeader("x-requested-with", "XMLHttpRequest");
                xhr.setRequestHeader("sec-ch-ua-mobile", "?0");

                xhr.setRequestHeader("origin", "https://brainly.com");
                xhr.setRequestHeader("sec-fetch-site", "same-origin");
                xhr.setRequestHeader("sec-fetch-mode", "cors");
                xhr.setRequestHeader("sec-fetch-dest", "empty");
                xhr.setRequestHeader("referer", "https://brainly.com/question/" + numdel + "");
                xhr.setRequestHeader("accept-language", "en-GB,en-US;q=0.9,en;q=0.8");
                xhr.send(data);
            } else {
                //pass
            }



        }


    }

    function report_content(report_num , mynum) {
        console.log(report_num)
        if (report_num !== "0") {
            let urlrep = String(document.getElementById("report"+mynum).parentElement.parentElement.parentElement.parentElement.parentElement.children[4].children[0].children[0].href)
            reasons_dictionary = {
                "1": "'Request a link or scan'",
                "2": "'Link to an unknown website'",
                "3": "'Reference link'",
                "4": "'Link to a provider'",
                "5": "'No Question'",
                "6": "'Incomplete Question'",
                "7": "'Too complex'",
                "8": "'Illogical Question'",
                "9": "'Too Trivial'",
                "10": "'Swear Words'",
                "11": "'Adult Content'",
                "12": "'Wrong Subject'",
                "13": "'Website Ad'",
                "14": "'Personal Info'",
                "15": "'Live Quiz'",
            };

            let rsn_no = String(report_num);
            let textrsn = reasons_dictionary[rsn_no];


            let conf = confirm("Are you sure you'd like to report this question with the reason " + textrsn + "?")




            var main;
            var sub;
            if (rsn_no === "1") {
                main = 1
                sub = 1
            }
            if (rsn_no === "2") {
                main = 1
                sub = 2
            }
            if (rsn_no === "3") {
                main = 1
                sub = 3
            }
            if (rsn_no === "4") {
                main = 1
                sub = 4
            }
            if (rsn_no === "5") {
                main = 2
                sub = 5
            }
            if (rsn_no === "6") {
                main = 2
                sub = 6
            }
            if (rsn_no === "7") {
                main = 2
                sub = 7
            }
            if (rsn_no === "8") {
                main = 2
                sub = 8
            }
            if (rsn_no === "9") {
                main = 2
                sub = 9
            }
            if (rsn_no === "10") {
                main = 3
                sub = 10
            }
            if (rsn_no === "11") {
                main = 3
                sub = 11
            }
            if (rsn_no === "12") {
                main = 4
                sub = null;
            }
            if (rsn_no === "13") {
                main = 5
                sub = null;
            }
            if (rsn_no === "14") {
                main = 6
                sub = null;
            }
            if (rsn_no === "15") {
                main = 7
                sub = null;
            }

            let p1 = urlrep.replace("https://brainly." + market + "/question/", "")
            let p2 = p1.substring(0, 8)

            let num = parseInt(p2, 10);

            var data = JSON.stringify({
                "abuse": {
                    "category_id": main,
                    "subcategory_id": sub,
                    "data": null
                },
                "model_id": num,
                "model_type_id": 1
            });

            var xhr = new XMLHttpRequest();
            xhr.withCredentials = true;

            xhr.addEventListener("readystatechange", function() {
                if (this.readyState === 4) {
                    
                }
            });
            if (conf === true) {
                xhr.open("POST", "https://brainly." + market + "/api/28/api_moderation/abuse_report");
                xhr.setRequestHeader("authority", "brainly." + market + "");
                xhr.setRequestHeader("pragma", "no-cache");
                xhr.setRequestHeader("cache-control", "no-cache");
                xhr.setRequestHeader("sec-ch-ua", "\"Chromium\";v=\"92\", \" Not A;Brand\";v=\"99\", \"Google Chrome\";v=\"92\"");
                xhr.setRequestHeader("accept", "application/json");
                xhr.setRequestHeader("sec-ch-ua-mobile", "?0");
                xhr.setRequestHeader("user-agent", "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.131 Safari/537.36");
                xhr.setRequestHeader("content-type", "application/json");
                xhr.setRequestHeader("origin", "https://brainly." + market + "");
                xhr.setRequestHeader("sec-fetch-site", "same-origin");
                xhr.setRequestHeader("sec-fetch-mode", "cors");
                xhr.setRequestHeader("sec-fetch-dest", "empty");
                xhr.setRequestHeader("referer", "https://brainly." + market + "/question/" + num + "?answeringSource=feedPublic%2FhomePage%2F1");
                xhr.setRequestHeader("accept-language", "en-US,en;q=0.9");
                xhr.setRequestHeader("cookie", "_ga=GA1.2.211202751.1620608511; _hjid=eaeac083-d704-41d2-ba08-8be74afa6a65; _fbp=fb.1.1620608511315.877960442; __qca=P0-1877865342-1620608511264; _pbjs_userid_consent_data=3524755945110770; G_ENABLED_IDPS=google; Zadanepl_cookie[Token][Long]=Hs4xBkwiEtDVd1mIUNN4__TFcdikbd7jNgRkU-iRsG4%3D; hl=en_US; first_visit=1620609257; _gcl_au=1.1.822710551.1621184964; Zadanepl_cookie[Token][Guest]=C9h7gHYDFpr0XHFOQu7SZ77rd15LlLMh3WSkbcEmnDEn0V25GbmXLgMJeWtr8oomUEt7jEjrkMuwN17g; cnx_userId=5768603e29a04fbb9cdb8e4e23644448; ubvs=b4be9dcc-86ae-42a5-a779-03e4dc124bdb; _cc_id=bd2009932fcb784f15ea420d7c4984c6; __utmz=153832555.1626113388.107.2.utmcsr=google|utmccn=(organic)|utmcmd=organic|utmctr=(not%20provided); viewer_uid=Skc2WTN0aTJmUHpyWDFYSlAzdTZONjBQbU9lenNYekNlWXdXZldqOUFEST0tLTl3R2tCdDlEaGovQTc4bVp6aGU2cEE9PQ%3D%3D--de1f173b5fe41d34c75a2f0c74f2a561642b9b61; _lr_env_src_ats=false; idl_env=AuqW0_o1c_hLHVdjlxOnLK0yk27ESnb_wcxfwT0hAHz7XB16rnqe9043ppdpppZG2nB7mVFbwUt2bkyB-GwTPqfOcIe61ms5bXly; _gid=GA1.2.2026522036.1628538953; _gaexp=GAX1.2.sx1URVOyRTaGOZxjVmhDPw.18878.1u0021okAreRLPTDSPY91XftuZ4g.18935.2; ocean_session=1628611121751.14bch8tm; notice_behavior=implied,us; zadane_sid=6b6448458b5666e00d603f8bb7382dd6; __utmc=153832555; authHash=aab5705f25c3dd06b0ee7598db1bdaa5; __aaxsc=2; _pubcid=4f63351e-1e6b-4568-a4ab-27057540aae2; panoramaId_expiry=1629316186620; panoramaId=0d07a4d5c3a1e32adc81a2b7929e16d53938a6caa919b0260705a82a2a85457d; pbjs-unifiedid=%7B%22TDID%22%3A%226acb4038-a209-45f3-9bc6-1914b7300dbf%22%2C%22TDID_LOOKUP%22%3A%22TRUE%22%2C%22TDID_CREATED_AT%22%3A%222021-07-11T19%3A49%3A46%22%7D; _dlt=1; Student_unpaid=True; Student=True; _hjAbsoluteSessionInProgress=0; _hjIncludedInSessionSample=1; __utma=153832555.211202751.1620608511.1628807074.1628809100.160; aasd=2%7C1628809105534; cto_bidid=BQ8xMl9DcDNFUFV3WG43RXU4bGdBOXVRaWtlVUhPR1N2dkVMU0VTbVUlMkJQV2dXWkJZb1U1WlBkRDhSSGxCbzNWSkdxZUxFSWtDOGVCZkhIczBnOFdzSTRUZGUwWU4lMkYlMkZEYkdwcnRqOEdScnU3d2p0Qk1vRXhhZmt0JTJCQkxtSmxXWTBQWDh5VmNuU2J1aE5HbkdtVjElMkJReUMlMkZqeEElM0QlM0Q; cto_bundle=EwWRSF9sMkR4ellHYzdvUGpTSjBlWGJIZUdKNktMaDFVRnpaN2RsJTJCbTZxJTJCWlBidDB2cWtmU2NFVFZVWDVrbE9MNGdETVZEc3RHdHlTJTJCJTJGU2tkTEhtRzhEM2ZGRzFmUEZzbzdrTDQ0R0RONEltbk56N3MyRzNwYiUyRkJEbGpNR1c5YTg4Mmxnak55YTdGRzJ4aDhSZGVlUHd3RE1EYzZFYWYwMXFGZTlHZlRLQzl5cjJLM2pMTW1EeENvdkpJNWp0ZVlycUZG; _lr_geo_location=US; user_token=RGVwMzBodWFwcFJFbFhSc2l1d0ZEajB2OC93bjZac0RwOHFMSXlmZlJZZz0tLUw3RmFWc1pRNkN3VHF2YlF0UWk2MVE9PQ%3D%3D--d77f7d2fdaca0a9c4b35f1be813acd0845b513dc; amplitude_id_710046ca554fe7c78d358b8c5e09a168brainly." + market + "=eyJkZXZpY2VJZCI6IjAxZDU2NjVmLWFkYzgtNDRhNi1iMWQ1LTI0NDZjYzRkNjc3M1IiLCJ1c2VySWQiOm51bGwsIm9wdE91dCI6ZmFsc2UsInNlc3Npb25JZCI6MTYyODgwOTM5NDgxOCwibGFzdEV2ZW50VGltZSI6MTYyODgxMDA4OTAzMywiZXZlbnRJZCI6MzEsImlkZW50aWZ5SWQiOjAsInNlcXVlbmNlTnVtYmVyIjozMX0=; notice_preferences=0:; notice_gdpr_prefs=0:; cmapi_gtm_bl=ga-ms-ua-ta-asp-bzi-sp-awct-cts-csm-img-flc-fls-mpm-mpr-m6d-tc-tdc; cmapi_cookie_privacy=permit 1 required; Zadanepl_cookie[isLoggedIn]=1; _dc_gtm_UA-43896087-1=1; datadome=F0PRolvuIrsKZ-eYP57.5EYm6iNAbW8osbkj73rJNcUgaiLrrkb.UBA7JziMMAzvvcOhSQNBbm.FPR6tuDv-FWNSwPi~PHx._3n3j-zFcE");
                xhr.send(data);
                document.getElementById('report'+mynum).blur();
            } else {
                //pass
            }




        }

    }
    let oldlink = document.createElement("a")
    let spacing = document.createElement("br")
    let ranks = document.querySelector("body > div.js-page-wrapper > div > div.js-react-single-page-entry > div.sg-layout > div.sg-layout__container.sg-layout__container--reversed-order.sg-layout__container--no-margin-top > div.sg-layout__aside-content > aside > div")
    ranks.appendChild(spacing)
    ranks.appendChild(oldlink)


    
    oldlink.style.textAlign = "center"
    let gold = String(window.location.href)
    let find = gold.replace('/app', '');
    find = find.replace('/answers', '');
    find = find.replace('profile/', 'profile/user-');

    oldlink.outerHTML = '<a href= ' + find + ' target="_blank" style="color: #5bb8ff; font-size: 14px; padding-top: 24px; display: inline-block; font-weight:bold;">Old Profile</a>';
   

    
    
    let questions = document.getElementsByClassName("sg-box sg-box--light sg-box--padding-s sg-box--border-color-gray-secondary-lightest sg-box--border UserActivity__contentItem--1KqFU")
    
    let r = 0;
    
    for (r = 0; r < questions.length + 1; r++) {
        
        let report = document.createElement("button")
        let ticket = document.createElement("button")
        
        if (r !== 0) {
            
            let section = document.querySelector("body > div.js-page-wrapper > div > div.js-react-single-page-entry > div.sg-layout > div.sg-layout__container.sg-layout__container--reversed-order.sg-layout__container--no-margin-top > div.sg-layout__content.ProfilePage__container--3mI4J > main > div > div:nth-child(2) > div > div:nth-child("+r+") > div > div.sg-flex.sg-flex--full-width.sg-flex--align-items-flex-end.sg-flex--justify-content-flex-end")
            let question = document.querySelector("#main-content > div.sg-animation-fade-in-fast > div.brn-feed-items > div:nth-child(" + i +") > div > div")
            if (section.id === "") {
                
                if (window.location.href.includes("questions") === true){
                    question.appendChild(report)
                }
                
                const button = "report" + r
                const constant = r
                let isadmin = localStorage.getItem("0576474418")
                if (isadmin === "true") {
                    


                    ticket.outerHTML = '<button  class="dropdownmod" id="delete' + r + '" style="margin-left:15px; background-color:black; color:white; border-width:2px;  border-color:transparent;" class="sg-button sg-button--s sg-button--solid"><span class="sg-button__icon sg-button__icon--s"><div class="sg-icon sg-icon--light sg-icon--x16"></div></span><span class="sg-button__text">Delete</span><select id="delr' + constant + '"  style="border-color:transparent; background-color:black; width: 15px;margin-left: 7.6px;"><option value="0" selected="selected" disabled="disabled">Select a reason</option><option value="1">Too Many Questions</option><option value="2">Link in Question</option><option value="3">Essay or Project</option><option value="4">Too Trivial</option><option value="5">Brainly-Related Question</option><option value="6">Wrong Subject</option><option value="8">Default</option><option value="9">Not English</option><option value="10">Multiple Posting</option><option value="12">Personal Information</option>><option value="13">Self Harm\</option><option value="14">Unclear Question</option><option value="15">Unclear Attatchment</option><option value="16">Too General</option><option value="17">Incomplete Question</option><option value="18">Not a School Problem (NO WARN)</option></select></button>'
                    const delx = "delete" + r
                    document.getElementById(delx).addEventListener("click", function() {

                        remove(constant)
                    });
                }



                report.outerHTML = '<div class="dropdown"><button id="report' + i + '" style="margin-left:10px;   background-color: #fbbe2e; color:black; border-color:#fbbe2e; border-style:solid; border-width:2px; position: absolute; top: -20px; right: -15px;box-shadow: 0 2px 4px 0 rgb(0 0 0 / 10%), 0 3px 5px 0 rgb(0 0 0 / 10%); width: 40px; height:40px; border-radius: 50px; "  class="sg-button sg-button--s sg-button--solid" data-dashlane-rid="eeafbc4ae5f8b942" data-form-type=""><span class="sg-button__icon sg-button__icon--s"><div class="sg-icon sg-icon--light sg-icon--x16" style = "position: relative; left:35%;"><svg class="sg-icon__svg" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="40px" height="40px" viewBox="0 0 40 40" version="1.1"><defs><path d="M31.6663935,9.99965878 L23.999992,9.99965878 L23.5999922,7.99963148 C23.4429139,7.22287565 22.7596481,6.66481276 21.9671807,6.66601757 L10.0000005,6.66601757 C9.08061266,6.66902333 8.33616811,7.41382751 8.33359528,8.33322978 L8.33359528,33.333571 C8.33359528,34.2539143 9.07967031,35 10.0000005,35 C10.9203307,35 11.6664057,34.2539143 11.6664057,33.333571 L11.6664057,23.3334345 L20.9999938,23.3334345 L21.3999936,25.3334618 C21.5514803,26.1134618 22.2382799,26.6740824 23.0328051,26.6662925 L31.6663935,26.6662925 C32.5857827,26.6637196 33.3305763,25.9192645 33.33358,24.9998635 L33.33358,11.6660878 C33.3305763,10.7466868 32.5857827,10.0022316 31.6663935,9.99965878 Z M14.9999975,18.3333663 C14.9999975,19.2539253 14.2537475,20.0001859 13.3332016,20.0001859 C12.4126557,20.0001859 11.6664057,19.2539253 11.6664057,18.3333663 L11.6664057,11.6660878 C11.6664057,10.7455287 12.4126557,9.99926815 13.3332016,9.99926815 C14.2537475,9.99926815 14.9999975,10.7455287 14.9999975,11.6660878 L14.9999975,18.3333663 Z" id="path-1"/></defs><g id="Icon/Social/report_flag" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><mask id="mask-2" fill="white"><use xlink:href="#path-1"/></mask><use id="Shape" fill="white" fill-rule="nonzero" xlink:href="#path-1"/><g id="Group" mask="url(#mask-2)" fill="white"><g id="symbolInstance"><rect id="color-mask-box" x="0" y="0" width="40" height="40"/></g></g></g></svg></div></span><span class="sg-button__text">report</span><div class = "dropdown-content"><a class="report_element"id="'+i+'1">Request for link or scan</a><a class="report_element"id="'+i+'2">Link to an unknown website</a><a class="report_element"id="'+i+'3">Reference link</a><a class="report_element"id="'+i+'4">Link to a provider of hosting</a><a class="report_element"id="'+i+'5">No question content</a><a class="report_element"id="'+i+'6">Incomplete question content</a><a class="report_element"id="'+i+'7">Too complex</a><a class="report_element"id="'+i+'8">Illogical question</a><a class="report_element"id="'+i+'9">Too Trivial</a><a class="report_element" id="'+i+'10">Swear Words</a><a class="report_element" id="'+i+'11">Adult Content</a><a class="report_element" id="'+i+'12">Wrong Subject</a><a class="report_element" id="'+i+'13">Website Ad</a><a class="report_element" id="'+i+'14">Personal Info</a><a class="report_element" id="'+i+'15">Live Quiz</a></div></button></div>';


                
                let selectr = "selected"
                section.id = "appended"
                
                document.getElementById(i+"1").addEventListener("click", report_content("1"));
                document.getElementById(i+"2").addEventListener("click", report_content("2"));
                document.getElementById(i+"3").addEventListener("click", report_content("3"));
                document.getElementById(i+"4").addEventListener("click", report_content("4"));
                document.getElementById(i+"5").addEventListener("click", report_content("5"));
                document.getElementById(i+"6").addEventListener("click", report_content("6"));
                document.getElementById(i+"7").addEventListener("click", report_content("7"));
                document.getElementById(i+"8").addEventListener("click", report_content("8"));
                document.getElementById(i+"9").addEventListener("click", report_content("9"));
                document.getElementById(i+"10").addEventListener("click", report_content("10"));
                document.getElementById(i+"11").addEventListener("click", report_content("11"));
                document.getElementById(i+"12").addEventListener("click", report_content("12"));
                document.getElementById(i+"13").addEventListener("click", report_content("13"));
                document.getElementById(i+"14").addEventListener("click", report_content("14"));
                document.getElementById(i+"15").addEventListener("click", report_content("15"));

            } else {
                //pass
            }




        }

    }



}

function copyToClipboard(text) {
    var dummy = document.createElement("textarea");
    // to avoid breaking orgain page when copying more words
    // cant copy when adding below this code
    // dummy.style.display = 'none'
    document.body.appendChild(dummy);
    //Be careful if you use texarea. setAttribute('value', value), which works with "input" does not work with "textarea". – Eduard
    dummy.value = text;
    dummy.select();
    document.execCommand("copy");
    document.body.removeChild(dummy);
}
