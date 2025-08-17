(function() {
    var str =` 
                <ul class="nav">
                    <li class="nav-item">
                        <a class="nav-link" data-toggle="collapse" href="#menu01" aria-expanded="false" aria-controls="menu01">
                            <i class="icon-map menu-icon"></i>
                            <span class="menu-title">전경도</span>
                            <i class="menu-arrow"></i>
                        </a>
                        <div class="collapse" id="menu01">
                            <ul class="nav flex-column sub-menu">
                                <li class="nav-item"> <a class="nav-link" href="">이천전경도</a></li>
                                <li class="nav-item"> <a class="nav-link" href="">청주전경도</a></li>
                                <li class="nav-item"> <a class="nav-link" href="">우시전경도</a></li>
                                <li class="nav-item"> <a class="nav-link" href="">충청전경도</a></li>
                                <li class="nav-item"> <a class="nav-link" href="">덕평창고</a></li>
                            </ul>
                        </div>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" data-toggle="collapse" href="#menu02" aria-expanded="false" aria-controls="menu02">
                            <i class="icon-map menu-icon"></i>
                            <span class="menu-title">Report</span>
                            <i class="menu-arrow"></i>
                        </a>
                        <div class="collapse" id="menu02">
                            <ul class="nav flex-column sub-menu">
                                <li class="nav-item"> <a class="nav-link" href="">MDM장비 Report</a></li>
                                <li class="nav-item"> <a class="nav-link" href="">Tracker 운영 Report</a></li>
                                <li class="nav-item"> <a class="nav-link" href="">MDM장비 이동 Report</a></li>
                            </ul>
                        </div>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" data-toggle="collapse" href="#menu03" aria-expanded="false" aria-controls="menu03">
                            <i class="icon-map menu-icon"></i>
                            <span class="menu-title">Tracker 관리</span>
                            <i class="menu-arrow"></i>
                        </a>
                        <div class="collapse" id="menu03">
                            <ul class="nav flex-column sub-menu">
                                <li class="nav-item"> <a class="nav-link" href="">Tracker 관리</a></li>
                                <li class="nav-item"> <a class="nav-link" href="">Tracker 장애</a></li>
                                <li class="nav-item"> <a class="nav-link" href="">Tracker 데이터수집</a></li>
                                <li class="nav-item"> <a class="nav-link" href="">설정명령 관리</a></li>
                                <li class="nav-item"> <a class="nav-link" href="">제어전송 관리</a></li>
                                <li class="nav-item"> <a class="nav-link" href="">Tracker 입고출고</a></li>
                            </ul>
                        </div>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" data-toggle="collapse" href="#menu04" aria-expanded="false" aria-controls="menu04">
                            <i class="icon-map menu-icon"></i>
                            <span class="menu-title">기준정보 관리</span>
                            <i class="menu-arrow"></i>
                        </a>
                        <div class="collapse" id="menu04">
                            <ul class="nav flex-column sub-menu">
                                <li class="nav-item"> <a class="nav-link" href="">MDM장비 관리</a></li>
                                <li class="nav-item"> <a class="nav-link" href="">MDM장비 연결관리</a></li>
                                <li class="nav-item"> <a class="nav-link" href="">도면관리</a></li>
                                <li class="nav-item"> <a class="nav-link" href="">도면항목 관리</a></li>
                                <li class="nav-item"> <a class="nav-link" href="">시방서 관리</a></li>
                                <li class="nav-item"> <a class="nav-link" href="">BLE AP 관리</a></li>
                                <li class="nav-item"> <a class="nav-link" href="">창고 관리</a></li>
                            </ul>
                        </div>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" data-toggle="collapse" href="#menu05" aria-expanded="false" aria-controls="menu05">
                            <i class="icon-map menu-icon"></i>
                            <span class="menu-title">게시판</span>
                            <i class="menu-arrow"></i>
                        </a>
                        <div class="collapse" id="menu05">
                            <ul class="nav flex-column sub-menu">
                                <li class="nav-item"> <a class="nav-link" href="">공지사항</a></li>
                                <li class="nav-item"> <a class="nav-link" href="">게시판</a></li>
                                <li class="nav-item"> <a class="nav-link" href="">Q&A</a></li>
                            </ul>
                        </div>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" data-toggle="collapse" href="#menu06" aria-expanded="false" aria-controls="menu06">
                            <i class="icon-map menu-icon"></i>
                            <span class="menu-title">시스템</span>
                            <i class="menu-arrow"></i>
                        </a>
                        <div class="collapse" id="menu06">
                            <ul class="nav flex-column sub-menu">
                                <li class="nav-item"> <a class="nav-link" href="">사용자 관리</a></li>
                                <li class="nav-item"> <a class="nav-link" href="">메뉴관리</a></li>
                                <li class="nav-item"> <a class="nav-link" href="">그룹관리</a></li>
                                <li class="nav-item"> <a class="nav-link" href="">코드관리</a></li>
                            </ul>
                        </div>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" data-toggle="collapse" href="#menu07" aria-expanded="false" aria-controls="menu07">
                            <i class="icon-map menu-icon"></i>
                            <span class="menu-title">나의정보</span>
                            <i class="menu-arrow"></i>
                        </a>
                        <div class="collapse" id="menu07">
                            <ul class="nav flex-column sub-menu">
                                <li class="nav-item"> <a class="nav-link" href="">나의정보</a></li>
                            </ul>
                        </div>
                    </li>
                </ul>   
   `;
    document.write(str);
})();