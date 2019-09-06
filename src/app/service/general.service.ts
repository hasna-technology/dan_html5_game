import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InformationModuleModule } from '../information-module/information-module.module';


@Injectable({
  providedIn: 'root'
})
export class GeneralService {

  //1.0.1
  //Change in polish & ukrainian language
  
  version = "1.0.1";
  //mode = "desktop";
  mode = "web";

  _content = {};
  totalScore: any;
  user = {
    username: "",
    country: "",
  }
  baseUrl = window.location.origin;

  constructor(private http:HttpClient) { 
    let lang = localStorage.getItem('lang') == undefined ? 'en' : localStorage.getItem('lang');
    this.getJson(lang);
    //console.log(window.location)
  } 

  getJson(lang){
    let _jsonURL = 'assets/content/' + lang +'.json';
    this.http.get(_jsonURL).subscribe(data => {
      this._content = data;
      /*
      for(let item in this._content){
        this._content[item] = "test";
      }*/
     });
  }

  private _score = 0;

  setSetScore(s) {
    this._score = s;
  }

  getScore() {
    return this._score;
  }

  
  //baseUrl: string = 'http://localhost:4200/information/'; 
  /*createUser(inform:InformationModuleModule) {  
    return this.http.post(this.baseUrl, inform);  
  } */

  
  countries = [ 
    {name: 'Afghanistan', code: 'AF'}, 
    {name: 'Åland Islands', code: 'AX'}, 
    {name: 'Albania', code: 'AL'}, 
    {name: 'Algeria', code: 'DZ'}, 
    {name: 'American Samoa', code: 'AS'}, 
    {name: 'AndorrA', code: 'AD'}, 
    {name: 'Angola', code: 'AO'}, 
    {name: 'Anguilla', code: 'AI'}, 
    {name: 'Antarctica', code: 'AQ'}, 
    {name: 'Antigua and Barbuda', code: 'AG'}, 
    {name: 'Argentina', code: 'AR'}, 
    {name: 'Armenia', code: 'AM'}, 
    {name: 'Aruba', code: 'AW'}, 
    {name: 'Australia', code: 'AU'}, 
    {name: 'Austria', code: 'AT'}, 
    {name: 'Azerbaijan', code: 'AZ'}, 
    {name: 'Bahamas', code: 'BS'}, 
    {name: 'Bahrain', code: 'BH'}, 
    {name: 'Bangladesh', code: 'BD'}, 
    {name: 'Barbados', code: 'BB'}, 
    {name: 'Belarus', code: 'BY'}, 
    {name: 'Belgium', code: 'BE'}, 
    {name: 'Belize', code: 'BZ'}, 
    {name: 'Benin', code: 'BJ'}, 
    {name: 'Bermuda', code: 'BM'}, 
    {name: 'Bhutan', code: 'BT'}, 
    {name: 'Bolivia', code: 'BO'}, 
    {name: 'Bosnia and Herzegovina', code: 'BA'}, 
    {name: 'Botswana', code: 'BW'}, 
    {name: 'Bouvet Island', code: 'BV'}, 
    {name: 'Brazil', code: 'BR'}, 
    {name: 'British Indian Ocean Territory', code: 'IO'}, 
    {name: 'Brunei Darussalam', code: 'BN'}, 
    {name: 'Bulgaria', code: 'BG'}, 
    {name: 'Burkina Faso', code: 'BF'}, 
    {name: 'Burundi', code: 'BI'}, 
    {name: 'Cambodia', code: 'KH'}, 
    {name: 'Cameroon', code: 'CM'}, 
    {name: 'Canada', code: 'CA'}, 
    {name: 'Cape Verde', code: 'CV'}, 
    {name: 'Cayman Islands', code: 'KY'}, 
    {name: 'Central African Republic', code: 'CF'}, 
    {name: 'Chad', code: 'TD'}, 
    {name: 'Chile', code: 'CL'}, 
    {name: 'China', code: 'CN'}, 
    {name: 'Christmas Island', code: 'CX'}, 
    {name: 'Cocos (Keeling) Islands', code: 'CC'}, 
    {name: 'Colombia', code: 'CO'}, 
    {name: 'Comoros', code: 'KM'}, 
    {name: 'Congo', code: 'CG'}, 
    {name: 'Congo, The Democratic Republic of the', code: 'CD'}, 
    {name: 'Cook Islands', code: 'CK'}, 
    {name: 'Costa Rica', code: 'CR'}, 
    {name: 'Cote D\'Ivoire', code: 'CI'}, 
    {name: 'Croatia', code: 'HR'}, 
    {name: 'Cuba', code: 'CU'}, 
    {name: 'Cyprus', code: 'CY'}, 
    {name: 'Czech Republic', code: 'CZ'}, 
    {name: 'Denmark', code: 'DK'}, 
    {name: 'Djibouti', code: 'DJ'}, 
    {name: 'Dominica', code: 'DM'}, 
    {name: 'Dominican Republic', code: 'DO'}, 
    {name: 'Ecuador', code: 'EC'}, 
    {name: 'Egypt', code: 'EG'}, 
    {name: 'El Salvador', code: 'SV'}, 
    {name: 'Equatorial Guinea', code: 'GQ'}, 
    {name: 'Eritrea', code: 'ER'}, 
    {name: 'Estonia', code: 'EE'}, 
    {name: 'Ethiopia', code: 'ET'}, 
    {name: 'Falkland Islands (Malvinas)', code: 'FK'}, 
    {name: 'Faroe Islands', code: 'FO'}, 
    {name: 'Fiji', code: 'FJ'}, 
    {name: 'Finland', code: 'FI'}, 
    {name: 'France', code: 'FR'}, 
    {name: 'French Guiana', code: 'GF'}, 
    {name: 'French Polynesia', code: 'PF'}, 
    {name: 'French Southern Territories', code: 'TF'}, 
    {name: 'Gabon', code: 'GA'}, 
    {name: 'Gambia', code: 'GM'}, 
    {name: 'Georgia', code: 'GE'}, 
    {name: 'Germany', code: 'DE'}, 
    {name: 'Ghana', code: 'GH'}, 
    {name: 'Gibraltar', code: 'GI'}, 
    {name: 'Greece', code: 'GR'}, 
    {name: 'Greenland', code: 'GL'}, 
    {name: 'Grenada', code: 'GD'}, 
    {name: 'Guadeloupe', code: 'GP'}, 
    {name: 'Guam', code: 'GU'}, 
    {name: 'Guatemala', code: 'GT'}, 
    {name: 'Guernsey', code: 'GG'}, 
    {name: 'Guinea', code: 'GN'}, 
    {name: 'Guinea-Bissau', code: 'GW'}, 
    {name: 'Guyana', code: 'GY'}, 
    {name: 'Haiti', code: 'HT'}, 
    {name: 'Heard Island and Mcdonald Islands', code: 'HM'}, 
    {name: 'Holy See (Vatican City State)', code: 'VA'}, 
    {name: 'Honduras', code: 'HN'}, 
    {name: 'Hong Kong', code: 'HK'}, 
    {name: 'Hungary', code: 'HU'}, 
    {name: 'Iceland', code: 'IS'}, 
    {name: 'India', code: 'IN'}, 
    {name: 'Indonesia', code: 'ID'}, 
    {name: 'Iran, Islamic Republic Of', code: 'IR'}, 
    {name: 'Iraq', code: 'IQ'}, 
    {name: 'Ireland', code: 'IE'}, 
    {name: 'Isle of Man', code: 'IM'}, 
    {name: 'Israel', code: 'IL'}, 
    {name: 'Italy', code: 'IT'}, 
    {name: 'Jamaica', code: 'JM'}, 
    {name: 'Japan', code: 'JP'}, 
    {name: 'Jersey', code: 'JE'}, 
    {name: 'Jordan', code: 'JO'}, 
    {name: 'Kazakhstan', code: 'KZ'}, 
    {name: 'Kenya', code: 'KE'}, 
    {name: 'Kiribati', code: 'KI'}, 
    {name: 'Korea, Democratic People\'S Republic of', code: 'KP'}, 
    {name: 'Korea, Republic of', code: 'KR'}, 
    {name: 'Kuwait', code: 'KW'}, 
    {name: 'Kyrgyzstan', code: 'KG'}, 
    {name: 'Lao People\'S Democratic Republic', code: 'LA'}, 
    {name: 'Latvia', code: 'LV'}, 
    {name: 'Lebanon', code: 'LB'}, 
    {name: 'Lesotho', code: 'LS'}, 
    {name: 'Liberia', code: 'LR'}, 
    {name: 'Libyan Arab Jamahiriya', code: 'LY'}, 
    {name: 'Liechtenstein', code: 'LI'}, 
    {name: 'Lithuania', code: 'LT'}, 
    {name: 'Luxembourg', code: 'LU'}, 
    {name: 'Macao', code: 'MO'}, 
    {name: 'Macedonia, The Former Yugoslav Republic of', code: 'MK'}, 
    {name: 'Madagascar', code: 'MG'}, 
    {name: 'Malawi', code: 'MW'}, 
    {name: 'Malaysia', code: 'MY'}, 
    {name: 'Maldives', code: 'MV'}, 
    {name: 'Mali', code: 'ML'}, 
    {name: 'Malta', code: 'MT'}, 
    {name: 'Marshall Islands', code: 'MH'}, 
    {name: 'Martinique', code: 'MQ'}, 
    {name: 'Mauritania', code: 'MR'}, 
    {name: 'Mauritius', code: 'MU'}, 
    {name: 'Mayotte', code: 'YT'}, 
    {name: 'Mexico', code: 'MX'}, 
    {name: 'Micronesia, Federated States of', code: 'FM'}, 
    {name: 'Moldova, Republic of', code: 'MD'}, 
    {name: 'Monaco', code: 'MC'}, 
    {name: 'Mongolia', code: 'MN'}, 
    {name: 'Montserrat', code: 'MS'}, 
    {name: 'Morocco', code: 'MA'}, 
    {name: 'Mozambique', code: 'MZ'}, 
    {name: 'Myanmar', code: 'MM'}, 
    {name: 'Namibia', code: 'NA'}, 
    {name: 'Nauru', code: 'NR'}, 
    {name: 'Nepal', code: 'NP'}, 
    {name: 'Netherlands', code: 'NL'}, 
    {name: 'Netherlands Antilles', code: 'AN'}, 
    {name: 'New Caledonia', code: 'NC'}, 
    {name: 'New Zealand', code: 'NZ'}, 
    {name: 'Nicaragua', code: 'NI'}, 
    {name: 'Niger', code: 'NE'}, 
    {name: 'Nigeria', code: 'NG'}, 
    {name: 'Niue', code: 'NU'}, 
    {name: 'Norfolk Island', code: 'NF'}, 
    {name: 'Northern Mariana Islands', code: 'MP'}, 
    {name: 'Norway', code: 'NO'}, 
    {name: 'Oman', code: 'OM'}, 
    {name: 'Pakistan', code: 'PK'}, 
    {name: 'Palau', code: 'PW'}, 
    {name: 'Palestinian Territory, Occupied', code: 'PS'}, 
    {name: 'Panama', code: 'PA'}, 
    {name: 'Papua New Guinea', code: 'PG'}, 
    {name: 'Paraguay', code: 'PY'}, 
    {name: 'Peru', code: 'PE'}, 
    {name: 'Philippines', code: 'PH'}, 
    {name: 'Pitcairn', code: 'PN'}, 
    {name: 'Poland', code: 'PL'}, 
    {name: 'Portugal', code: 'PT'}, 
    {name: 'Puerto Rico', code: 'PR'}, 
    {name: 'Qatar', code: 'QA'}, 
    {name: 'Reunion', code: 'RE'}, 
    {name: 'Romania', code: 'RO'}, 
    {name: 'Russian Federation', code: 'RU'}, 
    {name: 'RWANDA', code: 'RW'}, 
    {name: 'Saint Helena', code: 'SH'}, 
    {name: 'Saint Kitts and Nevis', code: 'KN'}, 
    {name: 'Saint Lucia', code: 'LC'}, 
    {name: 'Saint Pierre and Miquelon', code: 'PM'}, 
    {name: 'Saint Vincent and the Grenadines', code: 'VC'}, 
    {name: 'Samoa', code: 'WS'}, 
    {name: 'San Marino', code: 'SM'}, 
    {name: 'Sao Tome and Principe', code: 'ST'}, 
    {name: 'Saudi Arabia', code: 'SA'}, 
    {name: 'Senegal', code: 'SN'}, 
    {name: 'Serbia and Montenegro', code: 'CS'}, 
    {name: 'Seychelles', code: 'SC'}, 
    {name: 'Sierra Leone', code: 'SL'}, 
    {name: 'Singapore', code: 'SG'}, 
    {name: 'Slovakia', code: 'SK'}, 
    {name: 'Slovenia', code: 'SI'}, 
    {name: 'Solomon Islands', code: 'SB'}, 
    {name: 'Somalia', code: 'SO'}, 
    {name: 'South Africa', code: 'ZA'}, 
    {name: 'South Georgia and the South Sandwich Islands', code: 'GS'}, 
    {name: 'Spain', code: 'ES'}, 
    {name: 'Sri Lanka', code: 'LK'}, 
    {name: 'Sudan', code: 'SD'}, 
    {name: 'Suriname', code: 'SR'}, 
    {name: 'Svalbard and Jan Mayen', code: 'SJ'}, 
    {name: 'Swaziland', code: 'SZ'}, 
    {name: 'Sweden', code: 'SE'}, 
    {name: 'Switzerland', code: 'CH'}, 
    {name: 'Syrian Arab Republic', code: 'SY'}, 
    {name: 'Taiwan, Province of China', code: 'TW'}, 
    {name: 'Tajikistan', code: 'TJ'}, 
    {name: 'Tanzania, United Republic of', code: 'TZ'}, 
    {name: 'Thailand', code: 'TH'}, 
    {name: 'Timor-Leste', code: 'TL'}, 
    {name: 'Togo', code: 'TG'}, 
    {name: 'Tokelau', code: 'TK'}, 
    {name: 'Tonga', code: 'TO'}, 
    {name: 'Trinidad and Tobago', code: 'TT'}, 
    {name: 'Tunisia', code: 'TN'}, 
    {name: 'Turkey', code: 'TR'}, 
    {name: 'Turkmenistan', code: 'TM'}, 
    {name: 'Turks and Caicos Islands', code: 'TC'}, 
    {name: 'Tuvalu', code: 'TV'}, 
    {name: 'Uganda', code: 'UG'}, 
    {name: 'Ukraine', code: 'UA'}, 
    {name: 'United Arab Emirates', code: 'AE'}, 
    {name: 'United Kingdom', code: 'GB'}, 
    {name: 'United States', code: 'US'}, 
    {name: 'United States Minor Outlying Islands', code: 'UM'}, 
    {name: 'Uruguay', code: 'UY'}, 
    {name: 'Uzbekistan', code: 'UZ'}, 
    {name: 'Vanuatu', code: 'VU'}, 
    {name: 'Venezuela', code: 'VE'}, 
    {name: 'Viet Nam', code: 'VN'}, 
    {name: 'Virgin Islands, British', code: 'VG'}, 
    {name: 'Virgin Islands, U.S.', code: 'VI'}, 
    {name: 'Wallis and Futuna', code: 'WF'}, 
    {name: 'Western Sahara', code: 'EH'}, 
    {name: 'Yemen', code: 'YE'}, 
    {name: 'Zambia', code: 'ZM'}, 
    {name: 'Zimbabwe', code: 'ZW'} 
  ];

