class ClientConstConfig extends BaseConfig{    public static  resLoaded:boolean = false;    private static  dic: Object = {};  	public static array: Array<ClientConstConfig> = [];    public static  Init()    {       this. LoadRes();    }    public readonly id:number;    public readonly value:string;    public constructor(id : number , value : string ){		super()        this.id = id;        this.value = value;    }     private static  OnLoadFile( data:any)    { 		var byteData:egret.ByteArray = new egret.ByteArray( data );		var rs:ReadStream = new ReadStream(byteData);        /*int file_len = */rs.ReadInt();        var flag :string= rs.ReadString();        if(flag != "ClientConstConfig")        {            return;        }        var col_cnt:number = rs.ReadShort();        if(col_cnt != 2)        {            return;        }        var row_cnt:number = rs.ReadInt();        for( var i = 0; i < row_cnt; i++)        {          this.  Add_Item(rs);        }	  ConfFact.SetResLoad("ClientConstConfig");        this.  resLoaded = true;    }     private static  Add_Item(rs:ReadStream )    {               var id: number  = rs.ReadInt();      var value: string  = rs.ReadString();      var  new_obj_ClientConstConfig : ClientConstConfig = new ClientConstConfig(id, value);                if(this.ContainsKey(id))        {            return;        }		this.dic[id]= new_obj_ClientConstConfig;        this.array.push(new_obj_ClientConstConfig);    }	private static  LoadRes()    {        if(this.resLoaded) return;		 if(this.isUseLocalTable)        {        var urlName:string = this. bytespath+="ClientConstConfig.bytes";        RES.getResByUrl(urlName,this.OnLoadFile,this,RES.ResourceItem.TYPE_BIN);        }            }	 public static  GetConfig(  id ):ClientConstConfig    {        for (var key in this.dic)            {            if(key==id)            {                 return this.dic[key];               }        }        return null;    }		   public static  ContainsKey(  id ):boolean    {        for (var key in this.dic)            {            if(key==id)            {                 return true;            }        }        return false;    }}