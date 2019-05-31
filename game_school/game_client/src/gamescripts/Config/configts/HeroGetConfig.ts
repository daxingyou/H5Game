class HeroGetConfig extends BaseConfig{    public static  resLoaded:boolean = false;    private static  dic: Object = {};  	public static array: Array<HeroGetConfig> = [];    public static  Init()    {       this. LoadRes();    }    public readonly id:number;    public readonly comment:string;    public readonly costType:number;    public readonly normalCost:number;    public readonly tenTimesCost:number;    public readonly freeCd:number;    public readonly dailyMaxFree:number;    public readonly normalPool:number;    public readonly energyPool:number;    public readonly firstHero:number;    public readonly onSellHero:number[];    public readonly picture:string;    public readonly viplevel:number;    public constructor(id : number , comment : string , costType : number , normalCost : number , tenTimesCost : number , freeCd : number , dailyMaxFree : number , normalPool : number , energyPool : number , firstHero : number , onSellHero : number[] , picture : string , viplevel : number ){		super()        this.id = id;        this.comment = comment;        this.costType = costType;        this.normalCost = normalCost;        this.tenTimesCost = tenTimesCost;        this.freeCd = freeCd;        this.dailyMaxFree = dailyMaxFree;        this.normalPool = normalPool;        this.energyPool = energyPool;        this.firstHero = firstHero;        this.onSellHero = onSellHero;        this.picture = picture;        this.viplevel = viplevel;    }     private static  OnLoadFile( data:any)    { 		var byteData:egret.ByteArray = new egret.ByteArray( data );		var rs:ReadStream = new ReadStream(byteData);        /*int file_len = */rs.ReadInt();        var flag :string= rs.ReadString();        if(flag != "HeroGetConfig")        {            return;        }        var col_cnt:number = rs.ReadShort();        if(col_cnt != 13)        {            return;        }        var row_cnt:number = rs.ReadInt();        for( var i = 0; i < row_cnt; i++)        {          this.  Add_Item(rs);        }	  ConfFact.SetResLoad("HeroGetConfig");        this.  resLoaded = true;    }     private static  Add_Item(rs:ReadStream )    {                     var arr_item_len_HeroGetConfig:number;      var id: number  = rs.ReadInt();      var comment: string  = rs.ReadString();      var costType: number  = rs.ReadInt();      var normalCost: number  = rs.ReadInt();      var tenTimesCost: number  = rs.ReadInt();      var freeCd: number  = rs.ReadInt();      var dailyMaxFree: number  = rs.ReadInt();      var normalPool: number  = rs.ReadInt();      var energyPool: number  = rs.ReadInt();      var firstHero: number  = rs.ReadInt();        arr_item_len_HeroGetConfig = rs.ReadShort();    var  onSellHero :  number[] = [];        for(var i = 0; i < arr_item_len_HeroGetConfig; ++i)            onSellHero[i] = rs.ReadInt();      var picture: string  = rs.ReadString();      var viplevel: number  = rs.ReadInt();      var  new_obj_HeroGetConfig : HeroGetConfig = new HeroGetConfig(id, comment, costType, normalCost, tenTimesCost, freeCd, dailyMaxFree, normalPool, energyPool, firstHero, onSellHero, picture, viplevel);                if(this.ContainsKey(id))        {            return;        }		this.dic[id]= new_obj_HeroGetConfig;        this.array.push(new_obj_HeroGetConfig);    }	private static  LoadRes()    {        if(this.resLoaded) return;		 if(this.isUseLocalTable)        {        var urlName:string = this. bytespath+="HeroGetConfig.bytes";        RES.getResByUrl(urlName,this.OnLoadFile,this,RES.ResourceItem.TYPE_BIN);        }            }	 public static  GetConfig(  id ):HeroGetConfig    {        for (var key in this.dic)            {            if(key==id)            {                 return this.dic[key];               }        }        return null;    }		   public static  ContainsKey(  id ):boolean    {        for (var key in this.dic)            {            if(key==id)            {                 return true;            }        }        return false;    }}