  getCoutry(code){
    return this.countries.filter(x=>x.code == code)[0].name;
  }

  resetGame(){
    for (var i = 0; i < this.mbp_ref.length; i++) {
        this.mbp_ref[i]['score'] = 0;
        this.mbp_ref[i]['submitted'] = false;
        this.mbp_ref[i]['completed'] = false;
        for (var j = 0; j < this.mbp_ref[i].quiz.length; j++) {
          this.mbp_ref[i].quiz[j]['submitted'] = false;
          this.mbp_ref[i].quiz[j]['userchoice'] = undefined;
        }
    }

    for (var i = 0; i < this.lbp_ref.length; i++) {
      this.lbp_ref[i]['score'] = 0;
      this.lbp_ref[i]['submitted'] = false;
      this.mbp_ref[i]['completed'] = false;
      for (var j = 0; j < this.lbp_ref[i].quiz.length; j++) {
        this.lbp_ref[i].quiz[j]['submitted'] = false;
        this.lbp_ref[i].quiz[j]['userchoice'] = undefined;
      }
    }
  }
  mbp_ref = [
    {
      id:0,
      group:"mbp",
      name : "R448A",
      image: "assets/image/cold.jpg",
      title: "title_1",
      total : 1200,
      
      quiz:[
        {
          id: 1,
          position: "left",
          question:"quiz1_q",
          choices:[
            {
              text:"ch_1_0",
              correct:false,
              score:0
            },
            {
              text:"ch_1_1",
              correct:true,
              score:200
            },
            {
              text:"ch_1_2",
              correct:false,
              score:0
            }
          ],
          
        },{
          id: 2,
          question:"quiz2_q",
          choices:[
            {
              text:"ch_2_0",
              correct:false,
              score:0
            },
            {
              text:"ch_2_1",
              correct:true,
              score:200
            },
            {
              text:"ch_2_2",
              correct:false,
              score:0
            }
          ],
          
        },{
          id: 3,
          question:"quiz3_q",
          choices:[
            {
              text:"ch_3_0",
              correct:false,
              score:0
            },
            {
              text:"ch_3_1",
              correct:true,
              score:200
            },
            {
              text:"ch_3_2",
              correct:false,
              score:0
            }
          ],
          
        },{
          id: 4,
          question:"quiz4_q",
          choices:[
            {
              text:"ch_4_0",
              correct:true,
              score:200
            },
            {
              text:"ch_4_1",
              correct:false,
              score:0
            },
            {
              text:"ch_4_2",
              correct:false,
              score:0
            }
          ],
          
        },{
          id: 5,
          question:"quiz5_q",
          choices:[
            {
              text:"ch_5_0",
              correct:false,
              score:0
            },
            {
              text:"ch_5_1",
              correct:false,
              score:0
            },
            {
              text:"ch_5_3",
              correct:true,
              score:200
            }
          ],
          
        },{
          id: 6,
          position: "left",
          question:"quiz6_q",
          choices:[
            {
              text:"ch_6_0",
              correct:true,
              score:200
            },
            {
              text:"ch_6_1",
              correct:false,
              score:0
            },
            {
              text:"ch_6_2",
              correct:false,
              score:0
            }
          ],
          
        },
        {
          id: 7,
          position: "left",
          question:"quiz7_q",
          choices:[
            {
              text:"ch_7_0",
              correct:true,
              score:200
            },
            {
              text:"ch_7_1",
              correct:false,
              score:0
            },
            {
              text:"ch_7_2",
              correct:false,
              score:0
            }
          ],
          
        }
      ]
    },
    {
      id:1,
      group:"mbp",
      name : "R449A",
      image: "assets/image/cold.jpg",
      title: "title_2",
      quiz:[
        {
          id: 1,
          position: "left",
          question:"quiz1_q",
          choices:[
            {
              text:"ch_1_0",
              correct:false,
              score:0
            },
            {
              text:"ch_1_1",
              correct:true,
              score:200
            },
            {
              text:"ch_1_2",
              correct:false,
              score:0
            }
          ],
          
        },{
          id: 2,
          question:"quiz2_q",
          choices:[
            {
              text:"ch_2_0",
              correct:false,
              score:0
            },
            {
              text:"ch_2_1",
              correct:true,
              score:200
            },
            {
              text:"ch_2_2",
              correct:false,
              score:0
            }
          ],
          
        },{
          id: 3,
          question:"quiz3_q",
          choices:[
            {
              text:"ch_3_0",
              correct:false,
              score:0
            },
            {
              text:"ch_3_1",
              correct:true,
              score:200
            },
            {
              text:"ch_3_2",
              correct:false,
              score:0
            }
          ],
          
        },{
          id: 4,
          question:"quiz4_q",
          choices:[
            {
              text:"ch_4_0",
              correct:true,
              score:200
            },
            {
              text:"ch_4_1",
              correct:false,
              score:0
            },
            {
              text:"ch_4_2",
              correct:false,
              score:0
            }
          ],
          
        },{
          id: 5,
          question:"quiz5_q",
          choices:[
            {
              text:"ch_5_0",
              correct:false,
              score:0
            },
            {
              text:"ch_5_1",
              correct:false,
              score:0
            },
            {
              text:"ch_5_3",
              correct:true,
              score:200
            }
          ],
          
        },{
          id: 6,
          position: "left",
          question:"quiz6_q",
          choices:[
            {
              text:"ch_6_0",
              correct:true,
              score:200
            },
            {
              text:"ch_6_1",
              correct:false,
              score:0
            },
            {
              text:"ch_6_2",
              correct:false,
              score:0
            }
          ],
          
        },
        {
          id: 7,
          position: "left",
          question:"quiz7_q",
          choices:[
            {
              text:"ch_7_0",
              correct:true,
              score:200
            },
            {
              text:"ch_7_1",
              correct:false,
              score:0
            },
            {
              text:"ch_7_2",
              correct:false,
              score:0
            }
          ],
          
        }
      ]
    },
    {
      id:2,
      group: "mbp",
      name : "R450A",
      image: "assets/image/cold.jpg",
      title: "title_3",
      quiz:[ 
        {
          position: "left",
          id:1,
          question:"quiz1_q",
          choices:[
            {
              text:"ch_1_0",
              correct:false,
              score:0
            },
            {
              text:"ch_1_1",
              correct:true,
              score:200
            },
            {
              text:"ch_1_2",
              correct:false,
              score:0
            }
          ],
          
        },{
          id:2,
          question:"quiz2_q",
          choices:[
            {
              text:"ch_2_0",
              correct:true,
              score:200
            },
            {
              text:"ch_2_1",
              correct:false,
              score:0
            },
            {
              text:"ch_2_2",
              correct:false,
              score:0
            }
          ],
          
        },{
          id:3,
          question:"quiz3_q",
          choices:[
            {
              text:"ch_3_0",
              correct:false,
              score:0
            },
            {
              text:"ch_3_1",
              correct:false,
              score:0
            },
            {
              text:"ch_3_2",
              correct:true,
              score:200
            }
          ],
          
        },{
          id:4,
          question:"quiz4_q",
          choices:[
            {
              text:"ch_4_0",
              correct:true,
              score:200
            },
            {
              text:"ch_4_1",
              correct:false,
              score:0
            },
            {
              text:"ch_4_2",
              correct:false,
              score:0
            }
          ],
          
        },{
          id:5,
          question:"quiz5_q",
          choices:[
            {
              text:"ch_5_0",
              correct:false,
              score:0
            },
            {
              text:"ch_5_1",
              correct:false,
              score:0
            },
            {
              text:"ch_5_4",
              correct:true,
              score:200
            }
          ],
          
        },{
          position: "left",
          id:6,
          question:"quiz6_q",
          choices:[
            {
              text:"ch_6_0",
              correct:false,
              score:0
            },
            {
              text:"ch_6_1",
              correct:false,
              score:0
            },
            {
              text:"ch_6_2",
              correct:true,
              score:200
            }
          ],
          
        },
        {
          position: "left",
          id:7,
          question:"quiz7_q",
          choices:[
            {
              text:"ch_7_0",
              correct:true,
              score:200
            },
            {
              text:"ch_7_1",
              correct:false,
              score:0
            },
            {
              text:"ch_7_2",
              correct:false,
              score:0
            }
          ],
          
        }
      ]
    },
    {
      id:3,
      group: "mbp",
      name : "R513A",
      image: "assets/image/cold.jpg",
      title: "title_5",
      quiz:[
        {
          position: "left",
          id:1,
          question:"quiz1_q",
          choices:[
            {
              text:"ch_1_0",
              correct:false,
              score:0
            },
            {
              text:"ch_1_1",
              correct:true,
              score:200
            },
            {
              text:"ch_1_2",
              correct:false,
              score:0
            }
          ],
          
        },{
          id:2,
          question:"quiz2_q",
          choices:[
            {
              text:"ch_2_0",
              correct:true,
              score:200
            },
            {
              text:"ch_2_1",
              correct:false,
              score:0
            },
            {
              text:"ch_2_2",
              correct:false,
              score:0
            }
          ],
          
        },{
          id:3,
          question:"quiz3_q",
          choices:[
            {
              text:"ch_3_0",
              correct:true,
              score:200
            },
            {
              text:"ch_3_1",
              correct:false,
              score:0
            },
            {
              text:"ch_3_2",
              correct:false,
              score:0
            }
          ],
          
        },{
          id:4,
          question:"quiz4_q",
          choices:[
            {
              text:"ch_4_0",
              correct:true,
              score:200
            },
            {
              text:"ch_4_1",
              correct:false,
              score:0
            },
            {
              text:"ch_4_2",
              correct:false,
              score:0
            }
          ],
          
        },{
          id:5,
          question:"quiz5_q",
          choices:[
            {
              text:"ch_5_0",
              correct:false,
              score:0
            },
            {
              text:"ch_5_1",
              correct:false,
              score:0
            },
            {
              text:"ch_5_4",
              correct:true,
              score:200
            }
          ],
          
        },{
          position: "left",
          id:6,
          question:"quiz6_q",
          choices:[
            {
              text:"ch_6_0",
              correct:false,
              score:0
            },
            {
              text:"ch_6_1",
              correct:false,
              score:0
            },
            {
              text:"ch_6_2",
              correct:true,
              score:200
            }
          ],
          
        },{
          position: "left",
          id:7,
          question:"quiz7_q",
          choices:[
            {
              text:"ch_7_0",
              correct:true,
              score:200
            },
            {
              text:"ch_7_1",
              correct:false,
              score:0
            },
            {
              text:"ch_7_2",
              correct:false,
              score:0
            }
          ],
          
        }
      ]
    }

  ]

