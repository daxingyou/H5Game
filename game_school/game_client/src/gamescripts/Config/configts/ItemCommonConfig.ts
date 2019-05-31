class ItemCommonConfig extends BaseConfig{    public static  resLoaded:boolean = false;    private static  dic: Object = {};  	public static array: Array<ItemCommonConfig> = [];    public static  Init()    {       this. LoadRes();    }    public readonly id:number;    public readonly name:string;    public readonly icon:string;    public readonly type:number;    public readonly subType:number;    public readonly levelLimit:number;    public readonly color:number;    public readonly itemRule:number;    public readonly salePrice:number;    public readonly overlapNum:number;    public readonly description:string;    public readonly useScript:string[];    public readonly isBatchUse:boolean;    public readonly isContiUse:boolean;    public readonly isquickUse:boolean;    public readonly open_ui:number[];    public readonly acquisition:string;    public constructor(id : number , name : string , icon : string , type : number , subType : number , levelLimit : number , color : number , itemRule : number , salePrice : number , overlapNum : number , description : string , useScript : string[] , isBatchUse : boolean , isContiUse : boolean , isquickUse : boolean , open_ui : number[] , acquisition : string ){		super()        this.id = id;        this.name = name;        this.icon = icon;        this.type = type;        this.subType = subType;        this.levelLimit = levelLimit;        this.color = color;        this.itemRule = itemRule;        this.salePrice = salePrice;        this.overlapNum = overlapNum;        this.description = description;        this.useScript = useScript;        this.isBatchUse = isBatchUse;        this.isContiUse = isContiUse;        this.isquickUse = isquickUse;        this.open_ui = open_ui;        this.acquisition = acquisition;    }     private static  OnLoadFile( data:any)    { 		var byteData:egret.ByteArray = new egret.ByteArray( data );		var rs:ReadStream = new ReadStream(byteData);        /*int file_len = */rs.ReadInt();        var flag :string= rs.ReadString();        if(flag != "ItemCommonConfig")        {            return;        }        var col_cnt:number = rs.ReadShort();        if(col_cnt != 17)        {            return;        }        var row_cnt:number = rs.ReadInt();        for( var i = 0; i < row_cnt; i++)        {          this.  Add_Item(rs);        }	  ConfFact.SetResLoad("ItemCommonConfig");        this.  resLoaded = true;    }     private static  Add_Item(rs:ReadStream )    {                     var arr_item_len_ItemCommonConfig:number;      var id: number  = rs.ReadInt();      var name: string  = rs.ReadString();      var icon: string  = rs.ReadString();      var type: number  = rs.ReadInt();      var subType: number  = rs.ReadInt();      var levelLimit: number  = rs.ReadInt();      var color: number  = rs.ReadInt();      var itemRule: number  = rs.ReadInt();      var salePrice: number  = rs.ReadInt();      var overlapNum: number  = rs.ReadInt();      var description: string  = rs.ReadString();        arr_item_len_ItemCommonConfig = rs.ReadShort();    var  useScript :  string[] = [];        for(var i = 0; i < arr_item_len_ItemCommonConfig; ++i)            useScript[i] = rs.ReadString();      var isBatchUse: boolean  = rs.ReadBool();      var isContiUse: boolean  = rs.ReadBool();      var isquickUse: boolean  = rs.ReadBool();        arr_item_len_ItemCommonConfig = rs.ReadShort();    var  open_ui :  number[] = [];        for(var i = 0; i < arr_item_len_ItemCommonConfig; ++i)            open_ui[i] = rs.ReadInt();      var acquisition: string  = rs.ReadString();      var  new_obj_ItemCommonConfig : ItemCommonConfig = new ItemCommonConfig(id, name, icon, type, subType, levelLimit, color, itemRule, salePrice, overlapNum, description, useScript, isBatchUse, isContiUse, isquickUse, open_ui, acquisition);                if(this.ContainsKey(id))        {            return;        }		this.dic[id]= new_obj_ItemCommonConfig;        this.array.push(new_obj_ItemCommonConfig);    }	private static  LoadRes()    {        if(this.resLoaded) return;		 if(this.isUseLocalTable)        {        var urlName:string = this. bytespath+="ItemCommonConfig.bytes";        RES.getResByUrl(urlName,this.OnLoadFile,this,RES.ResourceItem.TYPE_BIN);        }            }	 public static  GetConfig(  id ):ItemCommonConfig    {        for (var key in this.dic)            {            if(key==id)            {                 return this.dic[key];               }        }        return null;    }		   public static  ContainsKey(  id ):boolean    {        for (var key in this.dic)            {            if(key==id)            {                 return true;            }        }        return false;    }}