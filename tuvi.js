var g_token_key = "";
var g_isIpad = 0;
var g_Path_toTV = "";
//var g_isIpad = 1;
var isFirst = 0;
var isGetLS = 0;
var g_isLuuHan = 0;
var g_isFullOpt = 0;
var g_hoten = "";
var g_isduonglich = 1;
var g_ngayCur = 1; //4
var g_thangCur = 1; //6
var g_isNam = 1;
var g_namHan = 1;
var g_namSinh= 1;
var g_mau = 1;
var g_gioSinh = 4;
var g_gioDH = 0;
var g_gioDM = 0;
var g_isLuu4Hoa = 1;
var g_isLuu4Duc = 0;
var g_isLuuKhoiVietKhac = 0;
var g_isLuuThaiTueDB = 0;
var g_isLocNhap = 1;
var g_isInLS = 0;
var g_isTuongtinh = 0;
var g_anTuHoa = 1;
var g_isLuuTuanTriet = 0;
var g_thanCu = "";
var g_isNom = 0;

var c_disableAll = ""; 
var c_padYSao = 19;
var c_Tencung_x = 55;
var c_Tencung_y = 28;
var c_TenCT_x = 60;
var c_TenCT_y = 50; //48
var c_Tensao_x = 7;
var c_Tensao_y = 90; //85
var c_MaxSaoCung = 10;

var c_PadSao = 107; //115
var LIMITDAY = [31,28,31,30,31,30,31,31,30,31,30,31];
var CANNAM1 = ["Canh","TĂ¢n","NhĂ¢m","QuĂ½","GiĂ¡p","áº¤t","BĂ­nh","Äinh","Máº­u","Ká»·"];
var CANNAM2 = ["Canh","Tan","Nham","Quy","Giap","At","Binh","Dinh","Mau","Ky"];
var CHINAM1 = ["ThĂ¢n","Dáº­u","Tuáº¥t","Há»£i","TĂ­","Sá»­u","Dáº§n","MĂ£o","ThĂ¬n","Tá»µ","Ngá»","MĂ¹i"];
var CHINAM2 = ["Than","Dau","Tuat","Hoi","Ti","Suu","Dan","Mao","Thin","Ty","Ngo","Mui"];
var CAN_HN = ["åº","è¾›","å£¬","ç™¸","ç”²","ä¹™","ä¸™","ä¸","æˆ","å·±"];
var CHI_HN = ["ç”³","é…‰","æˆŒ","äº¥","å­","ä¸‘","å¯…","å¯","è¾°","å·³","åˆ","æœª"];
var NGUHANHSK = [0,1,4,3,2];
var color_nguHanh = ["#000000","#009900","#858585","#FF9900","#FF0000"];

var f_font_Cung = "bold 17px Tahoma";
var f_font_CT = "bold 18px Tahoma";
var f_font_SaoTo = "bold 15px Tahoma";
var f_font_Sao = "15px Tahoma";
var f_font_TS = "bold 14px Tahoma";


function applyIsNam(a){
	g_isNam = a;
}

function applyIsMau(a){
	g_mau = a;
}

function applyAnTuHoa(a){
	g_anTuHoa = a;
}


function applyChange(){
	g_ngayCur = document.getElementById('ngaysinh').value;
	g_thangCur = document.getElementById('thangsinh').value;
	g_hoten = document.getElementById('hovaten').value;
	if(g_isduonglich == 1){
		if(isNaN(document.getElementById('namsinh').value) == false) 
			g_namSinh = document.getElementById('namsinh').value;
		if(isNaN(document.getElementById('textNamHan').value) == false) 
			g_namHan = document.getElementById('textNamHan').value;			
	}
}

function changeAmlich(a){
	g_isduonglich = a;
	var text = "";
	var i;
	if(a == 1){
		text += '<input type="number" id="giosinhH" value="' + g_gioDH + '" min="0" max="23" maxlength="2"/> giá»';
		text += '<input type="number" id="giosinhM" value="' + g_gioDM + '" min="0" max="59" maxlength="2"/> phĂºt';
	}else{
		text += '<select id="giosinh" name="giosinh">';
		for(i = 0;i<12;i++){
			if(i == g_gioSinh){
				text += '<option selected="selected" value="' + ((i+4)%12) + '">' + CHINAM1[(i + 4)%12] + '</option>';				
			}else text += '<option value="' + ((i+4)%12) + '">' + CHINAM1[(i + 4)%12] + '</option>';
		}		
	}
	document.getElementById("divGioSinh").innerHTML = text;
	changeMonth();
}

function changeMonth(){
	var text = "";
	var i;
	applyChange();
	
	if(g_isduonglich == 1){
		if(document.getElementById('thangsinh').value == 2){
			if(document.getElementById('namsinh').value % 4 == 0){
				for(i = 1;i<=29;i++){
					if(i == g_ngayCur) text += "<option value='" + i + "' selected='selected'>" + i + "</option>";
					else text += "<option value='" + i + "'>" + i + "</option>";
				}
			}else{
				for(i = 1;i<=28;i++){
					if(i == g_ngayCur) text += "<option value='" + i + "' selected='selected'>" + i + "</option>";
					else text += "<option value='" + i + "'>" + i + "</option>";
				}
			} 
		}else if((document.getElementById('thangsinh').value % 2 == 0 && document.getElementById('thangsinh').value < 8) || (document.getElementById('thangsinh').value % 2 == 1 && document.getElementById('thangsinh').value > 8)){
			for(i = 1;i<=30;i++){
				if(i == g_ngayCur) text += "<option value='" + i + "' selected='selected'>" + i + "</option>";
				else text += "<option value='" + i + "'>" + i + "</option>";
			}
		}else{
			for(i = 1;i<=31;i++){
				if(i == g_ngayCur) text += "<option value='" + i + "' selected='selected'>" + i + "</option>";
				else text += "<option value='" + i + "'>" + i + "</option>";
			}
		}
		text = "<select id='ngaysinh' name='ngaysinh' onChange='applyChange();'>" + text + "</select>";
			document.getElementById("divngaysinh").innerHTML = text;
	}else{
		for(i = 1;i<=30;i++){
			if(i == g_ngayCur) text += "<option value='" + i + "' selected='selected'>" + i + "</option>";
			else text += "<option value='" + i + "'>" + i + "</option>";
		}
		text = "<select id='ngaysinh' name='ngaysinh'>" + text + "</select>";
		document.getElementById("divngaysinh").innerHTML = text;
	}
}

function drawCanvas(ctx, width, height){
//	ctx.fillStyle = "#FFFFFF";
	ctx.fillStyle = "#E7E4DD";
	ctx.fillRect(0,0,width,height);
	
	ctx.fillStyle = "#000000";
	ctx.lineWidth = 1;
	
	ctx.moveTo(1,1);
	ctx.lineTo(1,height);
	
	ctx.moveTo(1,1);
	ctx.lineTo(width,1);
	
	ctx.moveTo(width,1);
	ctx.lineTo(width,height);
	
	ctx.moveTo(1,height);
	ctx.lineTo(width,height);
	
	ctx.fillStyle = "#000000";
	ctx.lineWidth = 2;
	
	ctx.moveTo(width/4,0);
	ctx.lineTo(width/4,height);
	
	ctx.moveTo(3*width/4,0);
	ctx.lineTo(3*width/4,height);
	
	ctx.moveTo(0,height/2);
	ctx.lineTo(width/4,height/2);
	
	ctx.moveTo(3*width/4,height/2);
	ctx.lineTo(width,height/2);
	
	ctx.stroke();	
	ctx.lineWidth = 1;
}

function drawCanvasFullOpt(ctx, width, height){
//	ctx.fillStyle = "#FFFFFF";
	ctx.fillStyle = "#E7E4DD";
	ctx.fillRect(0,0,width,height);
			
	// trong
	var padx = 60;
	var pady = 40;
	
	ctx.lineWidth = 1;	
	ctx.fillStyle = "#000000";
	ctx.beginPath();
/*	
	ctx.strokeRect(width/4,height/4, width/2, pady);
	ctx.strokeRect(width/4,3*height/4 - pady, width/2, pady);
	ctx.strokeRect(width/4,height/4, padx, height/4);
	ctx.strokeRect(width/4,height/2, padx, height/4);
	ctx.strokeRect(3*width/4 - padx,height/4, padx, height/4);
	ctx.strokeRect(3*width/4 - padx,height/2, padx, height/4);
	
	ctx.moveTo(width/2,3*height/4 - 10);
	ctx.lineTo(width/2,3*height/4 - pady);

	ctx.moveTo(width/2,height/4 + 10);
	ctx.lineTo(width/2,height/4 + pady);	
	ctx.stroke();	
*/	
	ctx.fillStyle = "#000000";
	ctx.lineWidth = 1;
	ctx.beginPath();
	
	ctx.moveTo(1,1);
	ctx.lineTo(1,height);
	
	ctx.moveTo(1,1);
	ctx.lineTo(width,1);
	
	ctx.moveTo(width,1);
	ctx.lineTo(width,height);
	
	ctx.moveTo(1,height);
	ctx.lineTo(width,height);
	
	ctx.moveTo(width/4,0);
	ctx.lineTo(width/4,height);
	
	ctx.moveTo(3*width/4,0);
	ctx.lineTo(3*width/4,height);
	
	ctx.moveTo(0,height/2);
	ctx.lineTo(width/4,height/2);
	
	ctx.moveTo(3*width/4,height/2);
	ctx.lineTo(width,height/2);
		
	ctx.stroke();
	ctx.lineWidth = 1;
}

function drawCanva(ctx, index, tt, width, height, loc0, loc1){
	ctx.fillStyle = "#000000";	
	var tg;
	ctx.lineWidth = 1;
//	ctx.beginPath();
	var pady = 40;
	if(index == 0 || index == 2){		
		if(tt == 1){
			ctx.moveTo(3*width/4,loc1 + 10);
			ctx.lineTo(loc0,loc1 + 10);				
			ctx.moveTo(7*width/4 - loc0,loc1 + 10);
			ctx.lineTo(width,loc1 + 10);
		}else{
			if(index == 0) tg = height/4;
			else tg = 3*height/4;
			ctx.moveTo(3*width/4,tg);
			ctx.lineTo(width,tg);								
		}		
	}else if(index == 4 || index == 10){
		if(tt == 1){
			ctx.moveTo(width/4,loc1 + 10);
			ctx.lineTo(loc0,loc1 + 10);
			ctx.moveTo(width - loc0,loc1 + 10);
			ctx.lineTo(3*width/4,loc1 + 10);
			if(index == 4){ 
				ctx.moveTo(width/2,loc1 + 20);
				ctx.lineTo(width/2,height);	
				tg = 3*height/4;									
			}else{
				ctx.moveTo(width/2,0);
				ctx.lineTo(width/2,loc1);
				tg = height/4;					
			}			
		}else{
			if(index == 10){ 
				ctx.moveTo(width/2,0);
				ctx.lineTo(width/2,height/4);	
				tg = height/4;	
/*
				if(g_isFullOpt == 1){
					ctx.lineWidth = 2;
					ctx.strokeRect(width/4,height/4, width/4, pady);
					ctx.lineWidth = 3;
				}
*/
			}else{
				ctx.moveTo(width/2,3*height/4);
				ctx.lineTo(width/2,height);				
				tg = 3*height/4;
/*
				if(g_isFullOpt == 1){
					ctx.lineWidth = 2;
					ctx.strokeRect(width/4,3*height/4 - pady, width/4, pady);
					ctx.lineWidth = 3;
				}
*/				
			}
			ctx.moveTo(width/4,tg);
			ctx.lineTo(3*width/4,tg);				
		}	
	}else if(index == 6 || index == 8){
		if(tt == 1){
			ctx.moveTo(0,loc1 + 10);
			ctx.lineTo(loc0,loc1 + 10);				
			ctx.moveTo(width/4 - loc0,loc1 + 10);
			ctx.lineTo(width/4,loc1 + 10);
		}else{
			if(index == 6) tg = 3*height/4;
			else tg = height/4;
			ctx.moveTo(0,tg);
			ctx.lineTo(width/4,tg);				
		}		
	}
	ctx.stroke();
	ctx.lineWidth = 1;	
}