  lbp_ref = [
    {
      id:0,
      group: "lbp",
      name : "R449A",
      image: "assets/image/cold.jpg",
      title: "title_6",
      quiz:[
        {
          id:1,
          question:"quiz1_q",
          choices:[
            {
              text:"ch_1_0",
              correct:false,
              score:0
            },
            {
              text:"ch_1_1",
              correct:true,
              score:200
            },
            {
              text:"ch_1_2",
              correct:false,
              score:0
            }
          ],
          
        },{
          id:2,
          question:"quiz2_q",
          choices:[
            {
              text:"ch_2_0",
              correct:false,
              score:0
            },
            {
              text:"ch_2_1",
              correct:true,
              score:200
            },
            {
              text:"ch_2_2",
              correct:false,
              score:0
            }
          ],
          
        },{
          id:3,
          question:"quiz3_q",
          choices:[
            {
              text:"ch_3_0",
              correct:false,
              score:0
            },
            {
              text:"ch_3_1",
              correct:true,
              score:200
            },
            {
              text:"ch_3_2",
              correct:false,
              score:0
            }
          ],
          
        },{
          id:4,
          question:"quiz4_q",
          choices:[
            {
              text:"ch_4_0",
              correct:true,
              score:200
            },
            {
              text:"ch_4_1",
              correct:false,
              score:0
            },
            {
              text:"ch_4_2",
              correct:false,
              score:0
            }
          ],
          
        },{
          id:5,
          question:"quiz5_q",
          choices:[
            {
              text:"ch_5_0",
              correct:false,
              score:0
            },
            {
              text:"ch_5_1",
              correct:false,
              score:0
            },
            {
              text:"ch_5_4",
              correct:true,
              score:200
            }
          ],
          
        },{
          position: "left",
          id:6,
          question:"quiz6_q",
          choices:[
            {
              text:"ch_6_0",
              correct:true,
              score:200
            },
            {
              text:"ch_6_1",
              correct:false,
              score:0
            },
            {
              text:"ch_6_2",
              correct:false,
              score:0
            }
          ],
          
        },{
          position: "left",
          id:7,
          question:"quiz7_q",
          choices:[
            {
              text:"ch_7_0",
              correct:true,
              score:200
            },
            {
              text:"ch_7_1",
              correct:false,
              score:0
            },
            {
              text:"ch_7_2",
              correct:false,
              score:0
            }
          ],
          
        }
      ]
    },
    {
      id:1,
      group: "lbp",
      name : "R452A",
      image: "assets/image/cold.jpg",
      title: "title_7",
      quiz:[
        {
          id:1,
          question:"quiz1_q",
          choices:[
            {
              text:"ch_1_0",
              correct:true,
              score:200
            },
            {
              text:"ch_1_1",
              correct:false,
              score:0
            },
            {
              text:"ch_1_2",
              correct:false,
              score:0
            }
          ],
          
        },{
          id:2,
          question:"quiz2_q",
          choices:[
            {
              text:"ch_2_0",
              correct:true,
              score:200
            },
            {
              text:"ch_2_1",
              correct:false,
              score:0
            },
            {
              text:"ch_2_2",
              correct:false,
              score:0
            }
          ],
          
        },{
          id:3,
          question:"quiz3_q",
          choices:[
            {
              text:"ch_3_0",
              correct:true,
              score:200
            },
            {
              text:"ch_3_1",
              correct:false,
              score:0
            },
            {
              text:"ch_3_2",
              correct:false,
              score:0
            }
          ],
          
        },{
          id:4,
          question:"quiz4_q",
          choices:[
            {
              text:"ch_4_0",
              correct:true,
              score:200
            },
            {
              text:"ch_4_1",
              correct:false,
              score:0
            },
            {
              text:"ch_4_2",
              correct:false,
              score:0
            }
          ],
          
        },
        {
          id:5,
          question:"quiz5_q",
          choices:[
            {
              text:"ch_5_0",
              correct:false,
              score:0
            },
            {
              text:"ch_5_1",
              correct:false,
              score:0
            },
            {
              text:"ch_5_3",
              correct:true,
              score:200
            }
          ],
          
        },{
          position: "left",
          id:6,
          question:"quiz6_q",
          choices:[
            {
              text:"ch_6_0",
              correct:true,
              score:200
            },
            {
              text:"ch_6_1",
              correct:false,
              score:0
            },
            {
              text:"ch_6_2",
              correct:false,
              score:0
            }
          ],
          
        },{
          position: "left",
          id:7,
          question:"quiz7_q",
          choices:[
            {
              text:"ch_7_0",
              correct:true,
              score:200
            },
            {
              text:"ch_7_1",
              correct:false,
              score:0
            },
            {
              text:"ch_7_2",
              correct:false,
              score:0
            }
          ],
        }
      ]
    }

  ]

