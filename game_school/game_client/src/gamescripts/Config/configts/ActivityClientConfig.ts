class ActivityClientConfig extends BaseConfig{    public static  resLoaded:boolean = false;    private static  dic: Object = {};  	public static array: Array<ActivityClientConfig> = [];    public static  Init()    {       this. LoadRes();    }    public readonly id:number;    public readonly sort:number;    public readonly activityName:string;    public readonly contentPicture:string;    public readonly level:number;    public readonly timeType:number;    public readonly startTime:string;    public readonly endTime:string;    public readonly time:boolean;    public readonly rewardEndTime:string;    public readonly click_type:number;    public readonly click_para1:number;    public constructor(id : number , sort : number , activityName : string , contentPicture : string , level : number , timeType : number , startTime : string , endTime : string , time : boolean , rewardEndTime : string , click_type : number , click_para1 : number ){		super()        this.id = id;        this.sort = sort;        this.activityName = activityName;        this.contentPicture = contentPicture;        this.level = level;        this.timeType = timeType;        this.startTime = startTime;        this.endTime = endTime;        this.time = time;        this.rewardEndTime = rewardEndTime;        this.click_type = click_type;        this.click_para1 = click_para1;    }     private static  OnLoadFile( data:any)    { 		var byteData:egret.ByteArray = new egret.ByteArray( data );		var rs:ReadStream = new ReadStream(byteData);        /*int file_len = */rs.ReadInt();        var flag :string= rs.ReadString();        if(flag != "ActivityClientConfig")        {            return;        }        var col_cnt:number = rs.ReadShort();        if(col_cnt != 12)        {            return;        }        var row_cnt:number = rs.ReadInt();        for( var i = 0; i < row_cnt; i++)        {          this.  Add_Item(rs);        }	  ConfFact.SetResLoad("ActivityClientConfig");        this.  resLoaded = true;    }     private static  Add_Item(rs:ReadStream )    {               var id: number  = rs.ReadInt();      var sort: number  = rs.ReadInt();      var activityName: string  = rs.ReadString();      var contentPicture: string  = rs.ReadString();      var level: number  = rs.ReadInt();      var timeType: number  = rs.ReadInt();      var startTime: string  = rs.ReadString();      var endTime: string  = rs.ReadString();      var time: boolean  = rs.ReadBool();      var rewardEndTime: string  = rs.ReadString();      var click_type: number  = rs.ReadInt();      var click_para1: number  = rs.ReadInt();      var  new_obj_ActivityClientConfig : ActivityClientConfig = new ActivityClientConfig(id, sort, activityName, contentPicture, level, timeType, startTime, endTime, time, rewardEndTime, click_type, click_para1);                if(this.ContainsKey(id))        {            return;        }		this.dic[id]= new_obj_ActivityClientConfig;        this.array.push(new_obj_ActivityClientConfig);    }	private static  LoadRes()    {        if(this.resLoaded) return;		 if(this.isUseLocalTable)        {        var urlName:string = this. bytespath+="ActivityClientConfig.bytes";        RES.getResByUrl(urlName,this.OnLoadFile,this,RES.ResourceItem.TYPE_BIN);        }            }	 public static  GetConfig(  id ):ActivityClientConfig    {        for (var key in this.dic)            {            if(key==id)            {                 return this.dic[key];               }        }        return null;    }		   public static  ContainsKey(  id ):boolean    {        for (var key in this.dic)            {            if(key==id)            {                 return true;            }        }        return false;    }}