function underline(ctx, text, x, y, size, color, thickness, offset){
	var width = ctx.measureText(text).width;

	switch(ctx.textAlign){
		case "center":
		x -= (width/2); break;
		case "right":
		x -= width; break;
	}

	y += size+offset;

	ctx.beginPath();
	ctx.strokeStyle = color;
	ctx.lineWidth = thickness;
	ctx.moveTo(x,y);
	ctx.lineTo(x+width,y);
	ctx.stroke();

}

function locTuanTriet(index, width, height){
	var loc = [0,0];
	switch(index){
		case 0: loc[0] = (7*width)/8 - 30; loc[1] = height/4 - 10;break;
		case 2: loc[0] = (7*width)/8 - 30; loc[1] = 3*height/4 - 10;break;
		case 4: loc[0] = width/2 - 30; loc[1] = 3*height/4 - 10;break;
		case 6: loc[0] = width/8 - 30; loc[1] = 3*height/4 - 10;break;
		case 8: loc[0] = width/8 - 30; loc[1] = height/4 - 10;break;
		case 10: loc[0] = width/2 - 30; loc[1] = height/4 - 10;break;
	}
	return loc;
}

function drawCung(ctx, index, cung, width, height){	
	if(g_isNom == 1){
		f_font_Cung = "bold 19px Chu Nom Khai";
		f_font_CT = "bold 20px Chu Nom Khai";
		f_font_SaoTo = "bold 17px Chu Nom Khai";
		f_font_Sao = "17px Chu Nom Khai";
		f_font_TS = "bold 16px Chu Nom Khai";
	}else{
	    f_font_Cung = "bold 17px Tahoma";
        f_font_CT = "bold 18px Tahoma";
        f_font_SaoTo = "bold 15px Tahoma";
        f_font_Sao = "15px Tahoma";
        f_font_TS = "bold 14px Tahoma";
	}

	if(g_isIpad == 1){ 
		c_MaxSaoCung = 8;
		c_padYSao = 17;
		c_Tensao_y = 88;
	}
	
	var locx;
	var locy;
	var i;
	for(i = 0;i<4;i++){
		if(index == i){
			locx = 3*width/4;
			locy = i * height/4;
		}
	}
	
	for(i = 4;i<7;i++){
		if(index == i){
			locx = (6 - i) * width/4;
			locy = 3 * height/4;
		}
	}
	
	for(i = 7;i<10;i++){
		if(index == i){
			locx = 0;
			locy = (9 - i) * height/4;
		}
	}

	for(i = 10;i<12;i++){
		if(index == i){
			locx = (i - 9) * width/4;
			locy = 0;
		}
	}
	ctx.fillStyle = "#000000";
	ctx.font = f_font_Cung;
	ctx.textAlign="center";
	var tge = cung.Name;
	if(cung.Than == 1){
		g_thanCu = cung.Name;
		tge = "  ";		
		for(i = 0;i < cung.Name.length;i++){
			tge += "  ";			
		}	
		if(g_isNom == 1){
			tge += " <èº«>";	
		}else{
			tge += "<THĂ‚N>";
		}
		
		if(g_mau == 1) ctx.fillStyle = "#FF0000";
		ctx.fillText(tge, locx + width/8, locy + c_Tencung_y);
		ctx.fillStyle = "#000000";
		tge = cung.Name + "              ";
	}		
	ctx.fillText(tge, locx + width/8, locy + c_Tencung_y);
	
	ctx.font = f_font_CT;
	for(i = 0;i<cung.nChinhTinh;i++){
		if(g_mau == 1) ctx.fillStyle = color_nguHanh[cung.ChinhTinh[i].NguHanh - 2];
		ctx.fillText(cung.ChinhTinh[i].Name + "(" + cung.ChinhTinh[i].Status + ")",locx + width/8, locy + c_TenCT_y + i * 20);
	}
	
	ctx.textAlign="left";
	for(i = 0;i<cung.nSaoTot;i++){
		if(g_mau == 1) ctx.fillStyle = color_nguHanh[cung.Saotot[i].NguHanh - 2];
		if(cung.Saotot[i].Highline == 1){
			ctx.font = f_font_SaoTo;
		}else{
			ctx.font = f_font_Sao;
		}
		if(i <= c_MaxSaoCung){			
			ctx.fillText(cung.Saotot[i].Name, locx + c_Tensao_x, locy + c_Tensao_y + i * c_padYSao);
		}else{			
			ctx.fillText(cung.Saotot[i].Name, locx + c_Tensao_x + c_PadSao, locy + c_Tensao_y + (i - c_MaxSaoCung - 1) * c_padYSao);
		}	
	}
	var j = 0;
	if(cung.nSaoTot - c_MaxSaoCung > 0) j = cung.nSaoTot - c_MaxSaoCung - 1;

	for(i = 0;i<cung.nSaoXau;i++){
		if(g_mau == 1) ctx.fillStyle = color_nguHanh[cung.Saoxau[i].NguHanh - 2];		
		if(cung.Saoxau[i].Highline == 1){
			ctx.font = f_font_SaoTo;
//			underline(ctx, cung.Saoxau[i].Name, locx + c_Tensao_x + c_PadSao, locy + c_Tensao_y + (i + j) * 15 + 2, 1,ctx.fillStyle, 1, 1);
		}else{
			ctx.font = f_font_Sao;
		}		
		ctx.fillText(cung.Saoxau[i].Name, locx + c_Tensao_x + c_PadSao, locy + c_Tensao_y + (i + j) * c_padYSao);
	}
	if(g_isNom == 1){
		ctx.font = "bold 15px Chu Nom Khai";
	}else{
		ctx.font = "bold 13px Tahoma";
	}
	// Can Chi Ngu Hanh Dia ban
	if(g_mau == 1)	ctx.fillStyle = color_nguHanh[cung.NguHanhCung - 2];
	else ctx.fillStyle = "#000000";
	ctx.textAlign="left";
	if(g_isNom == 1){
		ctx.fillText(CAN_HN[cung.CanCung] + " " + CHI_HN[cung.ChiCung], locx + 5, locy + 30);
	}else{
		ctx.fillText(CANNAM1[cung.CanCung].charAt(0) + "." + CHINAM1[cung.ChiCung], locx + 5, locy + 30);
	}
	ctx.font = f_font_TS;
	ctx.fillStyle = "#000000";
	// Trang sinh
	ctx.textAlign="center";
	ctx.fillText(cung.TrangSinh, locx + width/8, locy + height/4 - 20);

	// So cuc
	ctx.fillText(cung.SoCuc, locx + width/4 - 25, locy + 30);
	
	// Tieu han	
	if(g_isFullOpt == 0){	
		ctx.textAlign="left";
		ctx.fillText(cung.TieuHan, locx + 10, locy + height/4 - 20);
	}else{
		ctx.textAlign="center";
		switch(index){
			case 0: ctx.fillText(cung.TieuHan, 3*width/4 - 30, height/4 + 25);break;
			case 1: ctx.fillText(cung.TieuHan, 3*width/4 - 30, 3*height/8);break;
			case 2: ctx.fillText(cung.TieuHan, 3*width/4 - 30, 5*height/8);break;	
			case 3: ctx.fillText(cung.TieuHan, 3*width/4 - 30, 3*height/4 - 16);break;
			case 4: ctx.fillText(cung.TieuHan, 5*width/8, 3*height/4 - 16);break;
			case 5: ctx.fillText(cung.TieuHan, 3*width/8, 3*height/4 - 16);break;
			case 6: ctx.fillText(cung.TieuHan, width/4 + 30, 3*height/4 - 16);break;
			case 7: ctx.fillText(cung.TieuHan, width/4 + 30, 5*height/8);break;
			case 8: ctx.fillText(cung.TieuHan, width/4 + 30, 3*height/8);break;
			case 9: ctx.fillText(cung.TieuHan, width/4 + 30, height/4 + 25);break;
			case 10: ctx.fillText(cung.TieuHan, 3*width/8, height/4 + 25);break;
			case 11: ctx.fillText(cung.TieuHan, 5*width/8, height/4 + 25);
		}		
	}

	// Loc, Ky nhap
	if(g_isLocNhap == 1){ 		
		if(g_isNom == 1){
			ctx.font = "bold 14px Chu Nom Khai";
		}else{	
			ctx.font = "12px Tahoma";
		}
		ctx.textAlign="left";
		if(g_isNom == 1){
			ctx.fillText("ç¥¿ å…¥ " + cung.LocNhap, locx + width/4 - 60, locy + height/4 - 30);	
			ctx.fillText("å¿Œ å…¥ " + cung.KyNhap, locx + width/4 - 60, locy + height/4 - 15);
		}else{
			ctx.fillText("Lá»™c:" + cung.LocNhap, locx + width/4 - 60, locy + height/4 - 30);	
			ctx.fillText("Ká»µ: " + cung.KyNhap, locx + width/4 - 60, locy + height/4 - 15);
		}		
//		ctx.stroke();
//		alert("Lá»™c:" + cung.LocNhap + " cung " + cung.Name);	
	}
	
	// Luu Dai van
	if(cung.LuuDaiHan == 1 && g_isFullOpt == 1){
		ctx.textAlign="left";
		if(g_isNom == 1){
			ctx.font = "bold 15px Chu Nom Khai";
		}else{
			ctx.font = "13px Tahoma";
		}
		ctx.fillText(cung.LuuDaiHanTen, locx + 5, locy + height/4 - 20);
//		ctx.fillText(cung.LuuTieuHanTen, locx + width/4 - 60, locy + height/4 - 20);
		if(g_isLocNhap == 0) ctx.fillText(cung.LuuTieuHanTen, locx + width/4 - 60, locy + height/4 - 20);		
		else{
			if(g_isNom == 1){
				ctx.font = "bold 13px Chu Nom Khai";
			}else{ 
				ctx.font = "11px Tahoma";
			}
			ctx.fillText(cung.LuuTieuHanTen, locx + 5, locy + 50);
		}
	}
	
	// Thang Han
	ctx.textAlign="left";
	if(cung.ThangHan != 13){
		if(g_isNom == 1){
			ctx.font = "bold 15px Chu Nom Khai";
		}else{
			ctx.font = "bold 15px Tahoma";
		}
		if(g_isNom == 1){
			if(g_isFullOpt == 0 && g_isLocNhap == 0) ctx.fillText("æœˆ " + cung.ThangHan, locx + width/4 - 35, locy + height/4 - 20);
			else ctx.fillText("æœˆ " + cung.ThangHan, locx + width/4 - 35, locy + 53);	
		}else{
			if(g_isFullOpt == 0 && g_isLocNhap == 0) ctx.fillText("T " + cung.ThangHan, locx + width/4 - 35, locy + height/4 - 20);
			else ctx.fillText("T " + cung.ThangHan, locx + width/4 - 35, locy + 53);		
		}
	}
	if(g_isNom == 1){
		ctx.font = "bold 18px Chu Nom Khai";
	}else{
		ctx.font = "bold 16px Courier";
	}
	// Tuan Triet	
//	alert(cung.Tuan + " " + cung.Triet);
	var loca0;
	var loca1;
	
	// if(cung.Tuan + cung.Triet > 0){	
	// 	var loca = locTuanTriet(index, width, height);
	// 	if(cung.Tuan == 1 && cung.Triet == 1){	
	// 		ctx.fillStyle = "#000000";
	// 		loca[0] -= 20;			
	// 		ctx.rect(loca[0],loca[1],100,20);
	// 		ctx.fillRect(loca[0],loca[1],100,20);
	// 		ctx.fillStyle = "#FFFFFF";
	// 		ctx.textAlign="center";
	// 		ctx.fillText("Tuáº§n-Triá»‡t", loca[0] + 50, loca[1] + 14);			
	// 	}else{
	// 		ctx.fillStyle = "#000000";			
	// 		ctx.rect(loca[0],loca[1],60,20);
	// 		ctx.fillRect(loca[0],loca[1],60,20);
	// 		if(cung.Tuan == 1) tge = "Tuáº§n";
	// 		else tge = "Triá»‡t";			
	// 		ctx.fillStyle = "#FFFFFF";
	// 		ctx.textAlign="center";
	// 		ctx.fillText(tge, loca[0] + 30, loca[1] + 14);
	// 	}
	// 	drawCanva(ctx, index, 1, width, height, loca[0], loca[1]);
	// }else{		
	// 	drawCanva(ctx, index, 0, width, height, 0,0);
	// }

	if(cung.Tuan + cung.Triet + cung.LuuTuan + cung.LuuTriet > 0){	
		var loca = locTuanTriet(index, width, height);
		if(cung.Tuan == 1 && cung.Triet == 1){	
			ctx.fillStyle = "#000000";
			loca[0] -= 20;	
			ctx.clearRect(loca[0],loca[1],100,20);		
			ctx.rect(loca[0],loca[1],100,20);
			ctx.fillRect(loca[0],loca[1],100,20);
			ctx.fillStyle = "#FFFFFF";
			ctx.textAlign="center";
			if(g_isNom == 1){
				ctx.fillText("æ—¬ ä¸­-æˆª è·¯", loca[0] + 50, loca[1] + 14);			
			}else{
				ctx.fillText("Tuáº§n-Triá»‡t", loca[0] + 50, loca[1] + 14);			
			}
			
		} else if(cung.LuuTuan == 1 && cung.Triet == 1){	
			ctx.fillStyle = "#000000";
			loca[0] -= 25;			
			ctx.clearRect(loca[0],loca[1],110,20);
			ctx.rect(loca[0],loca[1],110,20);
			ctx.fillRect(loca[0],loca[1],110,20);
			ctx.fillStyle = "#FFFFFF";
			ctx.textAlign="center";
			if(g_isNom == 1){
				ctx.fillText("æµ æ—¬ ä¸­-æˆª è·¯", loca[0] + 55, loca[1] + 14);			
			}else{
				ctx.fillText("L.Tuáº§n-Triá»‡t", loca[0] + 55, loca[1] + 14);				
			}
		}else if(cung.Tuan == 1 && cung.LuuTriet == 1){	
			ctx.fillStyle = "#000000";
			loca[0] -= 25;			
			ctx.clearRect(loca[0],loca[1],110,20);
			ctx.rect(loca[0],loca[1],110,20);
			ctx.fillRect(loca[0],loca[1],110,20);
			ctx.fillStyle = "#FFFFFF";
			ctx.textAlign="center";
			if(g_isNom == 1){
				ctx.fillText("æ—¬ ä¸­-æµ æˆª è·¯", loca[0] + 55, loca[1] + 14);			
			}else{
				ctx.fillText("Tuáº§n-L.Triá»‡t", loca[0] + 55, loca[1] + 14);				
			}					
		}else if(cung.LuuTuan == 1 && cung.LuuTriet == 1){	
			ctx.fillStyle = "#000000";
			loca[0] -= 40;			
			ctx.clearRect(loca[0],loca[1],140,20);
			ctx.rect(loca[0],loca[1],140,20);
			ctx.fillRect(loca[0],loca[1],140,20);
			ctx.fillStyle = "#FFFFFF";
			ctx.textAlign="center";
			if(g_isNom == 1){
				ctx.fillText("æµ æ—¬ ä¸­-æµ æˆª è·¯", loca[0] + 55, loca[1] + 14);			
			}else{
				ctx.fillText("L.Tuáº§n-L.Triá»‡t", loca[0] + 70, loca[1] + 14);
			}						
		}else{
			loca[0] -= 5;
			ctx.fillStyle = "#000000";		
			ctx.clearRect(loca[0],loca[1],70,20);	
			ctx.rect(loca[0],loca[1],70,20);
			ctx.fillRect(loca[0],loca[1],70,20);
			if(g_isNom == 1){
				if(cung.Tuan == 1) tge = "æ—¬ ä¸­";
				else if(cung.Triet == 1) tge = "æˆª è·¯";
				else if(cung.LuuTuan == 1) tge = "æµ æ—¬ ä¸­";
				else tge = "æµ æˆª è·¯";			
			}else{
				if(cung.Tuan == 1) tge = "Tuáº§n";
				else if(cung.Triet == 1) tge = "Triá»‡t";
				else if(cung.LuuTuan == 1) tge = "L.Tuáº§n";
				else tge = "L.Triá»‡t";			
			}			
			ctx.fillStyle = "#FFFFFF";
			ctx.textAlign="center";
			ctx.fillText(tge, loca[0] + 35, loca[1] + 14);
		}
		drawCanva(ctx, index, 1, width, height, loca[0], loca[1]);
	}else{		
		drawCanva(ctx, index, 0, width, height, 0,0);
	}

	ctx.fillStyle = "#000000";
	ctx.stroke();
}

