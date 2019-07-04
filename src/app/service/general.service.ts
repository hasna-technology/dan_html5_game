import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { InformationModuleModule } from '../information-module/information-module.module';


@Injectable({
  providedIn: 'root'
})
export class GeneralService {
  
  private _score = 0;

  setSetScore(s) {
    this._score = s;
  }

  getScore() {
    return this._score;
  }

  constructor(private http:HttpClient) { }
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
          position: "left",
          question:"This is first question 1?",
          choices:[
            {
              text:"Too big",
              correct:true,
              score:100
            },
            {
              text:"Too small",
              correct:false,
              score:0
            },
            {
              text:"Ok",
              correct:false,
              score:0
            }
          ],
          
        },{
          question:"This is first question 2?",
          choices:[
            {
              text:"Too big",
              correct:false,
              score:0
            },
            {
              text:"Too small",
              correct:false,
              score:0
            },
            {
              text:"Ok",
              correct:true,
              score:200
            }
          ],
          
        },{
          question:"This is first question 3?",
          choices:[
            {
              text:"Too big",
              correct:false,
              score:0
            },
            {
              text:"Too small",
              correct:false,
              score:0
            },
            {
              text:"Ok",
              correct:true,
              score:300
            }
          ],
          
        },{
          question:"This is first question 4?",
          choices:[
            {
              text:"Too big",
              correct:true,
              score:400
            },
            {
              text:"Too small",
              correct:false,
              score:0
            },
            {
              text:"Ok",
              correct:false,
              score:0
            }
          ],
          
        },{
          question:"This is first question 5?",
          choices:[
            {
              text:"Too big",
              correct:false,
              score:0
            },
            {
              text:"Too small",
              correct:false,
              score:0
            },
            {
              text:"Ok",
              correct:true,
              score:500
            }
          ],
          
        },{
          position: "left",
          question:"This is first question 6?",
          choices:[
            {
              text:"Too big",
              correct:false,
              score:0
            },
            {
              text:"Too small",
              correct:false,
              score:0
            },
            {
              text:"Ok",
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
      title: "You have selected MBP, R448A, what will be the consequence?",
      quiz:[
        {
          position: "left",
          question:"This is first question 1?",
          choices:[
            {
              text:"Too big",
              correct:true,
              score:100
            },
            {
              text:"Too small",
              correct:false,
              score:0
            },
            {
              text:"Ok",
              correct:false,
              score:0
            }
          ],
          
        },{
          question:"This is first question 2?",
          choices:[
            {
              text:"Too big",
              correct:false,
              score:0
            },
            {
              text:"Too small",
              correct:false,
              score:0
            },
            {
              text:"Ok",
              correct:true,
              score:200
            }
          ],
          
        },{
          question:"This is first question 3?",
          choices:[
            {
              text:"Too big",
              correct:false,
              score:0
            },
            {
              text:"Too small",
              correct:false,
              score:0
            },
            {
              text:"Ok",
              correct:true,
              score:300
            }
          ],
          
        },{
          question:"This is first question 4?",
          choices:[
            {
              text:"Too big",
              correct:true,
              score:400
            },
            {
              text:"Too small",
              correct:false,
              score:0
            },
            {
              text:"Ok",
              correct:false,
              score:0
            }
          ],
          
        },{
          question:"This is first question 5?",
          choices:[
            {
              text:"Too big",
              correct:false,
              score:0
            },
            {
              text:"Too small",
              correct:false,
              score:0
            },
            {
              text:"Ok",
              correct:true,
              score:500
            }
          ],
          
        },{
          position: "left",
          question:"This is first question 6?",
          choices:[
            {
              text:"Too big",
              correct:false,
              score:0
            },
            {
              text:"Too small",
              correct:false,
              score:0
            },
            {
              text:"Ok",
              correct:true,
              score:600
            }
          ],
          
        }
      ]
    },
    {
      id:2,
      name : "R 450A"
    },
    {
      id:3,
      name : "R 513A"
    }

  ]

  lbp_ref = [
    {
      id:0,
      name : "R 449A",
      image: "assets/image/cold.png",
      title: "You have selected MBP, R448A, what will be the consequence?",
      quiz:[
        {
          question:"This is first question 1?",
          choices:[
            {
              text:"Too big",
              correct:true,
              score:100
            },
            {
              text:"Too small",
              correct:false,
              score:0
            },
            {
              text:"Ok",
              correct:false,
              score:0
            }
          ],
          
        },{
          question:"This is first question 2?",
          choices:[
            {
              text:"Too big",
              correct:false,
              score:0
            },
            {
              text:"Too small",
              correct:false,
              score:0
            },
            {
              text:"Ok",
              correct:true,
              score:200
            }
          ],
          
        },{
          question:"This is first question 3?",
          choices:[
            {
              text:"Too big",
              correct:false,
              score:0
            },
            {
              text:"Too small",
              correct:false,
              score:0
            },
            {
              text:"Ok",
              correct:true,
              score:300
            }
          ],
          
        },{
          question:"This is first question 4?",
          choices:[
            {
              text:"Too big",
              correct:true,
              score:400
            },
            {
              text:"Too small",
              correct:false,
              score:0
            },
            {
              text:"Ok",
              correct:false,
              score:0
            }
          ],
          
        },{
          question:"This is first question 5?",
          choices:[
            {
              text:"Too big",
              correct:false,
              score:0
            },
            {
              text:"Too small",
              correct:false,
              score:0
            },
            {
              text:"Ok",
              correct:true,
              score:500
            }
          ],
          
        },{
          position: "left",
          question:"This is first question 6?",
          choices:[
            {
              text:"Too big",
              correct:false,
              score:0
            },
            {
              text:"Too small",
              correct:false,
              score:0
            },
            {
              text:"Ok",
              correct:true,
              score:600
            }
          ],
          
        }
      ]
    },
    {
      id:1,
      name : "R 452A"
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
