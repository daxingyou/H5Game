/**
 * Copyright (c) 2014,Egret-Labs.org
 * All rights reserved.
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 *     * Redistributions of source code must retain the above copyright
 *       notice, this list of conditions and the following disclaimer.
 *     * Redistributions in binary form must reproduce the above copyright
 *       notice, this list of conditions and the following disclaimer in the
 *       documentation and/or other materials provided with the distribution.
 *     * Neither the name of the Egret-Labs.org nor the
 *       names of its contributors may be used to endorse or promote products
 *       derived from this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY EGRET-LABS.ORG AND CONTRIBUTORS "AS IS" AND ANY
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL EGRET-LABS.ORG AND CONTRIBUTORS BE LIABLE FOR ANY
 * DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
 * (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
 * LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
 * ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
 * SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */

class Main extends egret.DisplayObjectContainer {
    public constructor() {
        super();
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
    }

    private onAddToStage(event: egret.Event) {
        this.removeEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);

        //注入自定义的素材解析器
        egret.registerImplementation("eui.IAssetAdapter", new AssetAdapter());
        egret.registerImplementation("eui.IThemeAdapter", new ThemeAdapter());
        //适配方式(全屏适配)
        if (App.DeviceUtils.IsMobile) {
            // App.StageUtils.startFullscreenAdaptation(750,1334,this.onResize);
            App.StageUtils.setScaleMode("fixedHeight");
        }
        else {
            App.StageUtils.setScaleMode("showAll");
        }
        egret.localStorage.clear();
        //初始化
        this.initLifecycle();
        this.initScene();
        //加载资源配置文件
        this.loadResConfig();
    }

    private initLifecycle(): void {
        egret.lifecycle.addLifecycleListener((context) => {
            // custom lifecycle plugin
        })
.0
        egret.lifecycle.onPause = () => {
            egret.ticker.pause();
        }

        egret.lifecycle.onResume = () => {
            egret.ticker.resume();
        }
    }

    private onResize(): void {
        //App.ControllerManager.applyFunc(ControllerConst.CCG_GameFight, CCG_GameConst.GameResize);
    }

    private loadResConfig(): void {
        //初始化Resource资源加载库
        App.ResourceUtils.addConfig("resource/default.res.json", "resource/");
        App.ResourceUtils.addConfig("resource/resource_json/resource_global.json", "resource/");    //基本数据（功效同于原来的config.txt）
        App.ResourceUtils.addConfig("resource/resource_json/sound_json/resource_sound.json", "resource/");
        App.ResourceUtils.addConfig("resource/resource_json/resoure_ui.json", "resource/");
        App.ResourceUtils.addConfig("resource/resource_json/resource_effect.json", "resource/");
        App.ResourceUtils.addConfig("resource/resource_json/resource_objects.json", "resource/");
        App.ResourceUtils.addConfig("resource/resource_json/sound_json/player_sound.json", "resource/");
        App.ResourceUtils.loadConfig(this.onConfigComplete, this);
    }

    private onConfigComplete(): void {
        //加载皮肤主题配置文件,可以手动修改这个文件。替换默认皮肤。
        var theme = new eui.Theme("resource/default.thm.json", this.stage);
        theme.addEventListener(eui.UIEvent.COMPLETE, this.onThemeLoadComplete, this);
    }

    /**
     * 表格初始化完成加载模块
     */
    private onThemeLoadComplete(): void {
        this.initLoadingModule(function ()//加载模块初始化
        {
            App.SceneManager.runScene(SceneConsts.LOADING);//进入loadingscene开启加载进度界面
            ConfFact.Register();//初始化表格
            var intervalID = setInterval(function onTick() 
            {
                App.EventMgrHelper.PushEvent(EventDef.LoadingConfig_progress, ConfFact.GetLoadedConfigName().length, ConfFact.ConfigCount());
                if (ConfFact.ResLoaded()) {
                    new GameMain();//开启游戏
                    clearInterval(intervalID);
                }
            }.bind(this), 1);

        }.bind(this));
    }

    /**
     * 初始化所有场景
     */
    private initScene(): void {
        App.SceneManager.register(SceneConsts.LOADING, new LoadingScene());
        App.SceneManager.register(SceneConsts.UI, new UIScene());
        App.SceneManager.register(SceneConsts.CCG_FIGHT, new CCG_GameFightScene());
    }

    /**
     * 加载模块初始化
     */
    private initLoadingModule(callback: Function): void {
        App.ControllerManager.RegisterLoadingController(callback);
    }
}