function drawLine(ctx, vtmenh, width, height){
	var locatx = [3*width/4, 3*width/4,  3*width/4,  3*width/4,  5*width/8,  3*width/8,  width/4,    width/4,    width/4,    width/4,  3*width/8, 5*width/8];
	var locaty = [height/4,  3*height/8, 5*height/8, 3*height/4, 3*height/4, 3*height/4, 3*height/4, 5*height/8, 3*height/8, height/4, height/4,  height/4];;
	
	ctx.fillStyle = "#FF0000";
//	ctx.strokeStyle = "#FF0000";
	ctx.lineWidth = 1;
//	alert(vtmenh);
	var vt1 = (parseInt(vtmenh) + 4) % 12;
	var vt2 = (parseInt(vtmenh) + 6) % 12;
	var vt3 = (parseInt(vtmenh) + 8) % 12;
	ctx.globalAlpha = 0.2;	
//	alert(vtmenh + " - " + vt1 + " - " + vt2 + " - " + vt3);
	// Menh - Quan
	ctx.moveTo(locatx[vtmenh],locaty[vtmenh]);
	ctx.lineTo(locatx[vt1],locaty[vt1]);
	
	// Menh - Di
	ctx.moveTo(locatx[vtmenh],locaty[vtmenh]);
	ctx.lineTo(locatx[vt2],locaty[vt2]);
	// Menh - Tai
	ctx.moveTo(locatx[vtmenh],locaty[vtmenh]);
	ctx.lineTo(locatx[vt3],locaty[vt3]);	
	ctx.stroke();
}