  get_mbp(id = null){
    if(id == null)
      return this.mbp_ref;
    else
      return this.mbp_ref[id];
  }

  get_lbp(id = null){
    if(id == null)
      return this.lbp_ref;
    else
      return this.lbp_ref[id];
  }
  get_length(r){
    return r.length;
  }
  getAssessmentNextState(name) {
    if(name == "mbp")
    {
      for(var i=0;i<this.mbp_ref.length;i++)
      {
        if(this.mbp_ref[i]['completed'] != true){
          return "mbp"
        }
      }
    }
    else
    {
      for(var i=0;i<this.lbp_ref.length;i++)
      {
        if(this.lbp_ref[i]['completed'] != true){
          return "lbp"
        }
      }
    }

    for(var i=0;i<this.mbp_ref.length;i++)
    {
      if(this.mbp_ref[i]['completed'] != true){
        return "mbp"
      }
    }
    for(var i=0;i<this.lbp_ref.length;i++)
    {
      if(this.lbp_ref[i]['completed'] != true){
        return "lbp"
      }
    }
    return "score";
  }
  setRandomScore(arr: any) {
    var result = 0;
    for(var i=0;i<arr.length;i++)
    {
      arr[i]['score'] = (Math.floor(Math.random() * 5) + 2) * 100;
    }
    return result;
  }
  componentScore(arr: any) {
    var result = 0;
    for(var i=0;i<arr.length;i++)
    {
      result += arr[i]['score'];
    }
    return result;
  }

}
/*
{
      id:3,
      name : "R452A",
      image: "assets/image/cold.jpg",
      title: "title_4",
      quiz:[
        {
          position: "left",
          id:1,
          question:"quiz1_q",
          choices:[
            {
              text:"ch_0",
              correct:true,
              score:100
            },
            {
              text:"ch_1",
              correct:false,
              score:0
            },
            {
              text:"ch_2",
              correct:false,
              score:0
            }
          ],
          
        },{
          id:2,
          question:"quiz2_q",
          choices:[
            {
              text:"ch_0",
              correct:true,
              score:0
            },
            {
              text:"ch_1",
              correct:false,
              score:0
            },
            {
              text:"ch_2",
              correct:true,
              score:200
            }
          ],
          
        },{
          id:3,
          question:"quiz3_q",
          choices:[
            {
              text:"ch_0",
              correct:false,
              score:0
            },
            {
              text:"ch_1",
              correct:true,
              score:0
            },
            {
              text:"ch_2",
              correct:false,
              score:300
            }
          ],
          
        },{
          id:4,
          question:"quiz4_q",
          choices:[
            {
              text:"ch_0",
              correct:false,
              score:400
            },
            {
              text:"ch_1",
              correct:false,
              score:0
            },
            {
              text:"ch_2",
              correct:true,
              score:0
            }
          ],
          
        },{
          id:5,
          question:"quiz5_q",
          choices:[
            {
              text:"ch_0",
              correct:false,
              score:0
            },
            {
              text:"ch_1",
              correct:true,
              score:0
            },
            {
              text:"ch_2",
              correct:false,
              score:500
            }
          ],
          
        },{
          position: "left",
          id:6,
          question:"quiz6_q",
          choices:[
            {
              text:"ch_0",
              correct:false,
              score:0
            },
            {
              text:"ch_1",
              correct:false,
              score:0
            },
            {
              text:"ch_2",
              correct:true,
              score:600
            }
          ],
          
        }
      ]
    },
    */