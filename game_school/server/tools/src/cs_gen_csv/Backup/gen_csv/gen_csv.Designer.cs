﻿namespace gen_csv
{
    partial class gen_csv
    {
        /// <summary>
        /// 必需的设计器变量。
        /// </summary>
        private System.ComponentModel.IContainer components = null;

        /// <summary>
        /// 清理所有正在使用的资源。
        /// </summary>
        /// <param name="disposing">如果应释放托管资源，为 true；否则为 false。</param>
        protected override void Dispose(bool disposing)
        {
            if (disposing && (components != null))
            {
                components.Dispose();
            }
            base.Dispose(disposing);
        }

        #region Windows 窗体设计器生成的代码

        /// <summary>
        /// 设计器支持所需的方法 - 不要
        /// 使用代码编辑器修改此方法的内容。
        /// </summary>
        private void InitializeComponent()
        {
            this.button = new System.Windows.Forms.Button();
            this.label = new System.Windows.Forms.Label();
            this.textBox = new System.Windows.Forms.TextBox();
            this.listBox = new System.Windows.Forms.ListBox();
            this.versionbox = new System.Windows.Forms.ComboBox();
            this.SuspendLayout();
            // 
            // button
            // 
            this.button.Location = new System.Drawing.Point(562, 24);
            this.button.Name = "button";
            this.button.Size = new System.Drawing.Size(75, 23);
            this.button.TabIndex = 0;
            this.button.Text = "生成";
            this.button.UseVisualStyleBackColor = true;
            this.button.Click += new System.EventHandler(this.button_Click);
            // 
            // label
            // 
            this.label.AutoSize = true;
            this.label.Location = new System.Drawing.Point(12, 27);
            this.label.Name = "label";
            this.label.Size = new System.Drawing.Size(65, 12);
            this.label.TabIndex = 1;
            this.label.Text = "server目录";
            // 
            // textBox
            // 
            this.textBox.Location = new System.Drawing.Point(83, 24);
            this.textBox.Name = "textBox";
            this.textBox.Size = new System.Drawing.Size(460, 21);
            this.textBox.TabIndex = 2;
            // 
            // listBox
            // 
            this.listBox.FormattingEnabled = true;
            this.listBox.ItemHeight = 12;
            this.listBox.Location = new System.Drawing.Point(14, 51);
            this.listBox.Name = "listBox";
            this.listBox.Size = new System.Drawing.Size(529, 328);
            this.listBox.TabIndex = 3;
            // 
            // versionbox
            // 
            this.versionbox.DropDownStyle = System.Windows.Forms.ComboBoxStyle.DropDownList;
            this.versionbox.FormattingEnabled = true;
            this.versionbox.Location = new System.Drawing.Point(562, 53);
            this.versionbox.Name = "versionbox";
            this.versionbox.Size = new System.Drawing.Size(75, 20);
            this.versionbox.TabIndex = 4;
            this.versionbox.SelectedIndexChanged += new System.EventHandler(this.versionbox_SelectedIndexChanged);
            // 
            // gen_csv
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(6F, 12F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.ClientSize = new System.Drawing.Size(670, 395);
            this.Controls.Add(this.versionbox);
            this.Controls.Add(this.listBox);
            this.Controls.Add(this.textBox);
            this.Controls.Add(this.label);
            this.Controls.Add(this.button);
            this.Name = "gen_csv";
            this.StartPosition = System.Windows.Forms.FormStartPosition.CenterScreen;
            this.Text = "gen_csv";
            this.Load += new System.EventHandler(this.gen_csv_Load);
            this.ResumeLayout(false);
            this.PerformLayout();

        }

        #endregion

        private System.Windows.Forms.Button button;
        private System.Windows.Forms.Label label;
        private System.Windows.Forms.TextBox textBox;
        private System.Windows.Forms.ListBox listBox;
        private System.Windows.Forms.ComboBox versionbox;
    }
}