function drawInfo(ctx, info, width, height){
	ctx.fillStyle = "#000000";
	if(g_isNom == 1){
		ctx.font = "bold 18px Chu Nom Khai";
	}else{
		ctx.font = "bold 16px Tahoma";
	}
	ctx.textAlign="left";
	var lineSpace = 25;
	if(g_isIpad == 1) lineSpace = 22;
	var startx = 180;
	var padX = 130;
	var stt = 3;
	var statusName = "bold 17px Tahoma";
	var statusNameBold = "bold 17px Tahoma";
	var labelName = "bold 17px Tahoma";
	if(g_isNom == 1){		
		statusName = "bold 19px Chu Nom Khai";
		statusNameBold = "bold 19px Chu Nom Khai";
		labelName = "bold 19px Chu Nom Khai";
	}
	var paddingLine = 15;
	if(g_isIpad == 1) paddingLine = 20;
	
	ctx.fillStyle = "#000000";
	if(g_mau == 1) ctx.fillStyle = "#0000FF";
//	ctx.font = "bold 20px sans-serif";
	if(g_isNom == 1){		
		ctx.font = "bold 15px Chu Nom Khai";
	}else{
		ctx.font = "bold 13px Tahoma";
	}
	ctx.textAlign="center";	
//	ctx.fillText("VIá»†N NGHIĂN Cá»¨U VĂ€ á»¨NG Dá»¤NG TIá»€M NÄ‚NG CON NGÆ¯á»œI", width/2, height/4 + lineSpace + 2);		
	if(g_mau == 1) ctx.fillStyle = "#00BB00";	
	ctx.moveTo(3*width/8, height/4 + 2*lineSpace + paddingLine);
	ctx.lineTo(5*width/8, height/4 + 2*lineSpace + paddingLine);	
	ctx.font = "bold 20px Tahoma";
	if(g_isNom == 1){
		ctx.font = "bold 22px Chu Nom Khai";
		if(g_isIpad == 1) ctx.fillText("è˜¿ æ•¸ ç´« å¾®", width/2, height/4 + stt * lineSpace + 26);		
		else ctx.fillText("è˜¿ æ•¸ ç´« å¾®", width/2, height/4 + stt * lineSpace + 16);		
	}else{		
		if(g_isIpad == 1) ctx.fillText("LĂ Sá» Tá»¬ VI", width/2, height/4 + stt * lineSpace + 26);		
		else ctx.fillText("LĂ Sá» Tá»¬ VI", width/2, height/4 + stt * lineSpace + 16);		
	}	
	stt = 6;	
	ctx.textAlign="left";
	ctx.fillStyle = "#000000";
	ctx.font = labelName;
	if(g_isNom == 1){
		ctx.fillText("å:", width/4 + 40, height/4 + stt * lineSpace);	
	}else{
		ctx.fillText("Há» tĂªn:", width/4 + 40, height/4 + stt * lineSpace);	
	}
	if(g_mau == 1) ctx.fillStyle = "#0000FF";
	ctx.font = statusName;
	var tg = document.getElementById('hovaten').value.trim();
	ctx.fillText(tg, width/4 + startx, height/4 + stt * lineSpace);
	stt++;
			
	ctx.fillStyle = "#000000";
	ctx.font = labelName;
	if(g_isNom == 1){		
		ctx.fillText("å¹´ ç”Ÿ:", width/4 + 40, height/4 + stt * lineSpace);	
	}else{
		ctx.fillText("NÄƒm sinh:", width/4 + 40, height/4 + stt * lineSpace);	
	}
	ctx.font = statusName;
	if(g_isduonglich == 1){		
		if(g_mau == 1) ctx.fillStyle = "#0000FF";		
		ctx.fillText(g_namSinh, width/4 + startx, height/4 + stt * lineSpace);	
		if(g_mau == 1) ctx.fillStyle = color_nguHanh[info.MenhCuc2 - 2];	
		ctx.fillText(info.Nam, width/4 + startx + padX, height/4 + stt * lineSpace);			
	}else{
		if(g_mau == 1) ctx.fillStyle = "#0000FF";		
		ctx.fillText(info.Nam, width/4 + startx, height/4 + stt * lineSpace);
	}
	stt++;
	
	ctx.fillStyle = "#000000";
	ctx.font = labelName;
	if(g_isNom == 1){				
		ctx.fillText("æœˆ ç”Ÿ:", width/4 + 40, height/4 + stt * lineSpace);	
	}else{
		ctx.fillText("ThĂ¡ng sinh:", width/4 + 40, height/4 + stt * lineSpace);	
	}
	ctx.font = statusName;
	if(g_isduonglich == 1){		
		if(g_mau == 1) ctx.fillStyle = "#0000FF";		
		ctx.fillText(g_thangCur + " (" + info.Thang + ")", width/4 + startx, height/4 + stt * lineSpace);	
		if(g_mau == 1) ctx.fillStyle = color_nguHanh[info.ThangCCNH - 2];	
		ctx.fillText(info.ThangCC, width/4 + startx + padX, height/4 + stt * lineSpace);			
	}else{
		if(g_mau == 1) ctx.fillStyle = "#0000FF";		
		ctx.fillText(info.Thang, width/4 + startx, height/4 + stt * lineSpace);
	}
	stt++;
	
	ctx.fillStyle = "#000000";
	ctx.font = labelName;
	if(g_isNom == 1){				
		ctx.fillText("æ—¥ ç”Ÿ:", width/4 + 40, height/4 + stt * lineSpace);	
	}else{
		ctx.fillText("NgĂ y sinh:", width/4 + 40, height/4 + stt * lineSpace);	
	}
	ctx.font = statusName;
	if(g_isduonglich == 1){		
		if(g_mau == 1) ctx.fillStyle = "#0000FF";		
		ctx.fillText(g_ngayCur + " (" + info.Ngay + ")", width/4 + startx, height/4 + stt * lineSpace);	
		if(g_mau == 1) ctx.fillStyle = color_nguHanh[info.NgayCCNH - 2];	
		ctx.fillText(info.NgayCC, width/4 + startx + padX, height/4 + stt * lineSpace);			
	}else{
		if(g_mau == 1) ctx.fillStyle = "#0000FF";		
		ctx.fillText(info.Ngay, width/4 + startx, height/4 + stt * lineSpace);
	}
	stt++;
	
	ctx.fillStyle = "#000000";
	ctx.font = labelName;
	if(g_isNom == 1){				
		ctx.fillText("æ—¹ sinh:", width/4 + 40, height/4 + stt * lineSpace);	
	}else{
		ctx.fillText("Giá» sinh:", width/4 + 40, height/4 + stt * lineSpace);	
	}
	ctx.font = statusName;
	if(g_isduonglich == 1){		
		if(g_mau == 1) ctx.fillStyle = "#0000FF";	
		tg = document.getElementById('giosinhH').value + " giá» " + document.getElementById('giosinhM').value + " phĂºt";
		ctx.fillText(tg, width/4 + startx, height/4 + stt * lineSpace);			
		if(g_mau == 1) ctx.fillStyle = color_nguHanh[info.GioCCNH - 2];		
		ctx.fillText(info.GioCC, width/4 + startx + padX, height/4 + stt * lineSpace);			
	}else{
		if(g_mau == 1) ctx.fillStyle = "#0000FF";		
		ctx.fillText(CHINAM1[g_gioSinh], width/4 + startx, height/4 + stt * lineSpace);
	}
	
	if(g_isIpad == 1) stt ++;
	else stt += 2;
	
	if(info.NguyetHan == 1){			
		ctx.fillStyle = "#000000";
		ctx.font = labelName;
		if(g_isNom == 1){			
			ctx.fillText("å¹´ é™:", width/4 + 40, height/4 + stt * lineSpace);	
		}else{
			ctx.fillText("NÄƒm háº¡n:", width/4 + 40, height/4 + stt * lineSpace);		
		}		
		ctx.font = statusName;
		if(g_mau == 1) ctx.fillStyle = "#0000FF";
		if(g_isduonglich == 1){					
			ctx.fillText(document.getElementById('textNamHan').value, width/4 + startx, height/4 + stt * lineSpace);
			if(g_mau == 1) ctx.fillStyle = color_nguHanh[info.NguHanhHan - 2];	
			ctx.fillText(info.NamHan, width/4 + startx + padX, height/4 + stt * lineSpace);						
		}else{			
			if(g_mau == 1) ctx.fillStyle = color_nguHanh[info.NguHanhHan - 2];	
			ctx.fillText(info.NamHan, width/4 + startx, height/4 + stt * lineSpace);
		}		
		stt++;
		if(info.Tuoi2 >= 0){ 
			if(g_isNom == 1){
				tg =  info.Tuoi + " æ­²";	
			}else{
				tg =  info.Tuoi + " tuá»•i";	
			}			
			ctx.fillStyle = "#000000";
			ctx.font = labelName;
			if(g_isNom == 1){														
				ctx.fillText("đ¤§ é™ å¹´:", width/4 + 40, height/4 + stt * lineSpace);	
			}else{
				ctx.fillText("Sao háº¡n nÄƒm:", width/4 + 40, height/4 + stt * lineSpace);	
			}
			ctx.font = statusName;
			if(g_mau == 1) ctx.fillStyle = "#0000FF";
			ctx.fillText(info.SaoHan, width/4 + startx, height/4 + stt * lineSpace);	
			ctx.fillText(tg, width/4 + startx + padX, height/4 + stt * lineSpace);	
			stt++;
		}else {
			var tuo = 60 + parseInt(info.Tuoi);
			if(g_isNom == 1){					
				tg = info.Tuoi + " (" + tuo + ") æ­²";
			}else{
				tg = info.Tuoi + " (" + tuo + ") tuá»•i";
			}
			if(g_mau == 1) ctx.fillStyle = "#0000FF";
			else ctx.fillStyle = "#000000";
			ctx.fillText(tg, width/4 + startx, height/4 + stt * lineSpace);	
			stt ++;
		}
	}	
	
	if(info.GioPham != ""){
		ctx.fillStyle = "#000000";
		ctx.font = labelName;	
		if(g_isNom == 1){				
			ctx.fillText("ç¯ å¾:", width/4 + 40, height/4 + stt * lineSpace);	
		}else{	
			ctx.fillText("Pháº¡m giá»:", width/4 + 40, height/4 + stt * lineSpace);	
		}
		if(g_mau == 1) ctx.fillStyle = "#0000FF";		
		if(info.GioPham.length > 18){
			var res = info.GioPham.split(", ");			
			ctx.fillText((res[0] + ","), width/4 + startx, height/4 + stt * lineSpace);
			stt++;
			var resu = res[1];
			for(var i = 2; i < res.length;i++){
				resu += ", " + res[i];
			}
			ctx.fillText(resu, width/4 + startx, height/4 + stt * lineSpace);				
		}else{
			ctx.fillText(info.GioPham, width/4 + startx, height/4 + stt * lineSpace);			
		}
		stt++;
	}		
	
	ctx.fillStyle = "#000000";
	ctx.font = labelName;
	if(g_isNom == 1){
		ctx.fillText("é™° é™½:", width/4 + 40, height/4 + stt * lineSpace);	
	}else{
		ctx.fillText("Ă‚m dÆ°Æ¡ng:", width/4 + 40, height/4 + stt * lineSpace);	
	}
	ctx.font = statusName;
	if(g_mau == 1) ctx.fillStyle = "#0000FF";	
	ctx.fillText(info.AmDuong, width/4 + startx, height/4 + stt * lineSpace);
	stt++;
	
	ctx.fillStyle = "#000000";
	ctx.font = labelName;
	if(g_isNom == 1){
		ctx.fillText("å‘½:", width/4 + 40, height/4 + stt * lineSpace);	
	}else{
		ctx.fillText("Má»‡nh:", width/4 + 40, height/4 + stt * lineSpace);	
	}
	ctx.font = statusName;
//	if(g_mau == 1) ctx.fillStyle = "#0000FF";
	if(g_mau == 1) ctx.fillStyle = color_nguHanh[info.MenhCuc2 - 2];	
	ctx.fillText(info.MenhCuc, width/4 + startx, height/4 + stt * lineSpace);
	stt++;
	
	ctx.fillStyle = "#000000";
	ctx.font = labelName;
	if(g_isNom == 1){
		ctx.fillText("å±€:", width/4 + 40, height/4 + stt * lineSpace);	
	}else{
		ctx.fillText("Cá»¥c:", width/4 + 40, height/4 + stt * lineSpace);		
	}	
	ctx.font = statusName;
//	if(g_mau == 1) ctx.fillStyle = "#0000FF";	
	if(g_mau == 1) ctx.fillStyle = color_nguHanh[info.CucNH - 2];
	ctx.fillText(info.Cuc, width/4 + startx, height/4 + stt * lineSpace);
	stt++;
	
	if(g_isduonglich == 1){
		ctx.fillStyle = "#000000";
		ctx.font = labelName;
		if(g_isNom == 1){						
			ctx.fillText("å®« å¦ƒ:", width/4 + 40, height/4 + stt * lineSpace);	
		}else{
			ctx.fillText("Cung phi:", width/4 + 40, height/4 + stt * lineSpace);	
		}
		ctx.font = statusName;
		if(g_mau == 1) ctx.fillStyle = "#0000FF";	
		ctx.fillText(info.Que, width/4 + startx, height/4 + stt * lineSpace);
		stt++;
	}
	
//	stt++;
	ctx.fillStyle = "#000000";
	ctx.font = labelName;
	if(g_isNom == 1){					
		ctx.fillText("å‘½ ä¸»:", width/4 + 40, height/4 + stt * lineSpace);	
	}else{
		ctx.fillText("Má»‡nh chá»§:", width/4 + 40, height/4 + stt * lineSpace);	
	}
	ctx.font = statusName;
	if(g_mau == 1) ctx.fillStyle = "#0000FF";	
	ctx.fillText(info.ChuMenh, width/4 + startx, height/4 + stt * lineSpace);
	stt++;
	
	ctx.fillStyle = "#000000";
	ctx.font = labelName;
	if(g_isNom == 1){							
		ctx.fillText("èº« ä¸»:", width/4 + 40, height/4 + stt * lineSpace);	
	}else{
		ctx.fillText("ThĂ¢n chá»§:", width/4 + 40, height/4 + stt * lineSpace);	
	}
	ctx.font = statusName;
	if(g_mau == 1) ctx.fillStyle = "#0000FF";	
	ctx.fillText(info.ChuThan, width/4 + startx, height/4 + stt * lineSpace);
	stt++;
	
	if(g_isNom == 1){
		if((parseInt(info.VTMenh) +  parseInt(info.CanNam)) % 2 == 0){
			tg = "é™° é™½ é † é‡Œ";
		}else tg = "é™° é™½ é€† é‡Œ";
	}else{
		if((parseInt(info.VTMenh) +  parseInt(info.CanNam)) % 2 == 0){
			tg = "Ă‚m DÆ°Æ¡ng thuáº­n lĂ½";
		}else tg = "Ă‚m DÆ°Æ¡ng nghá»‹ch lĂ½";
	}
	var l_cuc = info.Cuc2 - 2;
	var l_menh = info.MenhCuc2 - 2;
	
	var hieuso = (5 + NGUHANHSK[l_cuc] - NGUHANHSK[l_menh]) % 5;
	var tggg = "";	
	switch(hieuso){
		case 0: tggg = "Má»‡nh Cá»¥c bĂ¬nh hĂ²a";break;
		case 1: tggg = "Má»‡nh sinh Cá»¥c";break;
		case 4: tggg = "Cá»¥c sinh Má»‡nh";break;
		case 2: tggg = "Má»‡nh kháº¯c Cá»¥c";break;
		case 3: tggg = "Cá»¥c kháº¯c Má»‡nh";break;
		default : tggg = "";
	}
	if(g_isNom == 1){
		switch(hieuso){
			case 0: tggg = "å‘½ å±€ å¹³ å’Œ";break;
			case 1: tggg = "å‘½ ç”Ÿ å±€";break;
			case 4: tggg = "å±€ ç”Ÿ å‘½";break;
			case 2: tggg = "å‘½ å‰‹ å±€";break;
			case 3: tggg = "å±€ å‰‹ å‘½";break;
			default : tggg = "";
		}		
	}
	ctx.textAlign="center";		
	ctx.font = statusNameBold;
	if(g_mau == 1) ctx.fillStyle = "#FF0000";	
	else ctx.fillStyle = "#000000";	
	if(g_isIpad == 1){	
		ctx.fillText(tg  + ", " + tggg, width/2 - 40, height/4 + stt * lineSpace);
	}else{
		ctx.fillText(tg, width/2, height/4 + stt * lineSpace);
		stt++;
		ctx.fillText(tggg, width/2, height/4 + stt * lineSpace);
	}
	stt++;

	ctx.textAlign="center";	
	ctx.font = statusNameBold;
	if(g_mau == 1) ctx.fillStyle = "#0000FF";	
	else ctx.fillStyle = "#000000";	
	if(g_isNom == 1){		
		ctx.fillText("èº« å±… " + g_thanCu, width/2, height/4 + stt * lineSpace);
	}else{
		ctx.fillText("ThĂ¢n cÆ° " + g_thanCu, width/2, height/4 + stt * lineSpace);
	}	
	stt++;

	ctx.font = "14px Tahoma";
	ctx.textAlign="center";	
	if(g_mau == 1) ctx.fillStyle = "#FF0000";	
	else ctx.fillStyle = "#000000";	
	ctx.fillText("Má»i cĂ¡c báº¡n láº¥y lĂ¡ sá»‘ táº¡i http://tuvichanco.vn", width/2, 3*height/4 - 16);
	ctx.textAlign="left";	
	ctx.fillStyle = "#000000";
	ctx.stroke();
}

