class RoleNameConfig extends BaseConfig{    public static  resLoaded:boolean = false;    private static  dic: Object = {};  	public static array: Array<RoleNameConfig> = [];    public static  Init()    {       this. LoadRes();    }    public readonly id:number;    public readonly fristname:string;    public readonly name:string;    public constructor(id : number , fristname : string , name : string ){		super()        this.id = id;        this.fristname = fristname;        this.name = name;    }     private static  OnLoadFile( data:any)    { 		var byteData:egret.ByteArray = new egret.ByteArray( data );		var rs:ReadStream = new ReadStream(byteData);        /*int file_len = */rs.ReadInt();        var flag :string= rs.ReadString();        if(flag != "RoleNameConfig")        {            return;        }        var col_cnt:number = rs.ReadShort();        if(col_cnt != 3)        {            return;        }        var row_cnt:number = rs.ReadInt();        for( var i = 0; i < row_cnt; i++)        {          this.  Add_Item(rs);        }	  ConfFact.SetResLoad("RoleNameConfig");        this.  resLoaded = true;    }     private static  Add_Item(rs:ReadStream )    {               var id: number  = rs.ReadInt();      var fristname: string  = rs.ReadString();      var name: string  = rs.ReadString();      var  new_obj_RoleNameConfig : RoleNameConfig = new RoleNameConfig(id, fristname, name);                if(this.ContainsKey(id))        {            return;        }		this.dic[id]= new_obj_RoleNameConfig;        this.array.push(new_obj_RoleNameConfig);    }	private static  LoadRes()    {        if(this.resLoaded) return;		 if(this.isUseLocalTable)        {        var urlName:string = this. bytespath+="RoleNameConfig.bytes";        RES.getResByUrl(urlName,this.OnLoadFile,this,RES.ResourceItem.TYPE_BIN);        }            }	 public static  GetConfig(  id ):RoleNameConfig    {        for (var key in this.dic)            {            if(key==id)            {                 return this.dic[key];               }        }        return null;    }		   public static  ContainsKey(  id ):boolean    {        for (var key in this.dic)            {            if(key==id)            {                 return true;            }        }        return false;    }}