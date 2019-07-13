import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { InformationModuleModule } from '../information-module/information-module.module';


@Injectable({
  providedIn: 'root'
})
export class GeneralService {

  _content = {};

  constructor(private http:HttpClient) { 
    this.getJson('en');
  }

  getJson(lang){
    let _jsonURL = 'assets/content/' + lang +'.json';
    this.http.get(_jsonURL).subscribe(data => {
      this._content = data;
     });
  }


  private _score = 0;

  setSetScore(s) {
    this._score = s;
  }

  getScore() {
    return this._score;
  }

  
  baseUrl: string = 'http://localhost:4200/information/'; 
  createUser(inform:InformationModuleModule) {  
    return this.http.post(this.baseUrl, inform);  
  } 
  mbp_ref = [
    {
      id:0,
      name : "R 448A",
      image: "assets/image/cold.png",
      title: "You have selected MBP, R448A, what will be the consequence?",
      quiz:[
        {
          id: 1,
          position: "left",
          question:"quiz1_q",
          choices:[
            {
              text:"ch_1_1",
              correct:true,
              score:100
            },
            {
              text:"ch_1_2",
              correct:false,
              score:0
            },
            {
              text:"ch_1_3",
              correct:false,
              score:0
            }
          ],
          
        },{
          id: 2,
          question:"quiz2_q",
          choices:[
            {
              text:"ch_1_1",
              correct:true,
              score:0
            },
            {
              text:"ch_1_2",
              correct:false,
              score:0
            },
            {
              text:"ch_1_3",
              correct:false,
              score:200
            }
          ],
          
        },{
          id: 3,
          question:"quiz3_q",
          choices:[
            {
              text:"ch_1_1",
              correct:true,
              score:0
            },
            {
              text:"ch_1_2",
              correct:false,
              score:0
            },
            {
              text:"ch_1_3",
              correct:false,
              score:300
            }
          ],
          
        },{
          id: 4,
          question:"quiz4_q",
          choices:[
            {
              text:"ch_1_1",
              correct:false,
              score:400
            },
            {
              text:"ch_1_2",
              correct:false,
              score:0
            },
            {
              text:"ch_1_3",
              correct:true,
              score:0
            }
          ],
          
        },{
          id: 5,
          question:"quiz5_q",
          choices:[
            {
              text:"ch_1_1",
              correct:false,
              score:0
            },
            {
              text:"ch_1_2",
              correct:false,
              score:0
            },
            {
              text:"ch_1_3",
              correct:true,
              score:500
            }
          ],
          
        },{
          id: 6,
          position: "left",
          question:"quiz6_q",
          choices:[
            {
              text:"ch_1_1",
              correct:false,
              score:0
            },
            {
              text:"ch_1_2",
              correct:false,
              score:0
            },
            {
              text:"ch_1_3",
              correct:true,
              score:600
            }
          ],
          
        },
        {
          id: "3a",
          position: "left",
          question:"quiz6_q",
          choices:[
            {
              text:"ch_1_1",
              correct:false,
              score:0
            },
            {
              text:"ch_1_2",
              correct:false,
              score:0
            },
            {
              text:"ch_1_3",
              correct:true,
              score:600
            }
          ],
          
        }
      ]
    },
    {
      id:1,
      name : "R 449A",
      image: "assets/image/cold.png",
      title: "You have selected MBP, R449A, what will be the consequence?",
      quiz:[
        {
          position: "left",
          id:1,
          question:"quiz1_q",
          choices:[
            {
              text:"ch_1_1",
              correct:true,
              score:100
            },
            {
              text:"ch_1_2",
              correct:false,
              score:0
            },
            {
              text:"ch_1_3",
              correct:false,
              score:0
            }
          ],
          
        },{
          id:2,
          question:"quiz2_q",
          choices:[
            {
              text:"ch_1_1",
              correct:true,
              score:0
            },
            {
              text:"ch_1_2",
              correct:false,
              score:0
            },
            {
              text:"ch_1_3",
              correct:false,
              score:200
            }
          ],
          
        },{
          id:3,
          question:"quiz3_q",
          choices:[
            {
              text:"ch_1_1",
              correct:true,
              score:0
            },
            {
              text:"ch_1_2",
              correct:false,
              score:0
            },
            {
              text:"ch_1_3",
              correct:false,
              score:300
            }
          ],
          
        },{
          id:4,
          question:"quiz4_q",
          choices:[
            {
              text:"ch_1_1",
              correct:false,
              score:400
            },
            {
              text:"ch_1_2",
              correct:false,
              score:0
            },
            {
              text:"ch_1_3",
              correct:true,
              score:0
            }
          ],
          
        },{
          id:5,
          question:"quiz5_q",
          choices:[
            {
              text:"ch_1_1",
              correct:false,
              score:0
            },
            {
              text:"ch_1_2",
              correct:false,
              score:0
            },
            {
              text:"ch_1_3",
              correct:true,
              score:500
            }
          ],
          
        },{
          position: "left",
          id:6,
          question:"quiz6_q",
          choices:[
            {
              text:"ch_1_1",
              correct:false,
              score:0
            },
            {
              text:"ch_1_2",
              correct:false,
              score:0
            },
            {
              text:"ch_1_3",
              correct:true,
              score:600
            }
          ],
          
        }
      ]
    },
    {
      id:2,
      name : "R 450A",
      image: "assets/image/cold.png",
      title: "You have selected MBP, R450A, what will be the consequence?",
      quiz:[
        {
          position: "left",
          id:1,
          question:"quiz1_q",
          choices:[
            {
              text:"ch_1_1",
              correct:true,
              score:100
            },
            {
              text:"ch_1_2",
              correct:false,
              score:0
            },
            {
              text:"ch_1_3",
              correct:false,
              score:0
            }
          ],
          
        },{
          id:2,
          question:"quiz2_q",
          choices:[
            {
              text:"ch_1_1",
              correct:true,
              score:0
            },
            {
              text:"ch_1_2",
              correct:false,
              score:0
            },
            {
              text:"ch_1_3",
              correct:true,
              score:200
            }
          ],
          
        },{
          id:3,
          question:"quiz3_q",
          choices:[
            {
              text:"ch_1_1",
              correct:false,
              score:0
            },
            {
              text:"ch_1_2",
              correct:true,
              score:0
            },
            {
              text:"ch_1_3",
              correct:false,
              score:300
            }
          ],
          
        },{
          id:4,
          question:"quiz4_q",
          choices:[
            {
              text:"ch_1_1",
              correct:false,
              score:400
            },
            {
              text:"ch_1_2",
              correct:false,
              score:0
            },
            {
              text:"ch_1_3",
              correct:true,
              score:0
            }
          ],
          
        },{
          id:5,
          question:"quiz5_q",
          choices:[
            {
              text:"ch_1_1",
              correct:false,
              score:0
            },
            {
              text:"ch_1_2",
              correct:true,
              score:0
            },
            {
              text:"ch_1_3",
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
              text:"ch_1_1",
              correct:false,
              score:0
            },
            {
              text:"ch_1_2",
              correct:false,
              score:0
            },
            {
              text:"ch_1_3",
              correct:true,
              score:600
            }
          ],
          
        }
      ]
    },
    {
      id:3,
      name : "R 452A",
      image: "assets/image/cold.png",
      title: "You have selected MBP, R452A, what will be the consequence?",
      quiz:[
        {
          position: "left",
          id:1,
          question:"quiz1_q",
          choices:[
            {
              text:"ch_1_1",
              correct:true,
              score:100
            },
            {
              text:"ch_1_2",
              correct:false,
              score:0
            },
            {
              text:"ch_1_3",
              correct:false,
              score:0
            }
          ],
          
        },{
          id:2,
          question:"quiz2_q",
          choices:[
            {
              text:"ch_1_1",
              correct:true,
              score:0
            },
            {
              text:"ch_1_2",
              correct:false,
              score:0
            },
            {
              text:"ch_1_3",
              correct:true,
              score:200
            }
          ],
          
        },{
          id:3,
          question:"quiz3_q",
          choices:[
            {
              text:"ch_1_1",
              correct:false,
              score:0
            },
            {
              text:"ch_1_2",
              correct:true,
              score:0
            },
            {
              text:"ch_1_3",
              correct:false,
              score:300
            }
          ],
          
        },{
          id:4,
          question:"quiz4_q",
          choices:[
            {
              text:"ch_1_1",
              correct:false,
              score:400
            },
            {
              text:"ch_1_2",
              correct:false,
              score:0
            },
            {
              text:"ch_1_3",
              correct:true,
              score:0
            }
          ],
          
        },{
          id:5,
          question:"quiz5_q",
          choices:[
            {
              text:"ch_1_1",
              correct:false,
              score:0
            },
            {
              text:"ch_1_2",
              correct:true,
              score:0
            },
            {
              text:"ch_1_3",
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
              text:"ch_1_1",
              correct:false,
              score:0
            },
            {
              text:"ch_1_2",
              correct:false,
              score:0
            },
            {
              text:"ch_1_3",
              correct:true,
              score:600
            }
          ],
          
        }
      ]
    },
    {
      id:4,
      name : "R 513A",
      image: "assets/image/cold.png",
      title: "You have selected MBP, R513A, what will be the consequence?",
      quiz:[
        {
          position: "left",
          id:1,
          question:"quiz1_q",
          choices:[
            {
              text:"ch_1_1",
              correct:true,
              score:100
            },
            {
              text:"ch_1_2",
              correct:false,
              score:0
            },
            {
              text:"ch_1_3",
              correct:false,
              score:0
            }
          ],
          
        },{
          id:2,
          question:"quiz2_q",
          choices:[
            {
              text:"ch_1_1",
              correct:false,
              score:0
            },
            {
              text:"ch_1_2",
              correct:false,
              score:0
            },
            {
              text:"ch_1_3",
              correct:true,
              score:200
            }
          ],
          
        },{
          id:3,
          question:"quiz2_q",
          choices:[
            {
              text:"ch_1_1",
              correct:false,
              score:0
            },
            {
              text:"ch_1_2",
              correct:false,
              score:0
            },
            {
              text:"ch_1_3",
              correct:true,
              score:300
            }
          ],
          
        },{
          id:4,
          question:"quiz4_q",
          choices:[
            {
              text:"ch_1_1",
              correct:false,
              score:400
            },
            {
              text:"ch_1_2",
              correct:false,
              score:0
            },
            {
              text:"ch_1_3",
              correct:true,
              score:0
            }
          ],
          
        },{
          id:5,
          question:"quiz5_q",
          choices:[
            {
              text:"ch_1_1",
              correct:false,
              score:0
            },
            {
              text:"ch_1_2",
              correct:true,
              score:0
            },
            {
              text:"ch_1_3",
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
              text:"ch_1_1",
              correct:false,
              score:0
            },
            {
              text:"ch_1_2",
              correct:false,
              score:0
            },
            {
              text:"ch_1_3",
              correct:true,
              score:600
            }
          ],
          
        }
      ]
    }

  ]