function drawInfoFullOpt(ctx, info, width, height){
	ctx.fillStyle = "#000000";
	if(g_isNom == 1){		
		ctx.font = "bold 18px Chu Nom Khai";
	}else{
		ctx.font = "bold 16px Tahoma";
	}
	ctx.textAlign="left";
	var lineSpace = 23;
	if(g_isIpad == 1) lineSpace = 20;
	var startx = 190;
	var startLabel = 80;
	var padX = 120;
	var stt = 4;
	var statusName = "bold 16px Tahoma";
	var statusNameBold = "bold 16px Tahoma";
	var labelName = "bold 16px Tahoma";
	if(g_isNom == 1){				
		statusName = "bold 18px Chu Nom Khai";
		statusNameBold = "bold 18px Chu Nom Khai";
		labelName = "bold 18px Chu Nom Khai";
	}
		
	ctx.fillStyle = "#000000";
	if(g_mau == 1) ctx.fillStyle = "#0000FF";
//	ctx.font = "bold 20px sans-serif";
	if(g_isNom == 1){
		ctx.font = "bold 15px Chu Nom Khai";
	}else{
		ctx.font = "bold 13px Tahoma";
	}
	ctx.textAlign="center";	
//	ctx.fillText("VIá»†N NGHIĂN Cá»¨U VĂ€ á»¨NG Dá»¤NG TIá»€M NÄ‚NG CON NGÆ¯á»œI", width/2, height/4 + lineSpace + 20);		
//	ctx.font = "bold 20px Tahoma";
	if(g_mau == 1) ctx.fillStyle = "#00BB00";	
	ctx.moveTo(3*width/8, height/4 + 3*lineSpace + 20);
	ctx.lineTo(5*width/8, height/4 + 3*lineSpace + 20);		
//	if(g_isIpad == 1) ctx.fillText("LĂ Sá» Tá»¬ VI", width/2, height/4 + stt * lineSpace + 20);		
	if(g_isNom == 1){
		ctx.font = "bold 21px Chu Nom Khai";
		ctx.fillText("è˜¿ æ•¸ ç´« å¾®", width/2, height/4 + stt * lineSpace + 20);		
	}else{
		ctx.font = "bold 19px Tahoma";
		ctx.fillText("LĂ Sá» Tá»¬ VI", width/2, height/4 + stt * lineSpace + 20);		
	}	
	stt = 7;
	if(g_isIpad == 1) stt = 6;	
	
	var tg = document.getElementById('hovaten').value.trim();
	ctx.textAlign="left";
	ctx.fillStyle = "#000000";
	ctx.font = labelName;
	if(g_isNom == 1){
		ctx.fillText("å:", width/4 + startLabel, height/4 + stt * lineSpace);	
	}else{
		ctx.fillText("Há» tĂªn:", width/4 + startLabel, height/4 + stt * lineSpace);	
	}
	if(g_mau == 1) ctx.fillStyle = "#0000FF";
	ctx.font = statusName;
	ctx.fillText(tg, width/4 + startx, height/4 + stt * lineSpace);
	stt++;
			
	ctx.fillStyle = "#000000";
	ctx.font = labelName;
	if(g_isNom == 1){
		ctx.fillText("å¹´ ç”Ÿ:", width/4 + startLabel, height/4 + stt * lineSpace);	
	}else{
		ctx.fillText("NÄƒm sinh:", width/4 + startLabel, height/4 + stt * lineSpace);	
	}
	ctx.font = statusName;
	if(g_isduonglich == 1){		
		if(g_mau == 1) ctx.fillStyle = "#0000FF";		
		ctx.fillText(g_namSinh, width/4 + startx, height/4 + stt * lineSpace);	
		if(g_mau == 1) ctx.fillStyle = color_nguHanh[info.MenhCuc2 - 2];	
		ctx.fillText(info.Nam, width/4 + startx + padX, height/4 + stt * lineSpace);			
	}else{
		if(g_mau == 1) ctx.fillStyle = "#0000FF";		
		ctx.fillText(info.Nam, width/4 + startx, height/4 + stt * lineSpace);
	}
	stt++;
	
	ctx.fillStyle = "#000000";
	ctx.font = labelName;
	if(g_isNom == 1){				
		ctx.fillText("æœˆ ç”Ÿ:", width/4 + startLabel, height/4 + stt * lineSpace);	
	}else{
		ctx.fillText("ThĂ¡ng sinh:", width/4 + startLabel, height/4 + stt * lineSpace);	
	}
	ctx.font = statusName;
	if(g_isduonglich == 1){		
		if(g_mau == 1) ctx.fillStyle = "#0000FF";		
		ctx.fillText(g_thangCur + " (" + info.Thang + ")", width/4 + startx, height/4 + stt * lineSpace);	
		if(g_mau == 1) ctx.fillStyle = color_nguHanh[info.ThangCCNH - 2];	
		ctx.fillText(info.ThangCC, width/4 + startx + padX, height/4 + stt * lineSpace);			
	}else{
		if(g_mau == 1) ctx.fillStyle = "#0000FF";		
		ctx.fillText(info.Thang, width/4 + startx, height/4 + stt * lineSpace);
	}
	stt++;
	
	ctx.fillStyle = "#000000";
	ctx.font = labelName;
	if(g_isNom == 1){				
		ctx.fillText("æ—¥ ç”Ÿ:", width/4 + startLabel, height/4 + stt * lineSpace);	
	}else{
		ctx.fillText("NgĂ y sinh:", width/4 + startLabel, height/4 + stt * lineSpace);	
	}
	ctx.font = statusName;
	if(g_isduonglich == 1){		
		if(g_mau == 1) ctx.fillStyle = "#0000FF";		
		ctx.fillText(g_ngayCur + " (" + info.Ngay + ")", width/4 + startx, height/4 + stt * lineSpace);	
		if(g_mau == 1) ctx.fillStyle = color_nguHanh[info.NgayCCNH - 2];	
		ctx.fillText(info.NgayCC, width/4 + startx + padX, height/4 + stt * lineSpace);			
	}else{
		if(g_mau == 1) ctx.fillStyle = "#0000FF";		
		ctx.fillText(info.Ngay, width/4 + startx, height/4 + stt * lineSpace);
	}
	stt++;
	
	ctx.fillStyle = "#000000";
	ctx.font = labelName;
	if(g_isNom == 1){				
		ctx.fillText("æ—¹ ç”Ÿ:", width/4 + startLabel, height/4 + stt * lineSpace);	
	}else{
		ctx.fillText("Giá» sinh:", width/4 + startLabel, height/4 + stt * lineSpace);	
	}
	ctx.font = statusName;
	if(g_isduonglich == 1){		
		if(g_mau == 1) ctx.fillStyle = "#0000FF";	
		tg = document.getElementById('giosinhH').value + " giá» " + document.getElementById('giosinhM').value + " phĂºt";
		ctx.fillText(tg, width/4 + startx, height/4 + stt * lineSpace);		
		if(g_mau == 1) ctx.fillStyle = color_nguHanh[info.GioCCNH - 2];		
		ctx.fillText(info.GioCC, width/4 + startx + padX, height/4 + stt * lineSpace);			
	}else{
		if(g_mau == 1) ctx.fillStyle = "#0000FF";		
		ctx.fillText(CHINAM1[g_gioSinh], width/4 + startx, height/4 + stt * lineSpace);
	}
	if(g_isIpad == 1) stt++;
	else stt += 2;
	
	if(info.NguyetHan == 1){			
		ctx.fillStyle = "#000000";
		ctx.font = labelName;
		if(g_isNom == 1){						
			ctx.fillText("å¹´ é™:", width/4 + startLabel, height/4 + stt * lineSpace);	
		}else{
			ctx.fillText("NÄƒm háº¡n:", width/4 + startLabel, height/4 + stt * lineSpace);	
		}
		ctx.font = statusName;
		if(g_mau == 1) ctx.fillStyle = "#0000FF";
		if(g_isduonglich == 1){					
			ctx.fillText(document.getElementById('textNamHan').value, width/4 + startx, height/4 + stt * lineSpace);
			if(g_mau == 1) ctx.fillStyle = color_nguHanh[info.NguHanhHan - 2];	
			ctx.fillText(info.NamHan, width/4 + startx + padX, height/4 + stt * lineSpace);						
		}else{			
			if(g_mau == 1) ctx.fillStyle = color_nguHanh[info.NguHanhHan - 2];	
			ctx.fillText(info.NamHan, width/4 + startx, height/4 + stt * lineSpace);
		}
		stt++;
		if(info.Tuoi2 >= 0){
			if(g_isNom == 1){
				tg =  info.Tuoi + " æ­²";	
			}else{
				tg =  info.Tuoi + " tuá»•i";	
			}
			ctx.fillStyle = "#000000";
			ctx.font = labelName;
			if(g_isNom == 1){										
				ctx.fillText("đ¤§ é™ å¹´:", width/4 + startLabel, height/4 + stt * lineSpace);	
			}else{
				ctx.fillText("Sao háº¡n nÄƒm:", width/4 + startLabel, height/4 + stt * lineSpace);	
			}
			ctx.font = statusName;
			if(g_mau == 1) ctx.fillStyle = "#0000FF";
			ctx.fillText(info.SaoHan, width/4 + startx, height/4 + stt * lineSpace);	
			ctx.fillText(tg, width/4 + startx + padX, height/4 + stt * lineSpace);	
			stt++;			
		}else {
			var tuo = 60 + parseInt(info.Tuoi);
			if(g_isNom == 1){
				tg =  info.Tuoi + " æ­²";	
			}else{
				tg = info.Tuoi + " (" + tuo + ") æ­²";
			}
			if(g_mau == 1) ctx.fillStyle = "#0000FF";
			else ctx.fillStyle = "#000000";
			ctx.fillText(tg, width/4 + startx, height/4 + stt * lineSpace);	
			stt ++;
		}		
	}	
	
	if(info.GioPham != ""){
		ctx.fillStyle = "#000000";
		ctx.font = labelName;	
		if(g_isNom == 1){	
			ctx.fillText("ç¯ å¾:", width/4 + startLabel, height/4 + stt * lineSpace);	
		}else{
			ctx.fillText("Pháº¡m giá»:", width/4 + startLabel, height/4 + stt * lineSpace);	
		}
		if(g_mau == 1) ctx.fillStyle = "#0000FF";
		if(info.GioPham.length > 18){
			var res = info.GioPham.split(", ");
			ctx.fillText((res[0] + ","), width/4 + startx, height/4 + stt * lineSpace);
			stt++;
			var resu = res[1];
			for(var i = 2; i < res.length;i++){
				resu += ", " + res[i];
			}
			ctx.fillText(resu, width/4 + startx, height/4 + stt * lineSpace);				
		}else{
			ctx.fillText(info.GioPham, width/4 + startx, height/4 + stt * lineSpace);			
		}
		stt++;
	}		
	ctx.fillStyle = "#000000";
	ctx.font = labelName;
	if(g_isNom == 1){		
		ctx.fillText("é™° é™½:", width/4 + startLabel, height/4 + stt * lineSpace);	
	}else{
		ctx.fillText("Ă‚m dÆ°Æ¡ng:", width/4 + startLabel, height/4 + stt * lineSpace);	
	}
	ctx.font = statusName;
	if(g_mau == 1) ctx.fillStyle = "#0000FF";	
	ctx.fillText(info.AmDuong, width/4 + startx, height/4 + stt * lineSpace);
	stt++;
	
	ctx.fillStyle = "#000000";
	ctx.font = labelName;
	if(g_isNom == 1){		
		ctx.fillText("å‘½:", width/4 + startLabel, height/4 + stt * lineSpace);	
	}else{
		ctx.fillText("Má»‡nh:", width/4 + startLabel, height/4 + stt * lineSpace);	
	}
	ctx.font = statusName;
//	if(g_mau == 1) ctx.fillStyle = "#0000FF";
	if(g_mau == 1) ctx.fillStyle = color_nguHanh[info.MenhCuc2 - 2];	
	ctx.fillText(info.MenhCuc, width/4 + startx, height/4 + stt * lineSpace);
	stt++;
	
	ctx.fillStyle = "#000000";
	ctx.font = labelName;
	if(g_isNom == 1){			
		ctx.fillText("å±€:", width/4 + startLabel, height/4 + stt * lineSpace);	
	}else{
		ctx.fillText("Cá»¥c:", width/4 + startLabel, height/4 + stt * lineSpace);	
	}
	ctx.font = statusName;
//	if(g_mau == 1) ctx.fillStyle = "#0000FF";	
	if(g_mau == 1) ctx.fillStyle = color_nguHanh[info.CucNH - 2];
	ctx.fillText(info.Cuc, width/4 + startx, height/4 + stt * lineSpace);
	stt++;
	
	if(g_isduonglich == 1){
		ctx.fillStyle = "#000000";
		ctx.font = labelName;
		if(g_isNom == 1){			
			ctx.fillText("å®« å¦ƒ:", width/4 + startLabel, height/4 + stt * lineSpace);	
		}else{
			ctx.fillText("Cung phi:", width/4 + startLabel, height/4 + stt * lineSpace);		
		}		
		ctx.font = statusName;
		if(g_mau == 1) ctx.fillStyle = "#0000FF";	
		ctx.fillText(info.Que, width/4 + startx, height/4 + stt * lineSpace);
		stt++;
	}
	
//	stt++;
	ctx.fillStyle = "#000000";
	ctx.font = labelName;
	if(g_isNom == 1){		
		ctx.fillText("å‘½ ä¸»:", width/4 + startLabel, height/4 + stt * lineSpace);	
	}else{
		ctx.fillText("Má»‡nh chá»§:", width/4 + startLabel, height/4 + stt * lineSpace);	
	}
	ctx.font = statusName;
	if(g_mau == 1) ctx.fillStyle = "#0000FF";	
	ctx.fillText(info.ChuMenh, width/4 + startx, height/4 + stt * lineSpace);
	stt++;
	
	ctx.fillStyle = "#000000";
	ctx.font = labelName;
	if(g_isNom == 1){									
		ctx.fillText("èº« ä¸»:", width/4 + startLabel, height/4 + stt * lineSpace);	
	}else{
		ctx.fillText("ThĂ¢n chá»§:", width/4 + startLabel, height/4 + stt * lineSpace);	
	}
	ctx.font = statusName;
	if(g_mau == 1) ctx.fillStyle = "#0000FF";	
	ctx.fillText(info.ChuThan, width/4 + startx, height/4 + stt * lineSpace);
	stt++;
	if(g_isNom == 1){
		if((parseInt(info.VTMenh) +  parseInt(info.CanNam)) % 2 == 0){
			tg = "é™° é™½ é † é‡Œ";
		}else tg = "é™° é™½ é€† é‡Œ";
	}else{
		if((parseInt(info.VTMenh) +  parseInt(info.CanNam)) % 2 == 0){
			tg = "Ă‚m DÆ°Æ¡ng thuáº­n lĂ½";
		}else tg = "Ă‚m DÆ°Æ¡ng nghá»‹ch lĂ½";
	}
	
	ctx.textAlign="center";
	ctx.font = statusNameBold;
	if(g_mau == 1) ctx.fillStyle = "#FF0000";
	else ctx.fillStyle = "#000000";	
	ctx.fillText(tg, width/2, height/4 + stt * lineSpace);
	stt++;
	
	var l_cuc = info.Cuc2 - 2;
	var l_menh = info.MenhCuc2 - 2;
	
	var hieuso = (5 + NGUHANHSK[l_cuc] - NGUHANHSK[l_menh]) % 5;

	switch(hieuso){
		case 0: tg = "Má»‡nh Cá»¥c bĂ¬nh hĂ²a";break;
		case 1: tg = "Má»‡nh sinh Cá»¥c";break;
		case 4: tg = "Cá»¥c sinh Má»‡nh";break;
		case 2: tg = "Má»‡nh kháº¯c Cá»¥c";break;
		case 3: tg = "Cá»¥c kháº¯c Má»‡nh";break;
		default : tg = "";
	}

	if(g_isNom == 1){
		switch(hieuso){
			case 0: tg = "å‘½ å±€ å¹³ å’Œ";break;
			case 1: tg = "å‘½ ç”Ÿ å±€";break;
			case 4: tg = "å±€ ç”Ÿ å‘½";break;
			case 2: tg = "å‘½ å‰‹ å±€";break;
			case 3: tg = "å±€ å‰‹ å‘½";break;
			default : tg = "";
		}		
	}

	ctx.textAlign="center";	
	ctx.fillStyle = "#000000";	
	ctx.font = statusNameBold;
	if(g_mau == 1) ctx.fillStyle = "#FF0000";	
	else ctx.fillStyle = "#000000";	
	ctx.fillText(tg, width/2, height/4 + stt * lineSpace);
	stt++;

	ctx.textAlign="center";	
	ctx.font = statusNameBold;
	if(g_mau == 1) ctx.fillStyle = "#0000FF";	
	else ctx.fillStyle = "#000000";	
	if(g_isNom == 1){				
		ctx.fillText("èº« å±… " + g_thanCu, width/2, height/4 + stt * lineSpace);
	}else{
		ctx.fillText("ThĂ¢n cÆ° " + g_thanCu, width/2, height/4 + stt * lineSpace);
	}
	stt++;

	ctx.font = "14px Tahoma";
	ctx.textAlign="center";	
	if(g_mau == 1) ctx.fillStyle = "#FF0000";	
	else ctx.fillStyle = "#000000";	
	ctx.fillText("Má»i cĂ¡c báº¡n láº¥y lĂ¡ sá»‘ táº¡i http://tuvichanco.vn", width/2, 3*height/4 - 32);

	ctx.textAlign="left";	
	ctx.fillStyle = "#000000";
	ctx.stroke();
}

