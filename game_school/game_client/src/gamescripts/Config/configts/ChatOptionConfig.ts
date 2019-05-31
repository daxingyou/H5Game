class ChatOptionConfig extends BaseConfig{    public static  resLoaded:boolean = false;    private static  dic: Object = {};  	public static array: Array<ChatOptionConfig> = [];    public static  Init()    {       this. LoadRes();    }    public readonly optionID:number;    public readonly optionNum:number;    public readonly optionContent1:string;    public readonly optionContent2:string;    public readonly optionContent3:string;    public readonly optionContent4:string;    public readonly nextChat1:number;    public readonly nextChat2:number;    public readonly nextChat3:number;    public readonly nextChat4:number;    public readonly firendAwardGirl:number[];    public readonly friendliness:number[];    public readonly reward_num:number[];    public constructor(optionID : number , optionNum : number , optionContent1 : string , optionContent2 : string , optionContent3 : string , optionContent4 : string , nextChat1 : number , nextChat2 : number , nextChat3 : number , nextChat4 : number , firendAwardGirl : number[] , friendliness : number[] , reward_num : number[] ){		super()        this.optionID = optionID;        this.optionNum = optionNum;        this.optionContent1 = optionContent1;        this.optionContent2 = optionContent2;        this.optionContent3 = optionContent3;        this.optionContent4 = optionContent4;        this.nextChat1 = nextChat1;        this.nextChat2 = nextChat2;        this.nextChat3 = nextChat3;        this.nextChat4 = nextChat4;        this.firendAwardGirl = firendAwardGirl;        this.friendliness = friendliness;        this.reward_num = reward_num;    }     private static  OnLoadFile( data:any)    { 		var byteData:egret.ByteArray = new egret.ByteArray( data );		var rs:ReadStream = new ReadStream(byteData);        /*int file_len = */rs.ReadInt();        var flag :string= rs.ReadString();        if(flag != "ChatOptionConfig")        {            return;        }        var col_cnt:number = rs.ReadShort();        if(col_cnt != 13)        {            return;        }        var row_cnt:number = rs.ReadInt();        for( var i = 0; i < row_cnt; i++)        {          this.  Add_Item(rs);        }	  ConfFact.SetResLoad("ChatOptionConfig");        this.  resLoaded = true;    }     private static  Add_Item(rs:ReadStream )    {                     var arr_item_len_ChatOptionConfig:number;      var optionID: number  = rs.ReadInt();      var optionNum: number  = rs.ReadInt();      var optionContent1: string  = rs.ReadString();      var optionContent2: string  = rs.ReadString();      var optionContent3: string  = rs.ReadString();      var optionContent4: string  = rs.ReadString();      var nextChat1: number  = rs.ReadInt();      var nextChat2: number  = rs.ReadInt();      var nextChat3: number  = rs.ReadInt();      var nextChat4: number  = rs.ReadInt();        arr_item_len_ChatOptionConfig = rs.ReadShort();    var  firendAwardGirl :  number[] = [];        for(var i = 0; i < arr_item_len_ChatOptionConfig; ++i)            firendAwardGirl[i] = rs.ReadInt();        arr_item_len_ChatOptionConfig = rs.ReadShort();    var  friendliness :  number[] = [];        for(var i = 0; i < arr_item_len_ChatOptionConfig; ++i)            friendliness[i] = rs.ReadInt();        arr_item_len_ChatOptionConfig = rs.ReadShort();    var  reward_num :  number[] = [];        for(var i = 0; i < arr_item_len_ChatOptionConfig; ++i)            reward_num[i] = rs.ReadInt();      var  new_obj_ChatOptionConfig : ChatOptionConfig = new ChatOptionConfig(optionID, optionNum, optionContent1, optionContent2, optionContent3, optionContent4, nextChat1, nextChat2, nextChat3, nextChat4, firendAwardGirl, friendliness, reward_num);                if(this.ContainsKey(optionID))        {            return;        }		this.dic[optionID]= new_obj_ChatOptionConfig;        this.array.push(new_obj_ChatOptionConfig);    }	private static  LoadRes()    {        if(this.resLoaded) return;		 if(this.isUseLocalTable)        {        var urlName:string = this. bytespath+="ChatOptionConfig.bytes";        RES.getResByUrl(urlName,this.OnLoadFile,this,RES.ResourceItem.TYPE_BIN);        }            }	 public static  GetConfig(  id ):ChatOptionConfig    {        for (var key in this.dic)            {            if(key==id)            {                 return this.dic[key];               }        }        return null;    }		   public static  ContainsKey(  id ):boolean    {        for (var key in this.dic)            {            if(key==id)            {                 return true;            }        }        return false;    }}