  lbp_ref = [
    {
      id:0,
      name : "R 449A",
      image: "assets/image/cold.png",
      title: "You have selected MBP, R449A, what will be the consequence?",
      quiz:[
        {
          id:1,
          question:"quiz1_q",
          choices:[
            {
              text:"ch_1_1",
              correct:true,
              score:100
            },
            {
              text:"ch_1_2",
              correct:false,
              score:0
            },
            {
              text:"ch_1_3",
              correct:false,
              score:0
            }
          ],
          
        },{
          id:2,
          question:"quiz2_q",
          choices:[
            {
              text:"ch_1_1",
              correct:true,
              score:0
            },
            {
              text:"ch_1_2",
              correct:false,
              score:0
            },
            {
              text:"ch_1_3",
              correct:false,
              score:200
            }
          ],
          
        },{
          id:3,
          question:"quiz3_q",
          choices:[
            {
              text:"ch_1_1",
              correct:true,
              score:0
            },
            {
              text:"ch_1_2",
              correct:false,
              score:0
            },
            {
              text:"ch_1_3",
              correct:false,
              score:300
            }
          ],
          
        },{
          id:4,
          question:"quiz4_q",
          choices:[
            {
              text:"ch_1_1",
              correct:false,
              score:400
            },
            {
              text:"ch_1_2",
              correct:false,
              score:0
            },
            {
              text:"ch_1_3",
              correct:true,
              score:0
            }
          ],
          
        },{
          id:5,
          question:"quiz5_q",
          choices:[
            {
              text:"ch_1_1",
              correct:false,
              score:0
            },
            {
              text:"ch_1_2",
              correct:false,
              score:0
            },
            {
              text:"ch_1_3",
              correct:true,
              score:500
            }
          ],
          
        },{
          position: "left",
          id:6,
          question:"quiz6_q",
          choices:[
            {
              text:"ch_1_1",
              correct:false,
              score:0
            },
            {
              text:"ch_1_2",
              correct:false,
              score:0
            },
            {
              text:"ch_1_3",
              correct:true,
              score:600
            }
          ],
          
        }
      ]
    },
    {
      id:1,
      name : "R 452A",
      image: "assets/image/cold.png",
      title: "You have selected MBP, R452A, what will be the consequence?",
      quiz:[
        {
          id:1,
          question:"quiz1_q",
          choices:[
            {
              text:"ch_1_1",
              correct:false,
              score:0
            },
            {
              text:"ch_1_2",
              correct:false,
              score:0
            },
            {
              text:"ch_1_3",
              correct:true,
              score:0
            }
          ],
          
        },{
          id:2,
          question:"quiz2_q",
          choices:[
            {
              text:"ch_1_1",
              correct:false,
              score:0
            },
            {
              text:"ch_1_2",
              correct:false,
              score:0
            },
            {
              text:"ch_1_3",
              correct:true,
              score:200
            }
          ],
          
        },{
          id:3,
          question:"quiz3_q",
          choices:[
            {
              text:"ch_1_1",
              correct:false,
              score:0
            },
            {
              text:"ch_1_2",
              correct:false,
              score:0
            },
            {
              text:"ch_1_3",
              correct:true,
              score:300
            }
          ],
          
        },{
          id:4,
          question:"quiz4_q",
          choices:[
            {
              text:"ch_1_1",
              correct:true,
              score:400
            },
            {
              text:"ch_1_2",
              correct:true,
              score:0
            },
            {
              text:"ch_1_3",
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
              text:"ch_1_1",
              correct:false,
              score:0
            },
            {
              text:"ch_1_2",
              correct:false,
              score:0
            },
            {
              text:"ch_1_3",
              correct:true,
              score:500
            }
          ],
          
        },{
          position: "left",
          id:6,
          question:"quiz6_q",
          choices:[
            {
              text:"ch_1_1",
              correct:false,
              score:0
            },
            {
              text:"ch_1_2",
              correct:false,
              score:0
            },
            {
              text:"ch_1_3",
              correct:true,
              score:600
            }
          ],
          
        },
        
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


}