function drawLogo(ctx, width, height){

	var myImage = new Image();
	if(g_mau == 1) myImage.src = g_Path_toTV + "dau.png";
	else myImage.src = g_Path_toTV + "dau_dt.png";
	var myImage1 = new Image();
	if(g_mau == 1) myImage1.src = g_Path_toTV + "tvcc.png";
	else myImage1.src = g_Path_toTV + "tvcc_dt.png";
	var myImage2 = new Image();
	if(g_mau == 1)	myImage2.src = g_Path_toTV + "logo.png";
	else myImage2.src = g_Path_toTV + "logo_dt.png";

	myImage2.onload = function(){
		ctx.globalAlpha = 0.25;
		if(g_mau != 1) ctx.globalAlpha = 0.9;
		ctx.drawImage(myImage2, width/4, height/4 + (height - width)/4, width/2, width/2);	
	}
	
	myImage1.onload = function(){
		ctx.globalAlpha = 0.9;
//		if(g_isIpad == 1) ctx.drawImage(myImage3, width/2 - 100, height/4 + 28, 200, 36);
//		else ctx.drawImage(myImage3, width/2 - 100, height/4 + 30, 200, 38);
		ctx.drawImage(myImage, 3*width/4 - 65, 3*height/4 - 65, 50, 50);
//		if(g_isIpad == 1) ctx.drawImage(myImage1, 3*width/4 - 55, 3*height/4 - 225, 40, 160);	
//		else 
			ctx.drawImage(myImage1, 3*width/4 - 55, 3*height/4 - 225, 40, 160);	
	}	
}

function drawTitle(ctx, width, height){
	var myImage3 = new Image();
	if(g_mau == 1) myImage3.src = g_Path_toTV + "clbtuvichanco.png";
	else myImage3.src = g_Path_toTV + "clbtuvichanco_dt.png";
//	myImage3.src = g_Path_toTV + "clbtuvichanco.png";
	myImage3.onload = function(){
		ctx.globalAlpha = 0.9;
		if(g_isIpad == 1) ctx.drawImage(myImage3, width/2 - 150, height/4 + 15, 300, 36);
		else ctx.drawImage(myImage3, width/2 - 150, height/4 + 17, 300, 38);
	}
}

function drawTitleFullOpt(ctx, width, height){
	var myImage3 = new Image();
	if(g_mau == 1) myImage3.src = g_Path_toTV + "clbtuvichanco.png";
	else myImage3.src = g_Path_toTV + "clbtuvichanco_dt.png";
	myImage3.onload = function(){
		ctx.globalAlpha = 0.9;
		if(g_isIpad == 1) ctx.drawImage(myImage3, width/2 - 140, height/4 + 35, 280, 33);	
		else ctx.drawImage(myImage3, width/2 - 140, height/4 + 40, 280, 38);	
	}
}

function drawLogoFullOpt(ctx, width, height){

	var myImage = new Image();
	if(g_mau == 1) myImage.src = g_Path_toTV + "dau.png";
	else myImage.src = g_Path_toTV + "dau_dt.png";
	var myImage1 = new Image();
	if(g_mau == 1) myImage1.src = g_Path_toTV + "tvcc.png";
	else myImage1.src = g_Path_toTV + "tvcc_dt.png";
	var myImage2 = new Image();
//	myImage2.src = g_Path_toTV + "logo.png";
	if(g_mau == 1)	myImage2.src = g_Path_toTV + "logo.png";
	else myImage2.src = g_Path_toTV + "logo_dt.png";
	
	myImage2.onload = function(){
		ctx.globalAlpha = 0.25;
		if(g_mau != 1) ctx.globalAlpha = 0.9;
//		ctx.drawImage(myImage2, width/4 + 60, height/4 + (height - width)/4 + 60, width/2 - 120, width/2 - 120);			
		ctx.drawImage(myImage2, width/4, height/4 + (height - width)/4, width/2, width/2);	
	}
	myImage1.onload = function(){
		ctx.globalAlpha = 0.9;
		ctx.drawImage(myImage, 3*width/4 - 90, 3*height/4 - 100, 50, 50);
//		if(g_isIpad == 1) ctx.drawImage(myImage1, 3*width/4 - 110, height/2 + 20, 40, 160);	
//		else 
			ctx.drawImage(myImage1, 3*width/4 - 85, 3*height/4 - 260, 40, 160);
	}	
}

function checkLayLS(){
	applyChange();
	if(checkSubmit(0)){	
		var url = g_Path_toTV + "core/core.php";
//		alert(url);
		if(g_isduonglich == 1){
			if(document.getElementById('giosinhH').value == 23){
				var tgs; 
				if(g_namSinh % 4 == 0 && g_thangCur == 2) tgs = LIMITDAY[1] + 1;				
				else tgs = LIMITDAY[g_thangCur - 1];
				if(g_ngayCur < LIMITDAY[g_thangCur - 1]){
					g_ngayCur++;					
				}else if(g_thangCur < 11){
					g_thangCur++;
					g_ngayCur = 1;					
				}else{
					g_namSinh++;
					g_thangCur = 1;
					g_ngayCur = 1;					
				} 
				g_gioSinh = 4;				
			}else{
				g_gioSinh = (Math.ceil(document.getElementById('giosinhH').value / 2) + 4) % 12;
			}
			g_gioDH = document.getElementById('giosinhH').value;
			g_gioDM = document.getElementById('giosinhM').value;
		}else{
			g_gioSinh = document.getElementById('giosinh').value;
		}
		url += "?hoten=" + g_hoten + "&isDuong=" + g_isduonglich + "&isNam=" + g_isNam;
		url += "&gio=" + g_gioSinh + "&ngay=" + g_ngayCur + "&thang=" + g_thangCur + "&nam=" + g_namSinh;
		url += "&mau=" + g_mau + "&luuthaitue=" + g_isLuuThaiTueDB  + "&isNom=" + g_isNom;
		url += "&gioDH=" + g_gioDH + "&gioDM=" + g_gioDM;
		
		var flag = true; 	
		if(document.getElementsByName("checkHan")[0].checked){
			flag = checkSubmit(1);
			url += "&namHan=" + g_namHan;
		}	

		if(g_anTuHoa == 1)	url += "&anTuHoa=1";	
		else url += "&anTuHoa=0";
		
		if(document.getElementsByName("checkTtinh")[0].checked){
			flag = checkSubmit(1);
			url += "&checkTuongtinh=" + 1;	
			g_isTuongtinh = 1;
		}else g_isTuongtinh = 0;
		
		if(document.getElementsByName("checkLuuDaiVan")[0].checked){
			flag = checkSubmit(1);
			url += "&checkDaiVan=" + 1;	
			g_isFullOpt = 1;
		}else g_isFullOpt = 0;		
		
		if(document.getElementsByName("checkLuu4Hoa")[0].checked){
			flag = checkSubmit(1);
			url += "&check4Hoa=" + 1;	
			g_isLuu4Hoa = 1;	
		}else g_isLuu4Hoa = 0;
				
		if(document.getElementsByName("checkLuu4Duc")[0].checked){
			flag = checkSubmit(1);
			url += "&check4Duc=" + 1;
			g_isLuu4Duc = 1;
		}else g_isLuu4Duc = 0;		
		
		if(document.getElementsByName("checkLuuKhoiVietKhac")[0].checked){
			flag = checkSubmit(1);
			url += "&checkLuuKhac=" + 1;
			g_isLuuKhoiVietKhac = 1;
		}else g_isLuuKhoiVietKhac = 0;
		
		if(document.getElementsByName("checkLocNhap")[0].checked){
			flag = checkSubmit(1);
			url += "&checkLocNhap=" + 1;
			g_isLocNhap = 1;
		}else g_isLocNhap = 0;

		if(document.getElementsByName("checkLuuTuanTriet")[0].checked){
			flag = checkSubmit(1);
			url += "&checkLuuTuanTriet=" + 1;
			g_isLuuTuanTriet = 1;
		}else g_isLuuTuanTriet = 0;
			
//		var canvasWidth = 900; //1000;
//		var canvasHeight = 1269; //1410;
		
		var canvasWidth = 920; //1000;
		var canvasHeight = 1289; //1410;

		
		if(g_isIpad == 1){
//			canvasHeight = 1035; //1150;
			canvasHeight = 1055; //1150;
		}
		
		url += "&tokenkey=" + g_token_key;

		if(flag){
		    
			document.getElementById("divCanvas").innerHTML = '<canvas id="myCanvas" width="' + canvasWidth + '" height="' + canvasHeight + '" style="border:2px solid #FFFFFF;background: #FFFFFF;">Your browser does not support the HTML5 canvas tag.</canvas>';			
			loadXMLLS(url);
			document.getElementById('downloadLnk').addEventListener('click', download1, false);
		}
	}	
}

