// #Field_F24 필드 아이디 가져오기

function controlPMSC1050501 (){ //확인

  // 인력정보에 역할pm 필수 체크
  var roleObj2 = $('#Field_F24').find('[name^=pem_role_cd]');
	if(roleObj2.filter(function() { if(this.value === 'PR010'){ return true; } return false; }).length != 1) {
	  alert('발주사 직원의 발주사PM 역할은 필수로 한사람만 추가해 주세요.');
	  return false;
	} 

	var roleObj = $('#Field_F40').find('[name^=pem_role_cd]');
	if(roleObj.filter(function() { if(this.value === 'PR020'){ return true; } return false; }).length != 1) {
	  alert('수행사 직원의 수행사PM 역할은 필수로 한사람만 추가해 주세요.');
	  return false;
	}
	
	return true;  
}

// 임시저장의 경우 체크할 이유가 없어 주석처리
/*
function controlPMSC1050502 (){ //임시저장
  // 인력정보에 역할pm 필수 체크
  var roleObj2 = $('#Field_F24').find('[name^=pem_role_cd]');
	if(roleObj2.filter(function() { if(this.value === 'PR010'){ return true; } return false; }).length != 1) {
	  alert('발주사 직원의 발주사PM 역할은 필수로 한사람만 추가해 주세요.');
	  return false;
	} 

	var roleObj = $('#Field_F40').find('[name^=pem_role_cd]');
	if(roleObj.filter(function() { if(this.value === 'PR020'){ return true; } return false; }).length != 1) {
	  alert('수행사 직원의 수행사PM 역할은 필수로 한사람만 추가해 주세요.');
	  return false;
	}
  return true;  
}
*/
  
  function gradeSet(){
		var prd_cd = $('select[name="pms_period_cd"]').val(); //기간
		var mm_cd = $('select[name="pms_mm_cd"]').val(); //투입공수
		var amt_cd = $('select[name="pms_amt_cd"]').val(); //금액
  
		if(prd_cd == 'PMSPRD01' || mm_cd == 'PMSMM01' || amt_cd == 'PMSAMT01'){ //1등급
			  $('input[name="pms_grade_cd"]').val('PMSGRD01');
			  $('#Field_F034_area').find('div').text('1등급');
		}else if(prd_cd == 'PMSPRD02' || mm_cd == 'PMSMM02' || amt_cd == 'PMSAMT02'){ //2등급
			  $('input[name="pms_grade_cd"]').val('PMSGRD02');
			  $('#Field_F034_area').find('div').text('2등급');
		}else if(prd_cd == 'PMSPRD03' || mm_cd == 'PMSMM03' || amt_cd == 'PMSAMT03'){ //3등급
			  $('input[name="pms_grade_cd"]').val('PMSGRD03');
			  $('#Field_F034_area').find('div').text('3등급');
		}else if(prd_cd == 'PMSPRD04' || mm_cd == 'PMSMM04' || amt_cd == 'PMSAMT04'){ //4등급
			  $('input[name="pms_grade_cd"]').val('PMSGRD04');
			  $('#Field_F034_area').find('div').text('4등급');
		}else if(prd_cd == 'PMSPRD05' || mm_cd == 'PMSMM05' || amt_cd == 'PMSAMT05'){ //5등급
			  $('input[name="pms_grade_cd"]').val('PMSGRD05');
			  $('#Field_F034_area').find('div').text('5등급');
		}
  }

/*  시작일/종료일 세팅*/
function initDates(fieldId)
{
  var hidden_start_dt = $('input#Field_F015');
  var visible_start_dt = $('input#Field_F015_dt');
  var hidden_end_dt = $('input#Field_F016');
  var visible_end_dt = $('input#Field_F016_dt');
  
  var addedRelRow = $('div#' + fieldId + ' .rel-bottom.clear-fix .data:last-child');
  var added_hidden_start_dt = $('input[name=pem_planstart_dttm]', addedRelRow);
  var added_visible_start_dt = $('input[name=pem_planstart_dttm_dt]', addedRelRow);
  var added_hidden_end_dt = $('input[name=pem_planfinish_dttm]', addedRelRow);
  var added_visible_end_dt = $('input[name=pem_planfinish_dttm_dt]', addedRelRow);
  
  added_hidden_start_dt.val(hidden_start_dt.val());
  added_visible_start_dt.val(visible_start_dt.val());
  
  added_hidden_end_dt.val(hidden_end_dt.val());
  added_visible_end_dt.val(visible_end_dt.val());
}