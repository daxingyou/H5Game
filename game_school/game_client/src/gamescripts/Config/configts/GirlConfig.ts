class GirlConfig extends BaseConfig{    public static  resLoaded:boolean = false;    private static  dic: Object = {};  	public static array: Array<GirlConfig> = [];    public static  Init()    {       this. LoadRes();    }    public readonly id:number;    public readonly name:string;    public readonly associationName:string;    public readonly icon:string;    public readonly plot:number[];    public readonly live2D:number;    public readonly bloodType:string;    public readonly constellation:string;    public constructor(id : number , name : string , associationName : string , icon : string , plot : number[] , live2D : number , bloodType : string , constellation : string ){		super()        this.id = id;        this.name = name;        this.associationName = associationName;        this.icon = icon;        this.plot = plot;        this.live2D = live2D;        this.bloodType = bloodType;        this.constellation = constellation;    }     private static  OnLoadFile( data:any)    { 		var byteData:egret.ByteArray = new egret.ByteArray( data );		var rs:ReadStream = new ReadStream(byteData);        /*int file_len = */rs.ReadInt();        var flag :string= rs.ReadString();        if(flag != "GirlConfig")        {            return;        }        var col_cnt:number = rs.ReadShort();        if(col_cnt != 8)        {            return;        }        var row_cnt:number = rs.ReadInt();        for( var i = 0; i < row_cnt; i++)        {          this.  Add_Item(rs);        }	  ConfFact.SetResLoad("GirlConfig");        this.  resLoaded = true;    }     private static  Add_Item(rs:ReadStream )    {                     var arr_item_len_GirlConfig:number;      var id: number  = rs.ReadInt();      var name: string  = rs.ReadString();      var associationName: string  = rs.ReadString();      var icon: string  = rs.ReadString();        arr_item_len_GirlConfig = rs.ReadShort();    var  plot :  number[] = [];        for(var i = 0; i < arr_item_len_GirlConfig; ++i)            plot[i] = rs.ReadInt();      var live2D: number  = rs.ReadInt();      var bloodType: string  = rs.ReadString();      var constellation: string  = rs.ReadString();      var  new_obj_GirlConfig : GirlConfig = new GirlConfig(id, name, associationName, icon, plot, live2D, bloodType, constellation);                if(this.ContainsKey(id))        {            return;        }		this.dic[id]= new_obj_GirlConfig;        this.array.push(new_obj_GirlConfig);    }	private static  LoadRes()    {        if(this.resLoaded) return;		 if(this.isUseLocalTable)        {        var urlName:string = this. bytespath+="GirlConfig.bytes";        RES.getResByUrl(urlName,this.OnLoadFile,this,RES.ResourceItem.TYPE_BIN);        }            }	 public static  GetConfig(  id ):GirlConfig    {        for (var key in this.dic)            {            if(key==id)            {                 return this.dic[key];               }        }        return null;    }		   public static  ContainsKey(  id ):boolean    {        for (var key in this.dic)            {            if(key==id)            {                 return true;            }        }        return false;    }}