function changeCheckNamHan(){
	if(document.getElementsByName("checkHan")[0].checked){
		document.getElementById("checkLuuKhoiVietKhac").disabled  = false;
		document.getElementById("checkLuuDaiVan").disabled  = false;
		document.getElementById("checkLuu4Hoa").disabled  = false;
		document.getElementById("checkLuu4Duc").disabled  = false;	
		document.getElementById("checkLocNhap").disabled  = false;
		document.getElementsByName("luuthaitue")[0].disabled = false;
		document.getElementsByName("luuthaitue")[1].disabled = false;		
	}else{
		document.getElementById("checkLuuKhoiVietKhac").disabled  = true;
		document.getElementById("checkLuuDaiVan").disabled  = true;
		document.getElementById("checkLuu4Hoa").disabled  = true;
		document.getElementById("checkLuu4Duc").disabled  = true;		
		document.getElementById("checkLocNhap").disabled  = true;
		document.getElementsByName("luuthaitue")[0].disabled = true;
		document.getElementsByName("luuthaitue")[1].disabled = true;		
	}	
}

function getLSCSDL(ten, gio, ngay, thang, nam, amduong, gioitinh, namhan){
	if(ten.trim() != "" && gio.trim() != "" && ngay.trim() != "" && thang.trim() != "" && nam.trim() != ""
		&& amduong.trim() != "" && gioitinh.trim() != ""){
		
		g_hoten = ten.trim();
		g_isduonglich = parseInt(amduong);
		g_namSinh = nam;
		g_thangCur = parseInt(thang);
		g_ngayCur = parseInt(ngay);
		g_isNam = parseInt(gioitinh);
		
		document.getElementById('hovaten').value = g_hoten;
		document.getElementById('ngaysinh').value = g_ngayCur;
		document.getElementById('thangsinh').value = g_thangCur;
		document.getElementById('namsinh').value = g_namSinh;
		if(g_isNam == 1){ 
			document.getElementsByName("isNam")[0].checked = true;
			document.getElementsByName("isNam")[1].checked = false;
		}else{ 
			document.getElementsByName("isNam")[0].checked = false;
			document.getElementsByName("isNam")[1].checked = true;
		}
		
		if(g_isduonglich == 1){
			
			document.getElementsByName("duonglich")[0].checked = true;
			document.getElementsByName("duonglich")[1].checked = false;
			
			var s_gio = gio.split("h");
			if(parseInt(s_gio[0]) == 23){
				var tgs; 
				if(g_namSinh % 4 == 0 && g_thangCur == 2) tgs = LIMITDAY[1] + 1;				
				else tgs = LIMITDAY[g_thangCur - 1];
				if(g_ngayCur < LIMITDAY[g_thangCur - 1]){
					g_ngayCur++;					
				}else if(g_thangCur < 11){
					g_thangCur++;
					g_ngayCur = 1;					
				}else{
					g_namSinh++;
					g_thangCur = 1;
					g_ngayCur = 1;					
				} 
				g_gioSinh = 4;					
			}else{
				g_gioSinh = (Math.ceil(parseInt(s_gio[0]) / 2) + 4) % 12;
			}
			g_gioDH = parseInt(s_gio[0]);
			g_gioDM = parseInt(s_gio[1]);
			document.getElementById('giosinhH').value = g_gioDH;
			document.getElementById('giosinhM').value = g_gioDM;
		}else{
			showHidden();
			g_gioSinh = parseInt(gio);
			document.getElementById('giosinh').value = g_gioSinh;
			document.getElementsByName("duonglich")[1].checked = true;
			document.getElementsByName("duonglich")[0].checked = false;
		}
		
		var url = g_Path_toTV + "core/core.php";

		url += "?hoten=" + g_hoten + "&isDuong=" + g_isduonglich + "&isNam=" + g_isNam;
		url += "&gio=" + g_gioSinh + "&ngay=" + g_ngayCur + "&thang=" + g_thangCur + "&nam=" + g_namSinh;
		url += "&mau=" + g_mau + "&luuthaitue=" + g_isLuuThaiTueDB + "&isNom=" + g_isNom;
		url += "&gioDH=" + g_gioDH + "&gioDM=" + g_gioDM;
		
		var flag = true; 	
		if(document.getElementsByName("checkHan")[0].checked){
			flag = checkSubmit(1);
			url += "&namHan=" + g_namHan;
		}	

		if(g_anTuHoa == 1)	url += "&anTuHoa=1";	
		else url += "&anTuHoa=0";
		
		if(document.getElementsByName("checkTtinh")[0].checked){
			flag = checkSubmit(1);
			url += "&checkTuongtinh=" + 1;	
			g_isTuongtinh = 1;
		}else g_isTuongtinh = 0;
		
		if(document.getElementsByName("checkLuuDaiVan")[0].checked){
			flag = checkSubmit(1);
			url += "&checkDaiVan=" + 1;	
			g_isFullOpt = 1;
		}else g_isFullOpt = 0;		
		
		if(document.getElementsByName("checkLuu4Hoa")[0].checked){
			flag = checkSubmit(1);
			url += "&check4Hoa=" + 1;	
			g_isLuu4Hoa = 1;	
		}else g_isLuu4Hoa = 0;
				
		if(document.getElementsByName("checkLuu4Duc")[0].checked){
			flag = checkSubmit(1);
			url += "&check4Duc=" + 1;
			g_isLuu4Duc = 1;
		}else g_isLuu4Duc = 0;		
		
		if(document.getElementsByName("checkLuuKhoiVietKhac")[0].checked){
			flag = checkSubmit(1);
			url += "&checkLuuKhac=" + 1;
			g_isLuuKhoiVietKhac = 1;
		}else g_isLuuKhoiVietKhac = 0;
		
		if(document.getElementsByName("checkLocNhap")[0].checked){
			flag = checkSubmit(1);
			url += "&checkLocNhap=" + 1;
			g_isLocNhap = 1;
		}else g_isLocNhap = 0;

		if(document.getElementsByName("checkLuuTuanTriet")[0].checked){
			flag = checkSubmit(1);
			url += "&checkLuuTuanTriet=" + 1;
			g_isLuuTuanTriet = 1;
		}else g_isLuuTuanTriet = 0;
		
				
// 		var canvasWidth = 900; //1000;
// 		var canvasHeight = 1269; //1410;
		
		var canvasWidth = 920; //1000;
		var canvasHeight = 1289; //1410;
		
		if(g_isIpad == 1){
//			canvasHeight = 1035; //1150;
			canvasHeight = 1055; //1150;
		}
		
		url += "&tokenkey=" + g_token_key;

		if(flag){
		    
			document.getElementById("divCanvas").innerHTML = '<canvas id="myCanvas" width="' + canvasWidth + '" height="' + canvasHeight + '" style="border:2px solid #FFFFFF;background: #FFFFFF;">Your browser does not support the HTML5 canvas tag.</canvas>'
			loadXMLLS(url);
//			document.getElementById('downloadLnk').addEventListener('click', download1, false);
		}		
	}
}

function getLS(response){
	var canva = document.getElementById("myCanvas");
	var ctx = canva.getContext("2d");
	ctx.fillStyle = "#E7E4DD";
	ctx.fillRect(0,0,canva.width,canva.height);
 	ctx.transform(1,0,0,1,10,10);
 	var hei = canva.height - 20;
 	var wid = canva.width - 20;
	
	var i;		
//	alert(response);	
//	document.getElementById('testrespond').innerHTML = response;	
	var arr = JSON.parse(response.trim());
	
//	document.getElementById('testrespond').innerHTML = arr.Info.SQL;	
	
	if(g_isFullOpt == 0) drawCanvas(ctx, wid, hei);	
	else drawCanvasFullOpt(ctx, wid, hei);	
	for(i = 0;i<12;i++){
		drawCung(ctx, i, arr.Cung[i], wid, hei);
	}	
	if(g_isFullOpt == 0) drawInfo(ctx, arr.Info, wid, hei);
	else drawInfoFullOpt(ctx, arr.Info, wid, hei);
			
	do{
		if(g_isFullOpt == 0) drawTitle(ctx, wid, hei);
		else drawTitleFullOpt(ctx, wid, hei);
		isFirst++;	
	}while (isFirst < 2);
	
	if(g_isFullOpt == 0) drawLogo(ctx, wid, hei);
	else drawLogoFullOpt(ctx, wid, hei);
	
	drawLine(ctx, arr.Info.VTMenh, wid, hei);

	ctx.stroke();			
	isGetLS = 1;
	ctx.stroke();	
}

function inLS(){

	var tg1 = "";
	var tg2 = "";
	// remove header
	document.getElementById('hiddenPrint').innerHTML = "";
	tg1 = document.getElementById('beginLS').innerHTML;
	tg2 = document.getElementById('lienhe').innerHTML;
	
	document.getElementById('beginLS').innerHTML = "";
	document.getElementById('lienhe').innerHTML = "";
	document.title = g_hoten;
	// Print Page
    window.print();

    //Restore orignal HTML
	document.title = "Láº¥y lĂ¡ sá»‘ Tá»­ vi!";
	document.getElementById('beginLS').innerHTML = tg1;
	document.getElementById('lienhe').innerHTML = tg2;
    showHidden();
	
}

function changeYear(){
	changeMonth();
}

function download() {
    var tg = document.getElementById('hovaten').value;
	if(tg.trim() != "" && isGetLS == 1){
		var canvas = document.getElementById('myCanvas');
		var titleDL = 'image/jpg';
		var dt = canvas.toDataURL(titleDL).replace(titleDL, "image/octet-stream");;
		
		var dlLink = document.createElement('a');
		dlLink.download = tg + ".jpg";
		dlLink.href = dt;
		dlLink.dataset.downloadurl = [titleDL, dlLink.download, dlLink.href].join(':');
		document.body.appendChild(dlLink);
		dlLink.click();
		document.body.removeChild(dlLink);
		
	}	
}

function download1(){
	
	if(g_hoten.trim() != "" && isGetLS == 1){
		var canvas = document.getElementById('myCanvas');		
		var dt = canvas.toDataURL('image/jpeg');
		this.href = dt;
	}	
}

function applyChangeFormatLS(a){
	g_isIpad = a;
}

