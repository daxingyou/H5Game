var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var CreatureTempletConfig = (function (_super) {
    __extends(CreatureTempletConfig, _super);
    function CreatureTempletConfig(id, name, icon, model, mainAttr, association, label, hurtDraw, ability, life, damage, physical_defence, spell_defence, crit_amount, toughness_amout, shot_speed, linking_skills_probability, damage_reduction, deeper_damage, crit_chance, toughness_chance, crit_damage, crit_reduced_amount, treatment_effect, break_strength, break_resistance) {
        var _this = _super.call(this) || this;
        _this.id = id;
        _this.name = name;
        _this.icon = icon;
        _this.model = model;
        _this.mainAttr = mainAttr;
        _this.association = association;
        _this.label = label;
        _this.hurtDraw = hurtDraw;
        _this.ability = ability;
        _this.life = life;
        _this.damage = damage;
        _this.physical_defence = physical_defence;
        _this.spell_defence = spell_defence;
        _this.crit_amount = crit_amount;
        _this.toughness_amout = toughness_amout;
        _this.shot_speed = shot_speed;
        _this.linking_skills_probability = linking_skills_probability;
        _this.damage_reduction = damage_reduction;
        _this.deeper_damage = deeper_damage;
        _this.crit_chance = crit_chance;
        _this.toughness_chance = toughness_chance;
        _this.crit_damage = crit_damage;
        _this.crit_reduced_amount = crit_reduced_amount;
        _this.treatment_effect = treatment_effect;
        _this.break_strength = break_strength;
        _this.break_resistance = break_resistance;
        return _this;
    }
    CreatureTempletConfig.Init = function () {
        this.LoadRes();
    };
    CreatureTempletConfig.OnLoadFile = function (data) {
        var byteData = new egret.ByteArray(data);
        var rs = new ReadStream(byteData);
        /*int file_len = */ rs.ReadInt();
        var flag = rs.ReadString();
        if (flag != "CreatureTempletConfig") {
            return;
        }
        var col_cnt = rs.ReadShort();
        if (col_cnt != 26) {
            return;
        }
        var row_cnt = rs.ReadInt();
        for (var i = 0; i < row_cnt; i++) {
            this.Add_Item(rs);
        }
        ConfFact.SetResLoad("CreatureTempletConfig");
        this.resLoaded = true;
    };
    CreatureTempletConfig.Add_Item = function (rs) {
        var arr_item_len_CreatureTempletConfig;
        var id = rs.ReadInt();
        var name = rs.ReadString();
        var icon = rs.ReadString();
        var model = rs.ReadInt();
        var mainAttr = rs.ReadInt();
        var association = rs.ReadInt();
        arr_item_len_CreatureTempletConfig = rs.ReadShort();
        var label = [];
        for (var i = 0; i < arr_item_len_CreatureTempletConfig; ++i)
            label[i] =
                rs.ReadInt();
        var hurtDraw = rs.ReadInt();
        var ability = rs.ReadInt();
        var life = rs.ReadFloat();
        var damage = rs.ReadFloat();
        var physical_defence = rs.ReadFloat();
        var spell_defence = rs.ReadFloat();
        var crit_amount = rs.ReadFloat();
        var toughness_amout = rs.ReadFloat();
        var shot_speed = rs.ReadFloat();
        var linking_skills_probability = rs.ReadFloat();
        var damage_reduction = rs.ReadFloat();
        var deeper_damage = rs.ReadFloat();
        var crit_chance = rs.ReadFloat();
        var toughness_chance = rs.ReadFloat();
        var crit_damage = rs.ReadFloat();
        var crit_reduced_amount = rs.ReadFloat();
        var treatment_effect = rs.ReadFloat();
        var break_strength = rs.ReadFloat();
        var break_resistance = rs.ReadFloat();
        var new_obj_CreatureTempletConfig = new CreatureTempletConfig(id, name, icon, model, mainAttr, association, label, hurtDraw, ability, life, damage, physical_defence, spell_defence, crit_amount, toughness_amout, shot_speed, linking_skills_probability, damage_reduction, deeper_damage, crit_chance, toughness_chance, crit_damage, crit_reduced_amount, treatment_effect, break_strength, break_resistance);
        if (this.ContainsKey(id)) {
            return;
        }
        this.dic[id] = new_obj_CreatureTempletConfig;
        this.array.push(new_obj_CreatureTempletConfig);
    };
    CreatureTempletConfig.LoadRes = function () {
        if (this.resLoaded)
            return;
        if (this.isUseLocalTable) {
            var urlName = this.bytespath += "CreatureTempletConfig.bytes";
            RES.getResByUrl(urlName, this.OnLoadFile, this, RES.ResourceItem.TYPE_BIN);
        }
    };
    CreatureTempletConfig.GetConfig = function (id) {
        for (var key in this.dic) {
            if (key == id) {
                return this.dic[key];
            }
        }
        return null;
    };
    CreatureTempletConfig.ContainsKey = function (id) {
        for (var key in this.dic) {
            if (key == id) {
                return true;
            }
        }
        return false;
    };
    CreatureTempletConfig.resLoaded = false;
    CreatureTempletConfig.dic = {};
    CreatureTempletConfig.array = [];
    return CreatureTempletConfig;
}(BaseConfig));
__reflect(CreatureTempletConfig.prototype, "CreatureTempletConfig");
//# sourceMappingURL=CreatureTempletConfig.js.map