function showHidden(){
	
	var tex = "";
	var tg1 = "";
	var tg2 = "";
	tex += '<form id="laylaso" name="laylaso">';
	tex +=	'<table border="1"><tr valign="top"><tr>';
	tex += '<td align="center" colspan="2">Há» vĂ  TĂªn: <input id="hovaten" name="hoten" type="text" value="' + g_hoten + '" size="25" maxlength="25"/></td>';
	tex += '</tr><tr><td>';
	
	tex +=	'<table><tr>';
//	colspan="2";
//	tex += '<td >Há» vĂ  TĂªn:</td><td><input id="hovaten" name="hoten" type="text" value="' + g_hoten + '" size="25" maxlength="25"/></td>';
	tex += '</tr><tr>';
	if(g_isNam == 1){
		tg1 = 'checked="checked" ';
		tg2 = "";
	}else{ 
		tg2 = 'checked="checked" ';
		tg1 = "";
	}
	tex += '<td><input name="isNam" type="radio" value="1" ' + tg1 + ' onClick="applyIsNam(1);"/> Nam </td><td> <input name="isNam" type="radio" value="0" ' + tg2 + ' onClick="applyIsNam(0);"/> Ná»¯</td>';	
	tex += '</tr><tr>';
	if(g_isduonglich == 1){
		tg1 = 'checked="checked" ';
		tg2 = "";
	}else{ 
		tg2 = 'checked="checked" ';
		tg1 = "";
	}
	
	tex += '<td><input name="duonglich" type="radio" ' + tg1 + 'value="1" onClick="changeAmlich(1);"/> DÆ°Æ¡ng Lá»‹ch </td><td> <input name="duonglich" type="radio" value="0" ' + tg2 + ' onClick="changeAmlich(0);"/> Ă‚m lá»‹ch</td>';
	tex += '</tr><tr>';
	tex += '<td>NÄƒm Sinh:</td><td><input type="text" id="namsinh" name="namsinh" maxlength="10" onKeyUp="changeYear();" size="10" value="' + g_namSinh + '"/></td>';
	tex += '</tr><tr>';	
	tex += '<td>ThĂ¡ng sinh:</td><td><select id="thangsinh" name="thangsinh" onChange="changeMonth();">';
			
	for(var i = 1;i<13;i++){
		if(i == g_thangCur) tex += '<option selected="selected" value="' + i + '">' + i + '</option>';
		else tex += '<option value="' + i + '">' + i + '</option>';
	}		
		
	tex += '</select></td></tr><tr><td>NgĂ y sinh:</td><td>';				
	tex += '<div id="divngaysinh"><select id="ngaysinh" name="ngaysinh" onChange="applyChange();">';
	
	var lim = LIMITDAY[g_thangCur - 1];
	if(g_thangCur == 2) lim++;
	for(var i = 1;i<lim;i++){
		if(i == g_ngayCur) tex += '<option selected="selected" value="' + i + '">' + i + '</option>';
		else tex += '<option value="' + i + '">' + i + '</option>';
	}		

	tex += '</select></div></td></tr><tr>';			
	tex += '<td>Giá» sinh:</td><td align="left">';
	tex += '<div id="divGioSinh" align="left">';
	tex += '</div></td>';		
	tex +=	'</tr><tr>';		
	tex += '</td></tr><tr><td colspan="2">Loáº¡i áº£nh:</td></tr><tr>';	
	if(g_mau == 1){
		tg1 = 'checked="checked" ';
		tg2 = "";
	}else{ 
		tg2 = 'checked="checked" ';
		tg1 = "";
	}	
	tex += '<td><input type="radio" name="anhMau" ' + tg1 + ' onClick="applyIsMau(1);"/> MĂ u</td><td><input type="radio" name="anhMau" ' + tg2 + ' onClick="applyIsMau(0);" /> Äen tráº¯ng</td>';
	
	tex += '</tr><tr><td colspan="2">Cá»¡ áº£nh:</td></tr><tr>';	
	if(g_isIpad == 0){
		tg1 = 'checked="checked" ';
		tg2 = "";
	}else{ 
		tg2 = 'checked="checked" ';
		tg1 = "";
	}	
	tex += '<td><input type="radio" name="dangLD" ' + tg1 + ' onClick="applyChangeFormatLS(0);"/> 900x1269px</td><td><input type="radio" name="dangLD" ' + tg2 + ' onClick="applyChangeFormatLS(1);" /> 900x1035px</td>';
	tex +=	'</tr></table></td><td><b>TĂ¹y chá»n: </b><table><tr>';
	
	var tgg;
	
	if(g_anTuHoa == 1){
		tg1 = 'checked="checked" ';
		tg2 = "";
	}else{ 
		tg2 = 'checked="checked" ';
		tg1 = "";
	} 
		
	if(g_isTuongtinh == 0) tgg = "";
	else tgg = ' checked="checked" '; 
	tex +=	'<td colspan="2"><input type="checkbox" ' + tgg + ' name="checkTtinh" id="checkTtinh" value="1"/> An vĂ²ng TÆ°á»›ng tinh </td>';
	tex += '</tr><tr>';		
	
	if(g_isLuuHan == 0) tgg = "";
	else tgg = ' checked="checked" ';		
	tex += '<td colspan="2"><input type="checkbox" ' + tgg + ' name="checkHan" value="1" onClick="changeCheckNamHan();"/> Háº¡n nÄƒm: ';
	tex += '<input type="text" id="textNamHan" name="textNamHan" maxlength="10" size="10" value="' + g_namHan + '"/></td>';	
	tex += '</tr><tr>';
	
	if(g_isLuu4Hoa == 0) tgg = "";
	else tgg = ' checked="checked" '; 
	tex +=	'<td><input type="checkbox" ' + tgg + ' name="checkLuu4Hoa" id="checkLuu4Hoa" value="1"/> LÆ°u tá»© hĂ³a </td>';
	
	if(g_isLuu4Duc == 0) tgg = "";
	else tgg = ' checked="checked" ';
	tex +=	'<td><input type="checkbox" ' + tgg + ' name="checkLuu4Duc" id="checkLuu4Duc" value="1"/> LÆ°u tá»© Ä‘á»©c </td>';
	tex +=	'</tr><tr>';
	
	if(g_isFullOpt == 0) tgg = "";
	else tgg = ' checked="checked" ';
	tex +=	'<td><input type="checkbox" ' + tgg + ' name="checkLuuDaiVan" id="checkLuuDaiVan" value="1" /> LÆ°u Ä‘áº¡i váº­n </td>';
	
	if(g_isLuuKhoiVietKhac == 0) tgg = "";
	else tgg = ' checked="checked" ';
	tex +=	'<td><input type="checkbox" ' + tgg + ' name="checkLuuKhoiVietKhac" id="checkLuuKhoiVietKhac" value="1"/> LÆ°u cĂ¡c sao khĂ¡c </td>';
	tex +=	'</tr><tr>';
		
	if(g_isLocNhap == 0) tgg = "";
	else tgg = ' checked="checked" ';
	tex +=	'<td><input type="checkbox" ' + tgg + ' name="checkLocNhap" id="checkLocNhap" value="1" /> Lá»™c Ká»µ nháº­p </td>';

	if(g_isLuuTuanTriet == 0) tgg = "";
	else tgg = ' checked="checked" ';
	tex +=	'<td><input type="checkbox" ' + tgg + ' name="checkLuuTuanTriet" id="checkLuuTuanTriet" value="1" /> LÆ°u Tuáº§n Triá»‡t </td>';

	tex +=	'</tr><tr><td colspan="2">LÆ°u ThĂ¡i Tuáº¿ theo:</td></tr><tr>';
	if(g_isLuuThaiTueDB == 1){
		tg1 = 'checked="checked" ';
		tg2 = "";
	}else{ 
		tg2 = 'checked="checked" ';
		tg1 = "";
	}	
	tex += '<td><input type="radio" name="luuthaitue" ' + tg1 + ' onClick="g_isLuuThaiTueDB = 1;"/> Äá»‹a BĂ n </td><td><input type="radio" name="luuthaitue" ' + tg2 + ' onClick="g_isLuuThaiTueDB = 0;" /> Tiá»ƒu Háº¡n </td>';
	
	tex +=	'</tr><tr><td colspan="2">NgĂ´n ngá»¯ trong lĂ¡ sá»‘:</td></tr><tr>';
	if(g_isNom == 0){
		tg1 = 'checked="checked" ';
		tg2 = "";
	}else{ 
		tg2 = 'checked="checked" ';
		tg1 = "";
	}	
	tex += '<td><input type="radio" name="isNom" ' + tg1 + ' onClick="g_isNom = 0;"/> Viá»‡t </td><td><input type="radio" name="isNom" ' + tg2 + ' onClick="g_isNom = 1;" /> NĂ´m </td>';

	tex +=	'</tr></table></td>';
	tex += '</tr></table></form>';
//	if(g_isInLS == 0) tex += '<br/>';	
	tex += '<button onClick="checkLayLS();">Láº¥y lĂ¡ sá»‘</button> '
	if(g_isInLS == 1) tex += ' <button onClick="inLS();">In lĂ¡ sá»‘</button> ';
//	tex += '<button onClick="download();">Táº£i áº£nh xuá»‘ng</button>';
	tex += ' <a href="#" id="downloadLnk" download="' + g_hoten.trim() + '.jpg"> <button>Táº£i áº£nh vá»</button></a><br/><br/>';
	document.getElementById('hiddenPrint').innerHTML = tex;

//	style="width: 40px"	
	
	tex = "";	
	if(g_isduonglich == 1){
		tex += '<input type="number" id="giosinhH" value="' + g_gioDH + '" min="0" max="23" maxlength="2" size = "2" /> giá» ';
		tex += '<input type="number" id="giosinhM" value="' + g_gioDM + '" min="0" max="59" maxlength="2" size = "2" /> phĂºt';
	}else{
		tex += '<select id="giosinh" name="giosinh">';
		for(i = 0;i<12;i++){
			if(i == g_gioSinh) tex += '<option selected="selected" value="' + ((i+4)%12) + '">' + CHINAM1[(i + 4)%12] + '</option>';
			else tex += '<option value="' + ((i+4)%12) + '">' + CHINAM1[(i + 4)%12] + '</option>';
		}		
	}
	document.getElementById("divGioSinh").innerHTML = tex;
	changeCheckNamHan();
}

function checkSubmit(id){
	var tg;
	var i,j;
	var tex; 
	if(document.getElementById('hovaten').value.trim() == ""){
		alert("ChÆ°a cĂ³ tĂªn Ä‘Æ°Æ¡ng sá»‘!");
		return false;
	}else {
		g_hoten = document.getElementById('hovaten').value.trim();
		document.getElementById('downloadLnk').download = g_hoten  + '.jpg';
	}
	
	if(id == 0) tg = isNaN(document.getElementById('namsinh').value.trim());
	else tg = isNaN(document.getElementById('textNamHan').value.trim());
	if(g_isduonglich == 1 && tg == false){
		return true;		
	}else{
		if(id == 0)	tex = "ThĂ´ng tin nÄƒm sinh chÆ°a Ä‘Ăºng!";
		else tex = "ThĂ´ng tin nÄƒm háº¡n chÆ°a Ä‘Ăºng!";
		if(g_isduonglich == 0){			
			if(tg == false){ 
				if(id == 0) g_namSinh = document.getElementById('namsinh').value.trim();
				else g_namHan = document.getElementById('textNamHan').value.trim();
				return true;				
			}else{
				var tg1;
				if(id == 0) tg1 = document.getElementById('namsinh').value.trim();
				else tg1 = document.getElementById('textNamHan').value.trim();
				var tg2 = tg1.split(" ");
				if(tg2.length != 2){
					alert(tex);
					return false;
				}else{
					for(i = 0;i<10;i++){
						if(CANNAM1[i].toLowerCase() == tg2[0].toLowerCase() || CANNAM2[i].toLowerCase() == tg2[0].toLowerCase())
							break;
					}
					if(i == 10){
						alert(tex);
						return false
					} 
					for(j = 0;j<12;j++){
						if(CHINAM1[j].toLowerCase() == tg2[1].toLowerCase() || CHINAM2[j].toLowerCase() == tg2[1].toLowerCase())
							break;
					}
					if(j == 12 || (Math.abs(i - j) % 2 == 1)){
						alert(tex);
						return false
					}
					if(id == 0){ 
						g_namSinh = CANNAM2[i] + "_" + CHINAM2[j];
					}else g_namHan = CANNAM2[i] + "_" + CHINAM2[j];
					return true;
				}				
			}		
		}else{
			alert(tex);
			return false;
		}
	}	
}

function loadXMLLS(url){
	var xmlhttp;
	if (window.XMLHttpRequest){
		// code for IE7+, Firefox, Chrome, Opera, Safari
	  	xmlhttp=new XMLHttpRequest();
	}else{
		// code for IE6, IE5
	  	xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
	}
	
	xmlhttp.onreadystatechange=function()
	{
		if (xmlhttp.readyState==4 && xmlhttp.status==200){
//			document.getElementById("myDiv").innerHTML=xmlhttp.responseText;
//			alert(xmlhttp.responseText);
			getLS(xmlhttp.responseText);
		}
	}
//	alert(url);
	xmlhttp.open("GET",url,true);
	xmlhttp.send();
}

function changePage(page,total){
	var url = "tuvi/core/db_solve.php";
	if(page > -1 && total > 0){
		url += "?pageNum=" + page + "&totalpage="+total;		
	}
	printChangePage(url);
}

function printChangePage(url){
	var xmlhttp;
	if (window.XMLHttpRequest){
		// code for IE7+, Firefox, Chrome, Opera, Safari
	  	xmlhttp=new XMLHttpRequest();
	}else{
		// code for IE6, IE5
	  	xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
	}
	
	xmlhttp.onreadystatechange=function()
	{
		if (xmlhttp.readyState==4 && xmlhttp.status==200){
			document.getElementById('Dulieulaso').innerHTML = xmlhttp.responseText.trim();
		}
	}
	xmlhttp.open("GET",url,true);
	xmlhttp.send();
}
