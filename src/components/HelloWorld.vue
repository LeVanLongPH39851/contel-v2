<template>
  <!-- ══ BRAND ══ -->
  <div
    class="bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 px-5 py-3.5 flex items-center gap-4 flex-wrap"
  >
    <div class="flex items-center gap-2.5">
      <span class="sq"
        ><i></i><i class="o"></i><i class="o"></i><i></i><i></i><i class="o"></i
      ></span>
      <span
        class="font-extrabold text-[15px] tracking-[.14em] text-slate-900 dark:text-white"
        >NE<span class="text-cyan-400">O</span>TAM</span
      >
    </div>
    <span class="w-px h-7 bg-slate-200 dark:bg-slate-700"></span>
    <div>
      <div class="font-extrabold text-[17px] leading-tight">
        ConteL
        <span class="text-slate-400 dark:text-slate-500 font-medium text-[14px]"
          >· Content Intelligence</span
        >
      </div>
      <div class="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
        Sức khỏe Nội dung các chương trình của VTV
      </div>
    </div>
    <div class="ml-auto flex items-center gap-2">
      <div
        class="flex bg-slate-100 dark:bg-slate-800 rounded-lg p-0.5"
        id="date-pills"
      >
        <button
          data-days="15"
          class="px-3 py-1.5 rounded-md text-[11px] font-semibold text-slate-500"
        >
          15 ngày
        </button>
        <button
          data-days="30"
          class="px-3 py-1.5 rounded-md text-[11px] font-semibold bg-white dark:bg-slate-700 shadow-sm"
        >
          30 ngày
        </button>
        <button
          data-days="90"
          class="px-3 py-1.5 rounded-md text-[11px] font-semibold text-slate-500"
        >
          90 ngày
        </button>
        <button
          data-days="custom"
          class="px-3 py-1.5 rounded-md text-[11px] font-semibold text-slate-500"
        >
          Tùy chọn
        </button>
      </div>
      <div id="custom-range" class="hidden items-center gap-1.5">
        <input
          type="date"
          id="d-start"
          class="text-[11px] px-2 py-1.5 rounded-md border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800"
        />
        <span class="text-slate-400">–</span>
        <input
          type="date"
          id="d-end"
          class="text-[11px] px-2 py-1.5 rounded-md border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800"
        />
      </div>
      <button
        id="theme-btn"
        class="w-8 h-8 grid place-items-center rounded-lg border border-slate-200 dark:border-slate-700 text-slate-500 text-[14px]"
      >
        ◐
      </button>
    </div>
  </div>

  <!-- ══ TABS ══ -->
  <div
    class="sticky top-0 z-40 bg-white/95 dark:bg-slate-900/95 backdrop-blur border-b border-slate-200 dark:border-slate-800 px-5 flex items-center gap-1 overflow-x-auto"
  >
    <button
      data-tab="t1"
      class="nav-tab px-3.5 py-2.5 text-[12px] font-semibold border-b-2 border-brand-600 text-brand-600 whitespace-nowrap"
    >
      01 · Tổng quan
    </button>
    <button
      data-tab="t2"
      class="nav-tab px-3.5 py-2.5 text-[12px] font-semibold border-b-2 border-transparent text-slate-500 whitespace-nowrap"
    >
      02 · Chi tiết chương trình
    </button>
    <button
      data-tab="t3"
      class="nav-tab px-3.5 py-2.5 text-[12px] font-semibold border-b-2 border-transparent text-slate-500 whitespace-nowrap"
    >
      03 · Chi tiết khung giờ
    </button>
    <button
      data-tab="t4"
      class="nav-tab px-3.5 py-2.5 text-[12px] font-semibold border-b-2 border-transparent text-slate-500 whitespace-nowrap"
    >
      04 · Chi tiết phát sóng
    </button>
    <button
      data-tab="t5"
      class="nav-tab ml-auto px-3.5 py-2.5 text-[12px] font-semibold border-b-2 border-transparent text-slate-500 whitespace-nowrap"
    >
      Định nghĩa &amp; Phương pháp
    </button>
  </div>

  <!-- ══ FILTERS ══ -->
  <div
    id="fbar"
    class="px-5 py-2.5 bg-slate-100/70 dark:bg-slate-900/60 border-b border-slate-200 dark:border-slate-800 flex items-center gap-x-5 gap-y-2 flex-wrap text-[11px]"
  >
    <div class="flex items-center gap-1.5">
      <span class="text-[10px] uppercase tracking-wide text-slate-500 font-bold"
        >Kênh</span
      >
      <div class="flex gap-1" id="f-channel"></div>
    </div>
    <div class="flex items-center gap-1.5">
      <span class="text-[10px] uppercase tracking-wide text-slate-500 font-bold"
        >Khung giờ</span
      >
      <div class="flex gap-1 flex-wrap" id="f-time"></div>
    </div>
    <div class="flex items-center gap-1.5">
      <span class="text-[10px] uppercase tracking-wide text-slate-500 font-bold"
        >Loại ngày</span
      >
      <div class="flex gap-1" id="f-weekday"></div>
    </div>
    <span class="ml-auto text-[10px] text-slate-400" id="range-label"></span>
  </div>

  <main class="p-5 max-w-[1640px] mx-auto">
    <!-- ══════ TAB 1 ══════ -->
    <section id="t1" class="tab-content active space-y-4">
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div
          class="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-4"
        >
          <div class="flex items-baseline gap-2 mb-1">
            <h2 class="font-bold text-[13px]">Phân phối điểm số</h2>
            <span class="tip text-slate-400 text-[11px]"
              >ⓘ<span
                class="bg-slate-800 text-white text-[10px] leading-relaxed p-2.5 rounded-lg"
                >Số chương trình theo từng dải điểm, thang chuẩn hóa
                0–100.</span
              ></span
            >
          </div>
          <div class="h-[196px] mt-3"><canvas id="distChart"></canvas></div>
        </div>

        <div
          class="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden"
        >
          <div
            class="px-4 py-3 border-b border-slate-200 dark:border-slate-800 flex items-baseline gap-2"
          >
            <h2 class="font-bold text-[13px]">Cần theo dõi</h2>
            <span
              class="text-[11px] font-bold text-rose-500"
              id="risk-count"
            ></span>
            <span class="ml-auto text-[10px] text-slate-400"
              >Điểm Sức khỏe dưới 35</span
            >
          </div>
          <div
            id="risk-list"
            class="divide-y divide-slate-100 dark:divide-slate-800 max-h-[214px] overflow-y-auto"
          ></div>
        </div>

        <div
          class="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden"
        >
          <div
            class="px-4 py-3 border-b border-slate-200 dark:border-slate-800 flex items-baseline gap-2"
          >
            <h2 class="font-bold text-[13px]">Điểm cao, ít người xem</h2>
            <span
              class="text-[11px] font-bold text-amber-500"
              id="under-count"
            ></span>
            <span class="ml-auto text-[10px] text-slate-400"
              >Cơ hội xếp lịch</span
            >
          </div>
          <div
            id="under-list"
            class="divide-y divide-slate-100 dark:divide-slate-800 max-h-[214px] overflow-y-auto"
          ></div>
        </div>
      </div>

      <div
        class="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden"
      >
        <div
          class="px-4 py-3 border-b border-slate-200 dark:border-slate-800 flex items-center gap-3 flex-wrap"
        >
          <h2 class="font-bold text-[13px]">Bảng Sức khỏe Nội dung</h2>
          <input
            id="ov-search"
            placeholder="Tìm chương trình…"
            class="text-[11px] px-2.5 py-1.5 rounded-md border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 w-52"
          />
          <span class="ml-auto text-[10px] text-slate-400" id="ov-count"></span>
        </div>
        <div class="overflow-x-auto max-h-[560px] overflow-y-auto">
          <table class="w-full text-[11px]">
            <thead class="text-[10px] uppercase tracking-wide text-slate-500">
              <tr>
                <th
                  rowspan="2"
                  class="text-left px-3 py-2 font-bold bg-slate-50 dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700"
                  style="padding-left: 15px"
                >
                  Chương trình
                </th>
                <th
                  rowspan="2"
                  class="text-left px-3 py-2 font-bold bg-slate-50 dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700"
                >
                  Kênh
                </th>
                <th
                  rowspan="2"
                  class="text-left px-3 py-2 font-bold bg-slate-50 dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700"
                >
                  Giờ phát
                </th>
                <th
                  rowspan="2"
                  class="text-left px-3 py-2 font-bold bg-slate-50 dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700"
                >
                  Loại ngày
                </th>
                <th
                  colspan="6"
                  class="text-center px-3 py-1.5 font-bold grp-c border-l border-b border-slate-200 dark:border-slate-700 text-brand-600"
                >
                  Giá trị Nội dung · Content Value
                </th>
                <th
                  colspan="4"
                  class="text-center px-3 py-1.5 font-bold grp-s border-l border-b border-slate-200 dark:border-slate-700 text-sky-600"
                >
                  Vị trí Phát sóng · Slot Baseline
                </th>
              </tr>
              <tr>
                <th
                  class="text-right px-3 py-2 font-bold grp-c border-l border-b border-slate-200 dark:border-slate-700 cursor-pointer"
                  onclick="sortBy('content_score')"
                >
                  Điểm Sức khỏe ↕
                </th>
                <th
                  class="text-right px-2 py-2 font-normal grp-c border-b border-slate-200 dark:border-slate-700"
                >
                  HSX
                </th>
                <th
                  class="text-right px-2 py-2 font-normal grp-c border-b border-slate-200 dark:border-slate-700"
                >
                  TLQL
                </th>
                <th
                  class="text-right px-2 py-2 font-normal grp-c border-b border-slate-200 dark:border-slate-700"
                >
                  CĐ
                </th>
                <th
                  class="text-right px-2 py-2 font-normal grp-c border-b border-slate-200 dark:border-slate-700"
                >
                  GC
                </th>
                <th
                  class="text-right px-2 py-2 font-normal grp-c border-b border-slate-200 dark:border-slate-700"
                >
                  Ave.Reach
                </th>
                <th
                  class="text-right px-3 py-2 font-bold grp-s border-l border-b border-slate-200 dark:border-slate-700 cursor-pointer"
                  onclick="sortBy('slot_score')"
                >
                  Điểm Vị trí ↕
                </th>
                <th
                  class="text-right px-2 py-2 font-normal grp-s border-b border-slate-200 dark:border-slate-700"
                >
                  Rating nền
                </th>
                <th
                  class="text-right px-2 py-2 font-normal grp-s border-b border-slate-200 dark:border-slate-700"
                >
                  KT
                </th>
                <th
                  class="text-right px-2 py-2 font-normal grp-s border-b border-slate-200 dark:border-slate-700"
                >
                  CT
                </th>
              </tr>
            </thead>
            <tbody
              id="ov-body"
              class="divide-y divide-slate-100 dark:divide-slate-800"
            ></tbody>
          </table>
        </div>
        <div
          class="px-4 py-2.5 border-t border-slate-200 dark:border-slate-800 text-[10px] text-slate-400 flex gap-5 flex-wrap"
        >
          <span
            >HSX Hiệu suất xem · TLQL Tỷ lệ quay lại · CĐ Khán giả chủ động · GC
            Giữ chân</span
          >
          <span>KT Kế thừa · CT Chuyển tiếp</span>
        </div>
      </div>
    </section>

    <!-- ══════ TAB 2 ══════ -->
    <section id="t2" class="tab-content space-y-4">
      <div
        class="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-4 flex items-center gap-3 flex-wrap"
      >
        <span
          class="text-[10px] uppercase tracking-wide text-slate-500 font-bold"
          >Chương trình</span
        >
        <select
          id="prog-select"
          class="text-[12px] px-3 py-1.5 rounded-md border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 min-w-[300px]"
        ></select>
        <span id="prog-meta" class="text-[11px] text-slate-500"></span>
      </div>

      <div class="grid grid-cols-1 xl:grid-cols-2 gap-4">
        <div
          class="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden"
        >
          <div
            class="px-4 py-3 border-b border-slate-200 dark:border-slate-800 grp-c flex items-center"
          >
            <h2 class="font-bold text-[13px] text-brand-600">
              Giá trị Nội dung · Content Value
            </h2>
            <span
              class="ml-auto text-[10px] px-2 py-0.5 rounded bg-brand-600 text-white font-bold"
              >CÓ TÍNH ĐIỂM</span
            >
          </div>
          <div class="p-4">
            <div class="flex items-end gap-4 mb-5">
              <div>
                <div
                  class="text-[10px] uppercase tracking-wide text-slate-500 font-bold"
                >
                  Điểm Sức khỏe Nội dung
                </div>
                <div
                  id="p-content-score"
                  class="text-[50px] font-extrabold leading-none tracking-tight"
                >
                  —
                </div>
              </div>
              <div id="p-content-badge" class="mb-2"></div>
            </div>
            <div id="p-content-metrics"></div>
          </div>
        </div>
        <div
          class="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden"
        >
          <div
            class="px-4 py-3 border-b border-slate-200 dark:border-slate-800 grp-s flex items-center"
          >
            <h2 class="font-bold text-[13px] text-sky-600">
              Vị trí Phát sóng · Slot Baseline
            </h2>
            <span
              class="ml-auto text-[10px] px-2 py-0.5 rounded bg-sky-600 text-white font-bold"
              >MÔ TẢ VỊ TRÍ</span
            >
          </div>
          <div class="p-4">
            <div class="flex items-end gap-4 mb-5">
              <div>
                <div
                  class="text-[10px] uppercase tracking-wide text-slate-500 font-bold"
                >
                  Điểm Vị trí Phát sóng
                </div>
                <div
                  id="p-slot-score"
                  class="text-[50px] font-extrabold leading-none tracking-tight text-sky-600"
                >
                  —
                </div>
              </div>
            </div>
            <div id="p-slot-metrics"></div>
            <div
              id="p-verdict"
              class="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 text-[11px] leading-relaxed text-slate-600 dark:text-slate-300"
            ></div>
          </div>
        </div>
      </div>

      <div class="grid grid-cols-1 xl:grid-cols-2 gap-4">
        <div
          class="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-4"
        >
          <div class="flex items-center gap-2 mb-3">
            <h2 class="font-bold text-[13px]">Biến động theo thời gian</h2>
            <select
              id="trend-metric"
              class="ml-auto text-[11px] px-2 py-1 rounded-md border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800"
            >
              <option value="content_score">Điểm Sức khỏe Nội dung</option>
              <option value="slot_score">Điểm Vị trí Phát sóng</option>
              <option value="wte">Hiệu suất xem (WTE)</option>
              <option value="rvr">Tỷ lệ quay lại (RVR)</option>
              <option value="ovr">Khán giả chủ động (OVR)</option>
              <option value="arr">Giữ chân (ARR)</option>
              <option value="reach">Độ phủ (Ave.Reach)</option>
            </select>
          </div>
          <div class="h-[218px]"><canvas id="trendChart"></canvas></div>
        </div>
        <div
          class="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-4"
        >
          <div class="flex items-center gap-2 mb-1">
            <h2 class="font-bold text-[13px]">Đường giữ chân khán giả</h2>
            <span class="tip text-slate-400 text-[11px]"
              >ⓘ<span
                class="bg-slate-800 text-white text-[10px] leading-relaxed p-2.5 rounded-lg"
                >Tỷ lệ khán giả còn ở lại theo từng phút, so với nhóm có mặt lúc
                chương trình bắt đầu.</span
              ></span
            >
            <span class="ml-auto text-[10px] text-slate-400"
              >Nét đứt là trung bình khung giờ</span
            >
          </div>
          <div class="h-[218px] mt-2"><canvas id="dropChart"></canvas></div>
        </div>
      </div>
    </section>

    <!-- ══════ TAB 3 ══════ -->
    <section id="t3" class="tab-content space-y-4">
      <div
        class="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-4 flex items-center gap-3 flex-wrap"
      >
        <span
          class="text-[10px] uppercase tracking-wide text-slate-500 font-bold"
          >Độ rộng block</span
        >
        <div
          class="flex bg-slate-100 dark:bg-slate-800 rounded-lg p-0.5"
          id="blk-res"
        >
          <button
            data-w="1"
            class="px-3 py-1.5 rounded-md text-[11px] font-semibold bg-white dark:bg-slate-700 shadow-sm"
          >
            1 tiếng
          </button>
          <button
            data-w="2"
            class="px-3 py-1.5 rounded-md text-[11px] font-semibold text-slate-500"
          >
            2 tiếng
          </button>
        </div>
        <span class="text-[10px] text-slate-500"
          >Chi tiết theo block giờ thực tế trên lịch phát, phục vụ việc sắp xếp
          khung sóng</span
        >
      </div>

      <div
        class="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden"
      >
        <div class="px-4 py-3 border-b border-slate-200 dark:border-slate-800">
          <h2 class="font-bold text-[13px]">Bản đồ khung sóng</h2>
          <p class="text-[10px] text-slate-500 mt-0.5">
            Từng block giờ với chương trình đang chiếm và mức nền của block
          </p>
        </div>
        <div class="overflow-x-auto max-h-[520px] overflow-y-auto">
          <table class="w-full text-[11px]">
            <thead
              class="bg-slate-50 dark:bg-slate-800 text-[10px] uppercase tracking-wide text-slate-500"
            >
              <tr>
                <th
                  class="text-left px-3 py-2 font-bold border-b border-slate-200 dark:border-slate-700"
                  style="padding-left: 15px"
                >
                  Block giờ
                </th>
                <th
                  class="text-left px-3 py-2 font-bold border-b border-slate-200 dark:border-slate-700"
                >
                  Chương trình đang chiếm
                </th>
                <th
                  class="text-right px-3 py-2 font-bold border-b border-slate-200 dark:border-slate-700"
                >
                  Điểm Sức khỏe
                </th>
                <th
                  class="text-right px-3 py-2 font-bold border-b border-slate-200 dark:border-slate-700 grp-s"
                >
                  Rating nền
                </th>
                <th
                  class="text-right px-3 py-2 font-bold border-b border-slate-200 dark:border-slate-700 grp-s"
                >
                  Reach nền
                </th>
                <th
                  class="text-right px-3 py-2 font-bold border-b border-slate-200 dark:border-slate-700 grp-s"
                >
                  Kế thừa nền
                </th>
                <th
                  class="text-right px-3 py-2 font-bold border-b border-slate-200 dark:border-slate-700 grp-s"
                >
                  Chuyển tiếp nền
                </th>
                <th
                  class="text-right px-3 py-2 font-bold border-b border-slate-200 dark:border-slate-700"
                >
                  Chênh lệch
                </th>
              </tr>
            </thead>
            <tbody
              id="blk-body"
              class="divide-y divide-slate-100 dark:divide-slate-800"
            ></tbody>
          </table>
        </div>
        <div
          class="px-4 py-2.5 border-t border-slate-200 dark:border-slate-800 text-[10px] text-slate-500 leading-relaxed"
        >
          <b>Chênh lệch</b> là khoảng cách điểm giữa chương trình tốt nhất và
          kém nhất từng chiếm block đó. Chênh lệch rộng nghĩa là nội dung quyết
          định nhiều hơn vị trí — đổi chương trình sẽ thay đổi kết quả đáng kể.
        </div>
      </div>

      <div
        class="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden"
      >
        <div class="px-4 py-3 border-b border-slate-200 dark:border-slate-800">
          <h2 class="font-bold text-[13px]">Ai hưởng lợi, ai gánh</h2>
          <p class="text-[10px] text-slate-500 mt-0.5">
            Đối chiếu quy mô khán giả với mức chủ động tìm đến
          </p>
        </div>
        <div class="overflow-x-auto">
          <table class="w-full text-[11px]">
            <thead
              class="bg-slate-50 dark:bg-slate-800 text-[10px] uppercase tracking-wide text-slate-500"
            >
              <tr>
                <th
                  class="text-left px-3 py-2 font-bold"
                  style="padding-left: 15px"
                >
                  Chương trình
                </th>
                <th class="text-left px-3 py-2 font-bold">Block giờ</th>
                <th class="text-left px-3 py-2 font-bold">Thể loại</th>
                <th class="text-right px-3 py-2 font-bold">Điểm Sức khỏe</th>
                <th class="text-right px-3 py-2 font-bold">Ave.Reach</th>
                <th class="text-right px-3 py-2 font-bold">Chủ động</th>
                <th class="text-right px-3 py-2 font-bold">Kế thừa</th>
                <th class="text-left px-3 py-2 font-bold">Đánh giá vị trí</th>
              </tr>
            </thead>
            <tbody
              id="slot-body"
              class="divide-y divide-slate-100 dark:divide-slate-800"
            ></tbody>
          </table>
        </div>
        <div
          class="px-4 py-2.5 border-t border-slate-200 dark:border-slate-800 text-[10px] text-slate-500 leading-relaxed"
        >
          <b class="text-amber-600">Đang hưởng lợi</b> — quy mô cao nhờ vị trí,
          mức chủ động thấp: rủi ro khi lịch phát thay đổi.
          <b class="text-emerald-600 ml-3">Đang gánh</b> — chủ động cao nhưng vị
          trí giới hạn quy mô: cơ hội xem lại khung phát.
        </div>
      </div>

      <div
        class="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-4"
      >
        <h2 class="font-bold text-[13px] mb-1">Chuỗi truyền khán giả</h2>
        <p class="text-[10px] text-slate-500 mb-4">
          Tỷ lệ khán giả ở lại khi chuyển sang block giờ kế tiếp
        </p>
        <div id="chain" class="space-y-2"></div>
      </div>
    </section>

    <!-- ══════ TAB 4 ══════ -->
    <section id="t4" class="tab-content">
      <div
        class="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden"
      >
        <div
          class="px-4 py-3 border-b border-slate-200 dark:border-slate-800 flex items-center gap-3 flex-wrap"
        >
          <h2 class="font-bold text-[13px]">Nhật ký phát sóng</h2>
          <input
            id="dt-search"
            placeholder="Tìm chương trình…"
            class="text-[11px] px-2.5 py-1.5 rounded-md border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 w-52"
          />
          <span class="ml-auto text-[10px] text-slate-400" id="dt-count"></span>
        </div>
        <div class="overflow-x-auto max-h-[640px] overflow-y-auto">
          <table class="w-full text-[11px]">
            <thead
              class="bg-slate-50 dark:bg-slate-800 text-[10px] uppercase tracking-wide text-slate-500"
            >
              <tr>
                <th
                  class="text-left px-3 py-2 font-bold border-b border-slate-200 dark:border-slate-700"
                  style="padding-left: 15px"
                >
                  Ngày
                </th>
                <th
                  class="text-left px-3 py-2 font-bold border-b border-slate-200 dark:border-slate-700"
                >
                  Chương trình
                </th>
                <th
                  class="text-right px-3 py-2 font-bold grp-c border-l border-b border-slate-200 dark:border-slate-700"
                >
                  Điểm Sức khỏe
                </th>
                <th
                  class="text-right px-2 py-2 font-normal grp-c border-b border-slate-200 dark:border-slate-700"
                >
                  HSX
                </th>
                <th
                  class="text-right px-2 py-2 font-normal grp-c border-b border-slate-200 dark:border-slate-700"
                >
                  TLQL
                </th>
                <th
                  class="text-right px-2 py-2 font-normal grp-c border-b border-slate-200 dark:border-slate-700"
                >
                  CĐ
                </th>
                <th
                  class="text-right px-2 py-2 font-normal grp-c border-b border-slate-200 dark:border-slate-700"
                >
                  GC
                </th>
                <th
                  class="text-right px-2 py-2 font-normal grp-c border-b border-slate-200 dark:border-slate-700"
                >
                  Ave.Reach
                </th>
                <th
                  class="text-right px-3 py-2 font-bold grp-s border-l border-b border-slate-200 dark:border-slate-700"
                >
                  Điểm Vị trí
                </th>
                <th
                  class="text-right px-2 py-2 font-normal grp-s border-b border-slate-200 dark:border-slate-700"
                >
                  Rating nền
                </th>
                <th
                  class="text-right px-2 py-2 font-normal grp-s border-b border-slate-200 dark:border-slate-700"
                >
                  KT
                </th>
                <th
                  class="text-right px-2 py-2 font-normal grp-s border-b border-slate-200 dark:border-slate-700"
                >
                  CT
                </th>
                <th
                  class="text-left px-3 py-2 font-bold border-l border-b border-slate-200 dark:border-slate-700"
                >
                  Kênh
                </th>
                <th
                  class="text-left px-3 py-2 font-bold border-b border-slate-200 dark:border-slate-700"
                >
                  Giờ phát
                </th>
              </tr>
            </thead>
            <tbody
              id="dt-body"
              class="divide-y divide-slate-100 dark:divide-slate-800"
            ></tbody>
          </table>
        </div>
      </div>
    </section>

    <!-- ══════ TAB 5 ══════ -->
    <section id="t5" class="tab-content space-y-4 max-w-5xl">
      <div
        class="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-5"
      >
        <h2 class="font-bold text-[15px] mb-2.5">ConteL đo cái gì</h2>
        <p
          class="text-[12px] leading-relaxed text-slate-600 dark:text-slate-300"
        >
          ConteL đánh giá sức khỏe nội dung của chương trình dựa trên
          <b class="text-slate-800 dark:text-slate-100">hành vi xem thực tế</b>
          của khán giả trên nền tảng VTVgo, ghi nhận theo giây, trên toàn bộ
          người dùng đã từng sử dụng nền tảng — không phải mẫu khảo sát suy
          rộng.
        </p>
        <p
          class="text-[12px] leading-relaxed text-slate-600 dark:text-slate-300 mt-3"
        >
          Hệ thống tách kết quả của một chương trình thành hai phần riêng biệt:
          phần đến từ <b class="text-brand-600">bản thân nội dung</b> và phần
          đến từ <b class="text-sky-600">vị trí phát sóng</b>. Hai phần được đo
          và trình bày độc lập, để trả lời được câu hỏi: chương trình này mạnh
          vì nội dung, hay vì được xếp vào khung giờ thuận lợi.
        </p>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-3 mt-4">
          <div
            class="rounded-lg border border-slate-200 dark:border-slate-800 grp-c p-3.5"
          >
            <div class="font-bold text-[12px] text-brand-600 mb-1">
              Giá trị Nội dung · Content Value
            </div>
            <p
              class="text-[11px] leading-relaxed text-slate-600 dark:text-slate-300"
            >
              Nhóm chỉ số đo sức hút và khả năng giữ chân của bản thân chương
              trình. Tổng hợp thành <b>Điểm Sức khỏe Nội dung</b>, thang 0–100,
              càng cao càng tốt.
            </p>
          </div>
          <div
            class="rounded-lg border border-slate-200 dark:border-slate-800 grp-s p-3.5"
          >
            <div class="font-bold text-[12px] text-sky-600 mb-1">
              Vị trí Phát sóng · Slot Baseline
            </div>
            <p
              class="text-[11px] leading-relaxed text-slate-600 dark:text-slate-300"
            >
              Nhóm chỉ số đo lợi thế mà khung giờ mang lại cho bất kỳ chương
              trình nào phát ở đó. Tổng hợp thành <b>Điểm Vị trí Phát sóng</b> —
              chỉ số mô tả vị trí, không phải đánh giá chất lượng.
            </p>
          </div>
        </div>
      </div>

      <div
        class="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden"
      >
        <div
          class="px-5 py-3.5 border-b border-slate-200 dark:border-slate-800 grp-c"
        >
          <h2 class="font-bold text-[14px] text-brand-600">
            Nhóm Giá trị Nội dung
          </h2>
          <p class="text-[11px] text-slate-500 mt-0.5">
            Đo sức hút tự thân và khả năng giữ chân khán giả của chương trình
          </p>
        </div>
        <div class="divide-y divide-slate-100 dark:divide-slate-800">
          <div class="p-5">
            <div class="font-bold text-[13px] mb-1.5">
              Hiệu suất thời gian xem
              <span class="text-slate-400 font-normal"
                >(WTE — Watch Time Efficiency)</span
              >
            </div>
            <p
              class="text-[12px] leading-relaxed text-slate-600 dark:text-slate-300"
            >
              Cho biết khán giả xem được bao nhiêu phần của chương trình so với
              toàn bộ thời lượng phát sóng. Chỉ số cao nghĩa là người xem ở lại
              lâu, không rời đi giữa chừng.
            </p>
            <p class="text-[11px] leading-relaxed text-slate-500 mt-2">
              <b>Ý nghĩa với Ban Chương trình:</b> phản ánh trực tiếp độ hấp dẫn
              của nội dung. Chỉ số này không phụ thuộc chương trình dài hay
              ngắn, nên so sánh được giữa các chương trình khác thời lượng.
            </p>
          </div>
          <div class="p-5">
            <div class="font-bold text-[13px] mb-1.5">
              Tỷ lệ khán giả quay lại
              <span class="text-slate-400 font-normal"
                >(RVR — Return Viewer Rate)</span
              >
            </div>
            <p
              class="text-[12px] leading-relaxed text-slate-600 dark:text-slate-300"
            >
              Cho biết trong số khán giả của lần phát này, bao nhiêu người đã
              từng xem chương trình trong những lần phát gần đây tại cùng kênh
              và cùng khung giờ.
            </p>
            <p class="text-[11px] leading-relaxed text-slate-500 mt-2">
              <b>Ý nghĩa với Ban Chương trình:</b> đo mức độ trung thành. Chương
              trình có tỷ lệ quay lại cao đã hình thành được thói quen xem, giá
              trị dài hạn ổn định hơn.
            </p>
          </div>
          <div class="p-5">
            <div class="font-bold text-[13px] mb-1.5">
              Tỷ lệ khán giả chủ động
              <span class="text-slate-400 font-normal"
                >(OVR — Organic Viewer Rate)</span
              >
            </div>
            <p
              class="text-[12px] leading-relaxed text-slate-600 dark:text-slate-300"
            >
              Cho biết bao nhiêu phần khán giả chủ động mở ứng dụng hoặc chuyển
              kênh để đến với chương trình, thay vì có sẵn từ chương trình phát
              trước đó.
            </p>
            <p class="text-[11px] leading-relaxed text-slate-500 mt-2">
              <b>Ý nghĩa với Ban Chương trình:</b> chỉ số phản ánh sức hút tự
              thân rõ nhất, vì nó đo hành vi trước khi khán giả bắt đầu xem.
              Chương trình có tỷ lệ chủ động thấp nhưng lượng khán giả cao là
              chương trình đang sống nhờ vị trí phát sóng.
            </p>
          </div>
          <div class="p-5">
            <div class="font-bold text-[13px] mb-1.5">
              Tỷ lệ giữ chân trung bình
              <span class="text-slate-400 font-normal"
                >(ARR — Average Retention Rate)</span
              >
            </div>
            <p
              class="text-[12px] leading-relaxed text-slate-600 dark:text-slate-300"
            >
              Cho biết trung bình có bao nhiêu phần khán giả còn ở lại xuyên
              suốt chương trình, tính từ lúc bắt đầu cho tới gần cuối.
            </p>
            <p class="text-[11px] leading-relaxed text-slate-500 mt-2">
              <b>Ý nghĩa với Ban Chương trình:</b> cho biết chương trình mất
              khán giả đều đặn hay mất đột ngột tại một thời điểm. Kết hợp với
              đường giữ chân ở tab Chi tiết chương trình để tìm đúng đoạn nội
              dung cần xem lại.
            </p>
          </div>
          <div class="p-5 bg-slate-50 dark:bg-slate-800/40">
            <div class="font-bold text-[13px] mb-1.5">
              Độ phủ trung bình
              <span class="text-slate-400 font-normal">(Ave.Reach)</span>
              <span
                class="ml-2 text-[10px] px-2 py-0.5 rounded bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300 font-bold align-middle"
                >THAM CHIẾU · KHÔNG TÍNH ĐIỂM</span
              >
            </div>
            <p
              class="text-[12px] leading-relaxed text-slate-600 dark:text-slate-300"
            >
              Cho biết trung bình mỗi lần phát có bao nhiêu người xem khác nhau.
            </p>
            <p class="text-[11px] leading-relaxed text-slate-500 mt-2">
              <b>Vì sao không tính vào Điểm Sức khỏe Nội dung:</b> đây là chỉ số
              quy mô, chịu ảnh hưởng lớn từ khung giờ và độ dài chương trình.
              Đưa vào điểm sẽ khiến chương trình ở khung giờ đông khán giả luôn
              được điểm cao bất kể nội dung, và che mất nhóm chương trình có nội
              dung tốt nhưng đang bị khung phát giới hạn quy mô.
            </p>
          </div>
        </div>
      </div>

      <div
        class="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden"
      >
        <div
          class="px-5 py-3.5 border-b border-slate-200 dark:border-slate-800 grp-s"
        >
          <h2 class="font-bold text-[14px] text-sky-600">
            Nhóm Vị trí Phát sóng
          </h2>
          <p class="text-[11px] text-slate-500 mt-0.5">
            Đo lợi thế mà khung giờ mang lại, độc lập với nội dung phát trong
            khung
          </p>
        </div>
        <div class="divide-y divide-slate-100 dark:divide-slate-800">
          <div class="p-5">
            <div class="font-bold text-[13px] mb-1.5">
              Khán giả nền của khung giờ
              <span class="text-slate-400 font-normal">(Slot Rating)</span>
            </div>
            <p
              class="text-[12px] leading-relaxed text-slate-600 dark:text-slate-300"
            >
              Cho biết mức khán giả trung bình mà bất kỳ chương trình nào phát ở
              khung giờ này cũng có sẵn.
            </p>
            <p class="text-[11px] leading-relaxed text-slate-500 mt-2">
              <b>Ý nghĩa với Ban Chương trình:</b> mức tham chiếu để biết một
              chương trình đang vượt hay thấp hơn mặt bằng chung của khung giờ.
            </p>
          </div>
          <div class="p-5">
            <div class="font-bold text-[13px] mb-1.5">
              Tỷ lệ kế thừa khán giả
              <span class="text-slate-400 font-normal"
                >(Lead-in Retention)</span
              >
            </div>
            <p
              class="text-[12px] leading-relaxed text-slate-600 dark:text-slate-300"
            >
              Cho biết bao nhiêu phần khán giả của chương trình liền trước ở lại
              xem tiếp chương trình này.
            </p>
            <p class="text-[11px] leading-relaxed text-slate-500 mt-2">
              <b>Ý nghĩa với Ban Chương trình:</b> đo lợi thế thừa hưởng từ vị
              trí trong lịch phát. Kế thừa cao đi kèm chủ động thấp là dấu hiệu
              chương trình phụ thuộc lịch phát hơn là nội dung.
            </p>
          </div>
          <div class="p-5">
            <div class="font-bold text-[13px] mb-1.5">
              Tỷ lệ chuyển tiếp khán giả
              <span class="text-slate-400 font-normal"
                >(Lead-out Retention)</span
              >
            </div>
            <p
              class="text-[12px] leading-relaxed text-slate-600 dark:text-slate-300"
            >
              Cho biết bao nhiêu phần khán giả của chương trình này ở lại xem
              tiếp chương trình kế tiếp.
            </p>
            <p class="text-[11px] leading-relaxed text-slate-500 mt-2">
              <b>Ý nghĩa với Ban Chương trình:</b> cho biết chương trình đang
              giữ dòng khán giả cho cả khung giờ hay đang làm đứt mạch. Chỉ số
              quan trọng khi sắp xếp thứ tự chương trình trong một buổi phát.
            </p>
          </div>
        </div>
      </div>

      <div
        class="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden"
      >
        <div
          class="px-5 py-3.5 border-b border-slate-200 dark:border-slate-800"
        >
          <h2 class="font-bold text-[14px]">Cách đọc điểm số</h2>
        </div>
        <div class="p-5 space-y-4">
          <p
            class="text-[12px] leading-relaxed text-slate-600 dark:text-slate-300"
          >
            Mọi chỉ số được quy về thang <b>0–100</b>. Điểm <b>50</b> tương ứng
            với mức trung bình của các chương trình cùng kênh, cùng khung giờ và
            cùng loại ngày trong kỳ chuẩn. Điểm cao hơn 50 nghĩa là chương trình
            đang vượt mặt bằng của chính khung giờ nó đang phát.
          </p>
          <div
            class="overflow-x-auto rounded-lg border border-slate-200 dark:border-slate-800"
          >
            <table class="w-full text-[11px]">
              <thead
                class="bg-slate-50 dark:bg-slate-800 text-[10px] uppercase tracking-wide text-slate-500"
              >
                <tr>
                  <th class="text-left px-3 py-2 font-bold">Trạng thái</th>
                  <th class="text-left px-3 py-2 font-bold">Dải điểm</th>
                  <th class="text-left px-3 py-2 font-bold">Nghĩa là gì</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-slate-100 dark:divide-slate-800">
                <tr>
                  <td class="px-3 py-2.5 font-bold text-emerald-600">
                    Xuất sắc
                  </td>
                  <td class="px-3 py-2.5">≥ 80</td>
                  <td class="px-3 py-2.5 text-slate-600 dark:text-slate-300">
                    Vượt trội rõ rệt so với mặt bằng khung giờ
                  </td>
                </tr>
                <tr>
                  <td class="px-3 py-2.5 font-bold text-emerald-500">
                    Đang tốt
                  </td>
                  <td class="px-3 py-2.5">65 – 79</td>
                  <td class="px-3 py-2.5 text-slate-600 dark:text-slate-300">
                    Trên mặt bằng khung giờ
                  </td>
                </tr>
                <tr>
                  <td class="px-3 py-2.5 font-bold text-slate-500">Ổn định</td>
                  <td class="px-3 py-2.5">35 – 64</td>
                  <td class="px-3 py-2.5 text-slate-600 dark:text-slate-300">
                    Ngang mặt bằng khung giờ
                  </td>
                </tr>
                <tr>
                  <td class="px-3 py-2.5 font-bold text-amber-500">
                    Cần theo dõi
                  </td>
                  <td class="px-3 py-2.5">20 – 34</td>
                  <td class="px-3 py-2.5 text-slate-600 dark:text-slate-300">
                    Dưới mặt bằng khung giờ
                  </td>
                </tr>
                <tr>
                  <td class="px-3 py-2.5 font-bold text-rose-500">Cảnh báo</td>
                  <td class="px-3 py-2.5">&lt; 20</td>
                  <td class="px-3 py-2.5 text-slate-600 dark:text-slate-300">
                    Thấp hơn hẳn mặt bằng khung giờ
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div
            class="rounded-lg border border-amber-200 dark:border-amber-900/50 bg-amber-50 dark:bg-amber-950/30 p-3.5"
          >
            <p
              class="text-[11px] leading-relaxed text-slate-700 dark:text-slate-300"
            >
              <b
                >Điểm số luôn mang tính so sánh trong cùng điều kiện phát
                sóng.</b
              >
              Một chương trình đạt 75 điểm ở khung đêm không có nghĩa là nó thu
              hút nhiều khán giả hơn một chương trình 55 điểm ở khung tối — nó
              có nghĩa là chương trình đó làm tốt hơn so với những gì khung giờ
              của nó thường mang lại. Quy mô khán giả tuyệt đối đọc ở cột
              Ave.Reach.
            </p>
          </div>
        </div>
      </div>

      <div
        class="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden"
      >
        <div
          class="px-5 py-3.5 border-b border-slate-200 dark:border-slate-800"
        >
          <h2 class="font-bold text-[14px]">Hướng dẫn khai thác</h2>
        </div>
        <div
          class="divide-y divide-slate-100 dark:divide-slate-800 text-[12px]"
        >
          <div class="p-5">
            <div class="font-semibold mb-1">Tab 01 — Tổng quan</div>
            <p class="text-slate-600 dark:text-slate-300 leading-relaxed">
              Chọn kênh, khung giờ và loại ngày để thu hẹp phạm vi. Hai bảng bên
              phải liệt kê ngay tên chương trình cần chú ý, không cần soi cả
              bảng lớn.
            </p>
          </div>
          <div class="p-5">
            <div class="font-semibold mb-1">Tab 02 — Chi tiết chương trình</div>
            <p class="text-slate-600 dark:text-slate-300 leading-relaxed">
              Đặt Điểm Sức khỏe Nội dung cạnh Điểm Vị trí Phát sóng để trả lời
              câu hỏi chương trình mạnh tự thân hay đang hưởng lợi từ vị trí.
            </p>
          </div>
          <div class="p-5">
            <div class="font-semibold mb-1">Tab 03 — Chi tiết khung giờ</div>
            <p class="text-slate-600 dark:text-slate-300 leading-relaxed">
              Xem theo block giờ thực tế trên lịch phát. Bản đồ khung sóng cho
              biết mỗi block đang mang lại gì và chương trình nào đang chiếm,
              phục vụ việc sắp xếp lại lịch.
            </p>
          </div>
          <div class="p-5">
            <div class="font-semibold mb-1">Tab 04 — Chi tiết phát sóng</div>
            <p class="text-slate-600 dark:text-slate-300 leading-relaxed">
              Tra cứu số liệu của từng lần phát cụ thể, dùng để đối chiếu khi có
              nghi vấn về một con số.
            </p>
          </div>
        </div>
      </div>

      <div
        class="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden"
      >
        <div
          class="px-5 py-3.5 border-b border-slate-200 dark:border-slate-800"
        >
          <h2 class="font-bold text-[14px]">Tài liệu tham khảo</h2>
          <p class="text-[11px] text-slate-500 mt-0.5">
            Chuẩn mực và hướng dẫn quốc tế về đo lường khán giả, làm cơ sở đối
            chiếu cho phương pháp của ConteL
          </p>
        </div>
        <div class="p-5 space-y-4">
          <div
            class="text-[10px] uppercase tracking-wide text-slate-500 font-bold"
          >
            Chuẩn mực đo lường khán giả
          </div>
          <div class="space-y-3.5">
            <div class="flex gap-3">
              <span
                class="text-[10px] font-bold text-slate-400 w-20 shrink-0 pt-0.5"
                >MRC</span
              >
              <div>
                <div class="text-[12px] font-semibold">
                  Minimum Standards for Media Rating Research
                </div>
                <p class="text-[11px] text-slate-500 leading-relaxed mt-0.5">
                  Media Rating Council — chuẩn nền tảng về tính minh bạch, tính
                  lặp lại và công bố phương pháp trong đo lường khán giả. Cơ sở
                  cho nguyên tắc công bố định nghĩa chỉ số và kỳ chuẩn hóa của
                  ConteL.
                </p>
              </div>
            </div>
            <div class="flex gap-3">
              <span
                class="text-[10px] font-bold text-slate-400 w-20 shrink-0 pt-0.5"
                >MRC / IAB</span
              >
              <div>
                <div class="text-[12px] font-semibold">
                  Digital Video Measurement Guidelines
                </div>
                <p class="text-[11px] text-slate-500 leading-relaxed mt-0.5">
                  Hướng dẫn về đếm lượt xem video số, ngưỡng thời lượng tối
                  thiểu và cách xử lý phiên xem gián đoạn. Liên quan trực tiếp
                  tới quy ước ngưỡng phiên và cách tính thời gian xem.
                </p>
              </div>
            </div>
            <div class="flex gap-3">
              <span
                class="text-[10px] font-bold text-slate-400 w-20 shrink-0 pt-0.5"
                >IAB Tech Lab</span
              >
              <div>
                <div class="text-[12px] font-semibold">
                  Video &amp; Open Measurement specifications
                </div>
                <p class="text-[11px] text-slate-500 leading-relaxed mt-0.5">
                  Đặc tả kỹ thuật về ghi nhận sự kiện phát video và đo lường
                  phía trình phát. Liên quan tới tầng thu thập dữ liệu hành vi
                  theo giây.
                </p>
              </div>
            </div>
            <div class="flex gap-3">
              <span
                class="text-[10px] font-bold text-slate-400 w-20 shrink-0 pt-0.5"
                >WFA / ESOMAR</span
              >
              <div>
                <div class="text-[12px] font-semibold">
                  Global Guidelines on Cross-Media Measurement
                </div>
                <p class="text-[11px] text-slate-500 leading-relaxed mt-0.5">
                  Khung nguyên tắc đo lường khán giả xuyên nền tảng, gồm nguyên
                  tắc khử trùng lặp người xem giữa các thiết bị. Liên quan tới
                  định hướng hợp nhất định danh của hệ thống.
                </p>
              </div>
            </div>
            <div class="flex gap-3">
              <span
                class="text-[10px] font-bold text-slate-400 w-20 shrink-0 pt-0.5"
                >EBU</span
              >
              <div>
                <div class="text-[12px] font-semibold">
                  Khuyến nghị về đo lường khán giả cho đài công
                </div>
                <p class="text-[11px] text-slate-500 leading-relaxed mt-0.5">
                  European Broadcasting Union — tài liệu về đo lường giá trị
                  công chúng và hiệu quả nội dung của các đài truyền hình công
                  lập.
                </p>
              </div>
            </div>
          </div>
          <div
            class="text-[10px] uppercase tracking-wide text-slate-500 font-bold pt-4 border-t border-slate-100 dark:border-slate-800"
          >
            Quy định trong nước
          </div>
          <div class="space-y-3.5">
            <div class="flex gap-3">
              <span
                class="text-[10px] font-bold text-slate-400 w-20 shrink-0 pt-0.5"
                >Nghị định</span
              >
              <div>
                <div class="text-[12px] font-semibold">
                  Nghị định 13/2023/NĐ-CP về bảo vệ dữ liệu cá nhân
                </div>
                <p class="text-[11px] text-slate-500 leading-relaxed mt-0.5">
                  Quy định về thu thập, xử lý và chia sẻ dữ liệu cá nhân. Chi
                  phối phạm vi dữ liệu hành vi được phép sử dụng và cách trình
                  bày kết quả ở mức tổng hợp.
                </p>
              </div>
            </div>
            <div class="flex gap-3">
              <span
                class="text-[10px] font-bold text-slate-400 w-20 shrink-0 pt-0.5"
                >Luật</span
              >
              <div>
                <div class="text-[12px] font-semibold">
                  Luật Quảng cáo và các văn bản hướng dẫn
                </div>
                <p class="text-[11px] text-slate-500 leading-relaxed mt-0.5">
                  Liên quan tới việc sử dụng số liệu khán giả làm cơ sở cho hoạt
                  động quảng cáo trên nền tảng số.
                </p>
              </div>
            </div>
            <div class="flex gap-3">
              <span
                class="text-[10px] font-bold text-slate-400 w-20 shrink-0 pt-0.5"
                >Nội bộ</span
              >
              <div>
                <div class="text-[12px] font-semibold">
                  Quy định quản lý tài khoản và dữ liệu quảng cáo của Đài THVN
                </div>
                <p class="text-[11px] text-slate-500 leading-relaxed mt-0.5">
                  Quy định nội bộ về quyền truy cập và phạm vi sử dụng dữ liệu
                  vận hành quảng cáo trên các nền tảng số của Đài.
                </p>
              </div>
            </div>
          </div>
          <div class="rounded-lg bg-slate-50 dark:bg-slate-800/50 p-3.5">
            <p class="text-[11px] leading-relaxed text-slate-500">
              Danh mục này là cơ sở đối chiếu phương pháp luận, không phải chứng
              nhận tuân thủ. Phiên bản và điều khoản cụ thể của từng tài liệu
              cần được rà soát lại trước khi trích dẫn chính thức.
            </p>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import { onMounted, watch } from "vue";
import { useDashboardData } from "../composables/useDashboardData";

const dashboard = useDashboardData();
console.log(dashboard);

declare const Chart: any;

interface CatalogItem {
  n: string;
  c: string;
  t: string;
  h: number;
  w: string;
  g: string;
  dur: number;
  wte: number;
  rvr: number;
  ovr: number;
  arr: number;
  reach: number;
  li: number;
  lo: number;
  rt: number;
}

type MetricKey = "wte" | "rvr" | "ovr" | "arr" | "reach" | "li" | "lo" | "rt";

interface BenchmarkStat {
  mu: number;
  sd: number;
}

interface BenchmarkGroup {
  n: number;
  stats: Record<MetricKey, BenchmarkStat>;
}

interface RawMetrics {
  wte: number;
  rvr: number;
  ovr: number;
  arr: number;
  reach: number;
  li: number;
  lo: number;
  rt: number;
}

interface CompMetrics {
  wte: number;
  rvr: number;
  ovr: number;
  arr: number;
  rating: number;
  leadin: number;
  leadout: number;
}

interface LogEntry {
  date: string;
  dateObj: Date;
  name: string;
  channel: string;
  timeGroup: string;
  hour: number;
  weekday: string;
  genre: string;
  duration: number;
  raw: RawMetrics;
  comp: CompMetrics;
  rawContent: number;
  rawSlot: number;
  content_score: number;
  slot_score: number;
}

interface AggregatedItem {
  name: string;
  channel: string;
  timeGroup: string;
  hour: number;
  weekday: string;
  genre: string;
  duration: number;
  n: number;
  content_score: number;
  slot_score: number;
  wte: number;
  rvr: number;
  ovr: number;
  arr: number;
  rating: number;
  leadin: number;
  leadout: number;
  reach: number;
  rawOvr: number;
  rawLi: number;
  rawLo: number;
  rawRt: number;
  rawWte: number;
  rawRvr: number;
  rawArr: number;
  sd: number;
}

interface State {
  tab: string;
  days: number | "custom";
  start: string | null;
  end: string | null;
  channel: string;
  time: string;
  weekday: string;
  sort: keyof AggregatedItem;
  asc: boolean;
  prog: string;
  trend: string;
  blkW: number;
  ovS: string;
  dtS: string;
}

onMounted(() => {
  const CHANNELS: string[] = ["VTV1", "VTV2", "VTV3", "VTV6"];
  const TIME_GROUPS: string[] = [
    "Sáng (05–11h)",
    "Trưa (11–13h)",
    "Chiều (13–17h)",
    "Tối (17–23h)",
    "Đêm (23–05h)",
  ];
  const daypart = (h: number): string =>
    h >= 5 && h < 11
      ? TIME_GROUPS[0]
      : h >= 11 && h < 13
        ? TIME_GROUPS[1]
        : h >= 13 && h < 17
          ? TIME_GROUPS[2]
          : h >= 17 && h < 23
            ? TIME_GROUPS[3]
            : TIME_GROUPS[4];
  const WEEKDAYS: string[] = ["Trong tuần", "Cuối tuần"];
  const W_CONTENT = { wte: 0.3, rvr: 0.25, ovr: 0.25, arr: 0.2 } as const;
  const W_SLOT = { rating: 0.5, leadin: 0.3, leadout: 0.2 } as const;
  const hh = (h: number): string => ("0" + h).slice(-2) + ":00";
  const blockLabel = (h: number, w: number): string => {
    const s = Math.floor(h / w) * w;
    return hh(s) + "–" + hh((s + w) % 24 === 0 ? 24 : s + w);
  };

  const CATALOG: CatalogItem[] = [
    {
      n: "Chào buổi sáng",
      c: "VTV1",
      t: "Sáng (06–11h)",
      h: 6,
      w: "Trong tuần",
      g: "Tin tức",
      dur: 60,
      wte: 41,
      rvr: 44,
      ovr: 41,
      arr: 61,
      reach: 118000,
      li: 22,
      lo: 31,
      rt: 1.3,
    },
    {
      n: "Cà phê sáng",
      c: "VTV3",
      t: "Sáng (06–11h)",
      h: 7,
      w: "Trong tuần",
      g: "Giải trí",
      dur: 60,
      wte: 45,
      rvr: 39,
      ovr: 37,
      arr: 64,
      reach: 102000,
      li: 25,
      lo: 34,
      rt: 1.1,
    },
    {
      n: "Vì tầm vóc Việt",
      c: "VTV2",
      t: "Sáng (06–11h)",
      h: 9,
      w: "Trong tuần",
      g: "Sức khỏe",
      dur: 30,
      wte: 44,
      rvr: 36,
      ovr: 35,
      arr: 63,
      reach: 74000,
      li: 26,
      lo: 29,
      rt: 0.8,
    },
    {
      n: "Chuyển động 24h",
      c: "VTV1",
      t: "Trưa (11–14h)",
      h: 11,
      w: "Trong tuần",
      g: "Tin tức",
      dur: 30,
      wte: 46,
      rvr: 34,
      ovr: 38,
      arr: 65,
      reach: 196000,
      li: 29,
      lo: 33,
      rt: 2.3,
    },
    {
      n: "Phim trưa VTV1",
      c: "VTV1",
      t: "",
      h: 12,
      w: "Trong tuần",
      g: "Phim truyện",
      dur: 60,
      wte: 37,
      rvr: 26,
      ovr: 16,
      arr: 54,
      reach: 142000,
      li: 51,
      lo: 24,
      rt: 1.5,
    },
    {
      n: "Khỏe đẹp mỗi ngày",
      c: "VTV2",
      t: "Chiều (14–18h)",
      h: 14,
      w: "Trong tuần",
      g: "Sức khỏe",
      dur: 30,
      wte: 34,
      rvr: 24,
      ovr: 18,
      arr: 51,
      reach: 121000,
      li: 47,
      lo: 12,
      rt: 1.1,
    },
    {
      n: "Đường lên đỉnh Olympia",
      c: "VTV3",
      t: "Chiều (14–18h)",
      h: 15,
      w: "Cuối tuần",
      g: "Giải trí",
      dur: 60,
      wte: 63,
      rvr: 56,
      ovr: 61,
      arr: 78,
      reach: 288000,
      li: 24,
      lo: 44,
      rt: 3.2,
    },
    {
      n: "Việt Nam hôm nay",
      c: "VTV1",
      t: "",
      h: 16,
      w: "Trong tuần",
      g: "Tin tức",
      dur: 50,
      wte: 48,
      rvr: 38,
      ovr: 33,
      arr: 68,
      reach: 186000,
      li: 29,
      lo: 37,
      rt: 2.1,
    },
    {
      n: "Nhịp sống trẻ",
      c: "VTV6",
      t: "Tối (18–23h)",
      h: 18,
      w: "Trong tuần",
      g: "Giải trí",
      dur: 30,
      wte: 51,
      rvr: 42,
      ovr: 48,
      arr: 69,
      reach: 71000,
      li: 29,
      lo: 31,
      rt: 0.7,
    },
    {
      n: "Thời sự 19h",
      c: "VTV1",
      t: "Tối (18–23h)",
      h: 19,
      w: "Trong tuần",
      g: "Tin tức",
      dur: 45,
      wte: 65,
      rvr: 58,
      ovr: 47,
      arr: 82,
      reach: 400000,
      li: 45,
      lo: 70,
      rt: 4.8,
    },
    {
      n: "Thời sự 19h (Cuối tuần)",
      c: "VTV1",
      t: "Tối (18–23h)",
      h: 19,
      w: "Cuối tuần",
      g: "Tin tức",
      dur: 45,
      wte: 62,
      rvr: 54,
      ovr: 44,
      arr: 80,
      reach: 372000,
      li: 41,
      lo: 68,
      rt: 4.5,
    },
    {
      n: "Phim truyện 20h",
      c: "VTV1",
      t: "Tối (18–23h)",
      h: 20,
      w: "Trong tuần",
      g: "Phim truyện",
      dur: 60,
      wte: 52,
      rvr: 44,
      ovr: 19,
      arr: 71,
      reach: 388000,
      li: 61,
      lo: 44,
      rt: 4.4,
    },
    {
      n: "Ai là triệu phú",
      c: "VTV3",
      t: "Tối (18–23h)",
      h: 20,
      w: "Trong tuần",
      g: "Giải trí",
      dur: 60,
      wte: 59,
      rvr: 51,
      ovr: 55,
      arr: 74,
      reach: 310000,
      li: 38,
      lo: 48,
      rt: 3.6,
    },
    {
      n: "Không gian văn hóa",
      c: "VTV2",
      t: "Tối (18–23h)",
      h: 20,
      w: "Cuối tuần",
      g: "Văn hóa",
      dur: 45,
      wte: 53,
      rvr: 41,
      ovr: 46,
      arr: 70,
      reach: 96000,
      li: 31,
      lo: 35,
      rt: 1.0,
    },
    {
      n: "Thể thao cuối tuần",
      c: "VTV6",
      t: "Tối (18–23h)",
      h: 20,
      w: "Cuối tuần",
      g: "Thể thao",
      dur: 60,
      wte: 57,
      rvr: 43,
      ovr: 50,
      arr: 73,
      reach: 134000,
      li: 33,
      lo: 38,
      rt: 1.4,
    },
    {
      n: "Talk show 21h",
      c: "VTV1",
      t: "Tối (18–23h)",
      h: 21,
      w: "Trong tuần",
      g: "Giải trí",
      dur: 45,
      wte: 58,
      rvr: 47,
      ovr: 52,
      arr: 76,
      reach: 149000,
      li: 34,
      lo: 41,
      rt: 1.9,
    },
    {
      n: "Phim truyện VTV3",
      c: "VTV3",
      t: "Tối (18–23h)",
      h: 21,
      w: "Trong tuần",
      g: "Phim truyện",
      dur: 45,
      wte: 55,
      rvr: 46,
      ovr: 33,
      arr: 72,
      reach: 264000,
      li: 52,
      lo: 46,
      rt: 3.0,
    },
    {
      n: "Ký sự Biển Đông",
      c: "VTV2",
      t: "Tối (18–23h)",
      h: 21,
      w: "Trong tuần",
      g: "Văn hóa",
      dur: 20,
      wte: 49,
      rvr: 31,
      ovr: 42,
      arr: 67,
      reach: 41000,
      li: 28,
      lo: 27,
      rt: 0.5,
    },
    {
      n: "Bản tin 22h",
      c: "VTV1",
      t: "Tối (18–23h)",
      h: 22,
      w: "Trong tuần",
      g: "Tin tức",
      dur: 15,
      wte: 61,
      rvr: 49,
      ovr: 44,
      arr: 79,
      reach: 84000,
      li: 27,
      lo: 22,
      rt: 1.2,
    },
    {
      n: "Tâm sự bạn trẻ",
      c: "VTV6",
      t: "Đêm (23–06h)",
      h: 23,
      w: "Trong tuần",
      g: "Giải trí",
      dur: 30,
      wte: 66,
      rvr: 54,
      ovr: 63,
      arr: 81,
      reach: 58000,
      li: 22,
      lo: 26,
      rt: 0.6,
    },
  ];

  CATALOG.forEach((p) => {
    p.t = daypart(p.h);
  });
  const ck = (p: CatalogItem): string => `${p.c}|${p.t}|${p.w}`;
  const BM: Record<string, BenchmarkGroup> = (() => {
    const g: Record<string, CatalogItem[]> = {};
    const F: MetricKey[] = [
      "wte",
      "rvr",
      "ovr",
      "arr",
      "reach",
      "li",
      "lo",
      "rt",
    ];
    const bm: Record<string, BenchmarkGroup> = {};
    const all: Record<MetricKey, BenchmarkStat> = {} as Record<
      MetricKey,
      BenchmarkStat
    >;

    CATALOG.forEach((p) => {
      const key = ck(p);
      (g[key] = g[key] || []).push(p);
    });
    F.forEach((f) => {
      const v = CATALOG.map((p) => p[f]);
      const m = v.reduce((a, b) => a + b, 0) / v.length;
      all[f] = {
        mu: m,
        sd: Math.sqrt(v.reduce((a, b) => a + (b - m) ** 2, 0) / v.length) || 1,
      };
    });
    Object.keys(g).forEach((k) => {
      const n = g[k].length;
      bm[k] = { n, stats: {} as Record<MetricKey, BenchmarkStat> };
      F.forEach((f) => {
        if (n >= 8) {
          const v = g[k].map((p) => p[f]);
          const m = v.reduce((a, b) => a + b, 0) / v.length;
          bm[k].stats[f] = {
            mu: m,
            sd:
              Math.sqrt(v.reduce((a, b) => a + (b - m) ** 2, 0) / v.length) ||
              1,
          };
        } else {
          bm[k].stats[f] = all[f];
        }
      });
    });
    return bm;
  })();

  const clamp = (v: number, a: number, b: number): number =>
    Math.max(a, Math.min(b, v));
  const cS = (r: number, s: BenchmarkStat): number =>
    clamp(50 + ((r - s.mu) / s.sd) * 15, 5, 95);

  let SC: number;
  let SS: number;
  const LOGS: LogEntry[] = [];
  (() => {
    const nz = (): number =>
      (Math.random() + Math.random() + Math.random() - 1.5) * 1.1;
    const td = new Date();
    for (let d = 180; d >= 0; d--) {
      const dt = new Date(td);
      dt.setDate(td.getDate() - d);
      const dw = dt.getDay();
      const wt = dw === 0 || dw === 6 ? "Cuối tuần" : "Trong tuần";
      CATALOG.forEach((p) => {
        if (p.w !== wt || Math.random() > 0.92) return;
        const st = BM[ck(p)].stats;
        const r: RawMetrics = {
          wte: Math.max(5, p.wte + nz() * 4),
          rvr: Math.max(3, p.rvr + nz() * 4),
          ovr: Math.max(2, p.ovr + nz() * 4),
          arr: Math.max(10, p.arr + nz() * 3),
          reach: Math.max(8000, Math.round(p.reach + nz() * p.reach * 0.09)),
          li: Math.max(4, p.li + nz() * 4),
          lo: Math.max(4, p.lo + nz() * 4),
          rt: Math.max(0.1, p.rt + nz() * 0.25),
        };
        const s: CompMetrics = {
          wte: cS(r.wte, st.wte),
          rvr: cS(r.rvr, st.rvr),
          ovr: cS(r.ovr, st.ovr),
          arr: cS(r.arr, st.arr),
          rating: cS(r.rt, st.rt),
          leadin: cS(r.li, st.li),
          leadout: cS(r.lo, st.lo),
        };
        LOGS.push({
          date: dt.toISOString().slice(0, 10),
          dateObj: new Date(dt),
          name: p.n,
          channel: p.c,
          timeGroup: p.t,
          hour: p.h,
          weekday: wt,
          genre: p.g,
          duration: p.dur,
          raw: r,
          comp: s,
          rawContent:
            W_CONTENT.wte * s.wte +
            W_CONTENT.rvr * s.rvr +
            W_CONTENT.ovr * s.ovr +
            W_CONTENT.arr * s.arr,
          rawSlot:
            W_SLOT.rating * s.rating +
            W_SLOT.leadin * s.leadin +
            W_SLOT.leadout * s.leadout,
          content_score: 0,
          slot_score: 0,
        });
      });
    }
    const bp: Record<string, LogEntry[]> = {};
    LOGS.forEach((l) => {
      (bp[l.name] = bp[l.name] || []).push(l);
    });
    const pc: number[] = [];
    const ps: number[] = [];
    Object.values(bp).forEach((a) => {
      pc.push(a.reduce((x, y) => x + y.rawContent, 0) / a.length);
      ps.push(a.reduce((x, y) => x + y.rawSlot, 0) / a.length);
    });
    const sd = (v: number[]): number => {
      const m = v.reduce((a, b) => a + b, 0) / v.length;
      return Math.sqrt(v.reduce((a, b) => a + (b - m) ** 2, 0) / v.length) || 1;
    };
    SC = sd(pc);
    SS = sd(ps);
    LOGS.forEach((l) => {
      l.content_score = +clamp(
        50 + ((l.rawContent - 50) / SC) * 15,
        5,
        95,
      ).toFixed(1);
      l.slot_score = +clamp(50 + ((l.rawSlot - 50) / SS) * 15, 5, 95).toFixed(
        1,
      );
    });
  })();

  const S: State = {
    tab: "t1",
    days: 30,
    start: null,
    end: null,
    channel: "Tất cả",
    time: "Tất cả",
    weekday: "Tất cả",
    sort: "content_score",
    asc: false,
    prog: CATALOG[0].n,
    trend: "content_score",
    blkW: 1,
    ovS: "",
    dtS: "",
  };

  function fLogs(): LogEntry[] {
    let min: Date;
    let max: Date = new Date();
    if (S.days === "custom" && S.start && S.end) {
      min = new Date(S.start);
      max = new Date(S.end);
    } else {
      min = new Date();
      min.setDate(min.getDate() - Number(S.days));
    }
    return LOGS.filter(
      (l) =>
        l.dateObj >= min &&
        l.dateObj <= max &&
        (S.channel === "Tất cả" || l.channel === S.channel) &&
        (S.time === "Tất cả" || l.timeGroup === S.time) &&
        (S.weekday === "Tất cả" || l.weekday === S.weekday),
    );
  }

  function agg(lg: LogEntry[]): AggregatedItem[] {
    const g: Record<string, LogEntry[]> = {};
    lg.forEach((l) => {
      (g[l.name] = g[l.name] || []).push(l);
    });
    return Object.entries(g).map(([name, a]) => {
      const av = (f: (item: LogEntry) => number): number =>
        a.reduce((x, y) => x + f(y), 0) / a.length;
      const cs = a.map((x) => x.content_score);
      const m = cs.reduce((x, y) => x + y, 0) / cs.length;
      return {
        name,
        channel: a[0].channel,
        timeGroup: a[0].timeGroup,
        hour: a[0].hour,
        weekday: a[0].weekday,
        genre: a[0].genre,
        duration: a[0].duration,
        n: a.length,
        content_score: +av((x) => x.content_score).toFixed(1),
        slot_score: +av((x) => x.slot_score).toFixed(1),
        wte: +av((x) => x.comp.wte).toFixed(0),
        rvr: +av((x) => x.comp.rvr).toFixed(0),
        ovr: +av((x) => x.comp.ovr).toFixed(0),
        arr: +av((x) => x.comp.arr).toFixed(0),
        rating: +av((x) => x.comp.rating).toFixed(0),
        leadin: +av((x) => x.comp.leadin).toFixed(0),
        leadout: +av((x) => x.comp.leadout).toFixed(0),
        reach: Math.round(av((x) => x.raw.reach)),
        rawOvr: +av((x) => x.raw.ovr).toFixed(1),
        rawLi: +av((x) => x.raw.li).toFixed(1),
        rawLo: +av((x) => x.raw.lo).toFixed(1),
        rawRt: +av((x) => x.raw.rt).toFixed(2),
        rawWte: +av((x) => x.raw.wte).toFixed(1),
        rawRvr: +av((x) => x.raw.rvr).toFixed(1),
        rawArr: +av((x) => x.raw.arr).toFixed(1),
        sd: +Math.sqrt(
          cs.reduce((x, y) => x + (y - m) ** 2, 0) / cs.length,
        ).toFixed(1),
      };
    });
  }

  const fk = (v: number): string | number =>
    v >= 1000 ? (v / 1000).toFixed(0) + "K" : v;
  function band(v: number): [string, string] {
    if (v >= 80) return ["Xuất sắc", "text-emerald-600"];
    if (v >= 65) return ["Đang tốt", "text-emerald-500"];
    if (v >= 35) return ["Ổn định", "text-slate-500"];
    if (v >= 20) return ["Cần theo dõi", "text-amber-500"];
    return ["Cảnh báo", "text-rose-500"];
  }
  const cc = (v: number): string => band(v)[1];
  const HEX = (v: number): string =>
    v >= 65 ? "#10b981" : v >= 35 ? "#64748b" : v >= 20 ? "#f59e0b" : "#f43f5e";

  function pills(
    el: string,
    items: string[],
    key: "channel" | "time" | "weekday",
  ): void {
    const b = document.getElementById(el);
    if (!b) return;
    b.innerHTML = "";
    ["Tất cả", ...items].forEach((v) => {
      const x = document.createElement("button");
      x.textContent = v;
      x.className =
        "px-2.5 py-1 rounded-md text-[11px] font-medium transition " +
        (S[key] === v
          ? "bg-brand-600 text-white"
          : "bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700");
      x.onclick = () => {
        S[key] = v;
        pills(el, items, key);
        render();
      };
      b.appendChild(x);
    });
  }

  let dc: any;
  let tc: any;
  let pc2: any;
  const isDark = (): boolean =>
    document.documentElement.classList.contains("dark");
  const GRID = (): string =>
    isDark() ? "rgba(148,163,184,.12)" : "rgba(100,116,139,.12)";
  const TICK = (): string => (isDark() ? "#64748b" : "#94a3b8");

  const getContentArray = (): any[] => {
    const val = dashboard?.Chart1113?.value;
    if (Array.isArray(val)) return val;
    if (Array.isArray(val?.data)) return val.data;
    if (Array.isArray(val?.result?.[0]?.data)) return val.result[0].data;
    return [];
  };

  const getSlotArray = (): any[] => {
    const val = dashboard?.Chart1121?.value;
    if (Array.isArray(val)) return val;
    if (Array.isArray(val?.data)) return val.data;
    if (Array.isArray(val?.result?.[0]?.data)) return val.result[0].data;
    return [];
  };

  const normalizeCategory = (cat: any): string => {
    if (!cat || typeof cat !== "string") return "";
    return cat.replace(/[–—]/g, "-").replace(/≥/g, ">=").trim();
  };

  function rDistChart(okList?: AggregatedItem[]): void {
    const bins = ["<20", "20–34", "35–49", "50–64", "65–79", "≥80"];
    const binKeys = ["<20", "20-34", "35-49", "50-64", "65-79", ">=80"];

    let c = [0, 0, 0, 0, 0, 0];
    let s = [0, 0, 0, 0, 0, 0];

    const rawContent = getContentArray();
    const rawSlot = getSlotArray();

    const hasApiContent = rawContent.length > 0;
    const hasApiSlot = rawSlot.length > 0;

    if (hasApiContent || hasApiSlot) {
      const contentCounts: Record<string, number> = {
        "<20": 0,
        "20-34": 0,
        "35-49": 0,
        "50-64": 0,
        "65-79": 0,
        ">=80": 0,
      };
      const slotCounts: Record<string, number> = {
        "<20": 0,
        "20-34": 0,
        "35-49": 0,
        "50-64": 0,
        "65-79": 0,
        ">=80": 0,
      };

      if (hasApiContent) {
        rawContent.forEach((item: any) => {
          const key = normalizeCategory(item.content_score_category);
          const val = Number(
            item["COUNT(content_score_category)"] ??
              item.count ??
              Object.values(item).find((v) => typeof v === "number") ??
              0,
          );
          if (key in contentCounts) contentCounts[key] = val;
        });
      }

      if (hasApiSlot) {
        rawSlot.forEach((item: any) => {
          const key = normalizeCategory(item.slot_score_category);
          const val = Number(
            item["COUNT(slot_score_category)"] ??
              item.count ??
              Object.values(item).find((v) => typeof v === "number") ??
              0,
          );
          if (key in slotCounts) slotCounts[key] = val;
        });
      }

      c = binKeys.map((k) => contentCounts[k]);
      s = binKeys.map((k) => slotCounts[k]);
    } else {
      const bi = (v: number): number =>
        v < 20 ? 0 : v < 35 ? 1 : v < 50 ? 2 : v < 65 ? 3 : v < 80 ? 4 : 5;
      const ok = okList || agg(fLogs()).filter((r) => r.n >= 4);
      ok.forEach((r) => {
        c[bi(r.content_score)]++;
        s[bi(r.slot_score)]++;
      });
    }

    if (dc) dc.destroy();
    const distChartEl = document.getElementById(
      "distChart",
    ) as HTMLCanvasElement | null;
    if (distChartEl) {
      dc = new Chart(distChartEl, {
        type: "bar",
        data: {
          labels: bins,
          datasets: [
            {
              label: "Điểm Sức khỏe Nội dung",
              data: c,
              backgroundColor: "#6366f1",
              borderRadius: 4,
            },
            {
              label: "Điểm Vị trí Phát sóng",
              data: s,
              backgroundColor: "#0ea5e9",
              borderRadius: 4,
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              position: "bottom",
              labels: { boxWidth: 9, font: { size: 10 }, color: TICK() },
            },
          },
          scales: {
            x: {
              grid: { display: false },
              ticks: { font: { size: 10 }, color: TICK() },
            },
            y: {
              grid: { color: GRID() },
              ticks: { font: { size: 10 }, color: TICK(), precision: 0 },
            },
          },
        },
      });
    }
  }

  const getRiskArray = (): any[] => {
    const val = dashboard?.Chart1114?.value;
    if (Array.isArray(val)) return val;
    if (Array.isArray(val?.data)) return val.data;
    if (Array.isArray(val?.result?.[0]?.data)) return val.result[0].data;
    return [];
  };

  function rRisk(fallbackOk?: AggregatedItem[]): void {
    const rawRiskData = getRiskArray();
    const riskCount = document.getElementById("risk-count");
    const riskList = document.getElementById("risk-list");

    if (rawRiskData.length > 0) {
      if (riskCount) riskCount.textContent = String(rawRiskData.length);
      if (riskList) {
        riskList.innerHTML = rawRiskData
          .map((item: any) => {
            const rawScore = Number(
              item["AVG(content_score)"] ??
                item.content_score ??
                Object.values(item).find((v) => typeof v === "number") ??
                0,
            );
            const score = Math.round(rawScore);
            const [lb, cl] = band(score);
            const subtitle = [
              item.channel_name_tvd || item.channel,
              item.time_group || (item.hour != null ? hh(item.hour) : ""),
              item.typo_first || item.genre,
            ]
              .filter(Boolean)
              .join(" · ");

            return `<div class="px-4 py-2.5 flex items-center gap-3">
   <div class="min-w-0 flex-1"><div class="text-[11px] font-semibold truncate">${item.program_name || item.name}</div>
    <div class="text-[10px] text-slate-400 truncate">${subtitle}</div></div>
   <div class="text-right shrink-0"><div class="text-[15px] font-extrabold leading-none ${cl}">${score}</div>
    <div class="text-[9px] ${cl} mt-0.5">${lb}</div></div></div>`;
          })
          .join("");
      }
    } else {
      const ok = fallbackOk || agg(fLogs()).filter((r) => r.n >= 4);
      const risk = ok
        .filter((r) => r.content_score < 35)
        .sort((a, b) => a.content_score - b.content_score);
      if (riskCount) riskCount.textContent = String(risk.length);
      if (riskList) {
        riskList.innerHTML =
          risk
            .map((r) => {
              const [lb, cl] = band(r.content_score);
              return `<div class="px-4 py-2.5 flex items-center gap-3">
   <div class="min-w-0 flex-1"><div class="text-[11px] font-semibold truncate">${r.name}</div>
    <div class="text-[10px] text-slate-400 truncate">${r.channel} · ${hh(r.hour)} · ${r.genre}</div></div>
   <div class="text-right shrink-0"><div class="text-[15px] font-extrabold leading-none ${cl}">${r.content_score}</div>
    <div class="text-[9px] ${cl} mt-0.5">${lb}</div></div></div>`;
            })
            .join("") ||
          '<div class="px-4 py-6 text-[11px] text-slate-400 text-center">Không có chương trình nào dưới ngưỡng</div>';
      }
    }
  }

  function rOv(): void {
    let rows = agg(fLogs()).filter(
      (r) => !S.ovS || r.name.toLowerCase().includes(S.ovS.toLowerCase()),
    );
    const ok = rows.filter((r) => r.n >= 4);
    const few = rows.filter((r) => r.n < 4);
    ok.sort((a, b) => {
      const valA = a[S.sort];
      const valB = b[S.sort];
      if (typeof valA === "number" && typeof valB === "number") {
        return S.asc ? valA - valB : valB - valA;
      }
      return 0;
    });
    few.sort((a, b) => b.n - a.n);
    rows = [...ok, ...few];
    const ovCount = document.getElementById("ov-count");
    if (ovCount) ovCount.textContent = rows.length + " chương trình";

    rRisk(ok);

    const rm: Record<string, number[]> = {};
    ok.forEach((r) => {
      (rm[r.timeGroup] = rm[r.timeGroup] || []).push(r.reach);
    });
    const under = ok
      .filter((r) => {
        const a = rm[r.timeGroup];
        return (
          r.content_score >= 65 &&
          r.reach < (a.reduce((x, y) => x + y, 0) / a.length) * 0.8
        );
      })
      .sort((a, b) => b.content_score - a.content_score);
    const underCount = document.getElementById("under-count");
    if (underCount) underCount.textContent = String(under.length);

    const underList = document.getElementById("under-list");
    if (underList) {
      underList.innerHTML =
        under
          .map(
            (r) => `
  <div class="px-4 py-2.5 flex items-center gap-3">
   <div class="min-w-0 flex-1"><div class="text-[11px] font-semibold truncate">${r.name}</div>
    <div class="text-[10px] text-slate-400 truncate">${r.channel} · ${hh(r.hour)} · Chủ động ${r.rawOvr}%</div></div>
   <div class="text-right shrink-0"><div class="text-[15px] font-extrabold leading-none text-emerald-500">${r.content_score}</div>
    <div class="text-[9px] text-amber-500 mt-0.5">${fk(r.reach)}</div></div></div>`,
          )
          .join("") ||
        '<div class="px-4 py-6 text-[11px] text-slate-400 text-center">Không có chương trình nào trong nhóm này</div>';
    }

    const ovBody = document.getElementById("ov-body");
    if (ovBody) {
      ovBody.innerHTML = rows
        .map((r) => {
          const en = r.n >= 4;
          const [lb, cl] = band(r.content_score);
          return `<tr class="hover:bg-slate-50 dark:hover:bg-slate-800/50">
   <td class="px-3 py-2" style="padding-left:15px"><div class="font-medium">${r.name}</div>
    <div class="text-[10px] text-slate-400">${r.n} lượt phát · ${r.duration}′</div></td>
   <td class="px-3 py-2 text-slate-500">${r.channel}</td>
   <td class="px-3 py-2 whitespace-nowrap"><div class="font-medium text-slate-600 dark:text-slate-300">${blockLabel(r.hour, 1)}</div>
    <div class="text-[10px] text-slate-400">${r.timeGroup.split(" ")[0]}</div></td>
   <td class="px-3 py-2 text-slate-500 text-[10px]">${r.weekday}</td>
   <td class="px-3 py-2 text-right grp-c border-l border-slate-100 dark:border-slate-800">
    ${
      en
        ? `<div class="font-extrabold text-[14px] ${cl}">${r.content_score}</div><div class="text-[9px] ${cl}">${lb}</div>`
        : `<div class="font-extrabold text-[14px] text-slate-300 dark:text-slate-600">—</div><div class="text-[9px] text-slate-400">chưa đủ 4 tuần</div>`
    }</td>
   <td class="px-2 py-2 text-right grp-c text-slate-500">${r.wte}</td>
   <td class="px-2 py-2 text-right grp-c text-slate-500">${r.rvr}</td>
   <td class="px-2 py-2 text-right grp-c text-slate-500">${r.ovr}</td>
   <td class="px-2 py-2 text-right grp-c text-slate-500">${r.arr}</td>
   <td class="px-2 py-2 text-right grp-c font-medium">${fk(r.reach)}</td>
   <td class="px-3 py-2 text-right grp-s border-l border-slate-100 dark:border-slate-800"><span class="font-extrabold text-[14px] text-sky-600">${r.slot_score}</span></td>
   <td class="px-2 py-2 text-right grp-s text-slate-500">${r.rating}</td>
   <td class="px-2 py-2 text-right grp-s text-slate-500">${r.leadin}</td>
   <td class="px-2 py-2 text-right grp-s text-slate-500">${r.leadout}</td></tr>`;
        })
        .join("");
    }

    rDistChart(ok);
  }

  function rProg(): void {
    const rows = agg(fLogs());
    const sel = document.getElementById(
      "prog-select",
    ) as HTMLSelectElement | null;
    if (sel) {
      sel.innerHTML = rows
        .map(
          (r) =>
            `<option ${r.name === S.prog ? "selected" : ""}>${r.name}</option>`,
        )
        .join("");
    }
    const r = rows.find((x) => x.name === S.prog) || rows[0];
    if (!r) return;
    S.prog = r.name;
    const progMeta = document.getElementById("prog-meta");
    if (progMeta) {
      progMeta.textContent = `${r.channel} · ${hh(r.hour)} · ${r.weekday} · ${r.genre} · ${r.duration} phút · ${r.n} lượt phát`;
    }
    const [lb, cl] = band(r.content_score);
    const e = document.getElementById("p-content-score");
    if (e) {
      e.textContent = String(r.content_score);
      e.className =
        "text-[50px] font-extrabold leading-none tracking-tight " + cl;
    }
    const pContentBadge = document.getElementById("p-content-badge");
    if (pContentBadge) {
      pContentBadge.innerHTML = `<span class="px-3 py-1 rounded-full text-[11px] font-bold ${cl} bg-slate-100 dark:bg-slate-800">${lb}</span>`;
    }
    const pSlotScore = document.getElementById("p-slot-score");
    if (pSlotScore) {
      pSlotScore.textContent = String(r.slot_score);
    }

    const bar = (
      n: string,
      a: string,
      sc: number,
      raw: number | string,
      u: string,
      w: string,
      color: string,
    ): string => `<div class="mb-3">
  <div class="flex items-baseline gap-2 mb-1.5">
   <span class="text-[11px] font-medium">${n}</span><span class="text-[10px] text-slate-400">${a}</span>
   ${w ? `<span class="text-[9px] text-slate-400">trọng số ${w}</span>` : ""}
   <span class="ml-auto text-[11px] text-slate-500">${raw}${u}</span>
   <span class="text-[13px] font-extrabold w-8 text-right" style="color:${color}">${sc}</span></div>
  <div class="h-1.5 rounded-full bg-slate-100 dark:bg-slate-800 overflow-hidden"><div class="h-full rounded-full" style="width:${sc}%;background:${color}"></div></div></div>`;

    const pContentMetrics = document.getElementById("p-content-metrics");
    if (pContentMetrics) {
      pContentMetrics.innerHTML =
        bar("Hiệu suất xem", "WTE", r.wte, r.rawWte, "%", "0.30", HEX(r.wte)) +
        bar("Tỷ lệ quay lại", "RVR", r.rvr, r.rawRvr, "%", "0.25", HEX(r.rvr)) +
        bar(
          "Khán giả chủ động",
          "OVR",
          r.ovr,
          r.rawOvr,
          "%",
          "0.25",
          HEX(r.ovr),
        ) +
        bar("Giữ chân", "ARR", r.arr, r.rawArr, "%", "0.20", HEX(r.arr)) +
        `<div class="pt-3 mt-3 border-t border-slate-100 dark:border-slate-800 flex items-baseline gap-2">
    <span class="text-[11px] font-medium">Độ phủ trung bình</span><span class="text-[10px] text-slate-400">Ave.Reach</span>
    <span class="ml-auto text-[17px] font-extrabold">${fk(r.reach)}</span></div>`;
    }

    const pSlotMetrics = document.getElementById("p-slot-metrics");
    if (pSlotMetrics) {
      pSlotMetrics.innerHTML =
        bar(
          "Khán giả nền khung giờ",
          "Slot Rating",
          r.rating,
          r.rawRt,
          "%",
          "0.50",
          "#0ea5e9",
        ) +
        bar(
          "Kế thừa khán giả",
          "Lead-in",
          r.leadin,
          r.rawLi,
          "%",
          "0.30",
          "#0ea5e9",
        ) +
        bar(
          "Chuyển tiếp khán giả",
          "Lead-out",
          r.leadout,
          r.rawLo,
          "%",
          "0.20",
          "#0ea5e9",
        );
    }

    const hp = r.leadin > 60;
    const og = r.ovr > 60;
    const pVerdict = document.getElementById("p-verdict");
    if (pVerdict) {
      pVerdict.innerHTML =
        og && !hp
          ? `Khán giả chủ yếu <b>chủ động tìm đến</b> chương trình. Quy mô hiện tại phản ánh giới hạn của khung phát, không phản ánh sức hút nội dung.`
          : hp && !og
            ? `Chương trình đang <b>hưởng lợi rõ từ vị trí</b>: kế thừa nhiều khán giả từ chương trình liền trước trong khi mức chủ động thấp. Cần lưu ý nếu lịch phát thay đổi.`
            : `Chương trình vừa nhận hỗ trợ từ khung giờ, vừa có mức chủ động ở mặt bằng chung. Điểm số đạt được nằm trên nền lợi thế của vị trí.`;
    }

    const lg = fLogs()
      .filter((l) => l.name === S.prog)
      .sort((a, b) => a.dateObj.getTime() - b.dateObj.getTime());
    const bw: Record<string, LogEntry[]> = {};
    lg.forEach((l) => {
      const d = new Date(l.dateObj);
      d.setDate(d.getDate() - ((d.getDay() + 6) % 7));
      const k = d.toISOString().slice(0, 10);
      (bw[k] = bw[k] || []).push(l);
    });
    const ks = Object.keys(bw).sort();
    const pk = (l: LogEntry): number => {
      if (S.trend === "content_score") return l.content_score;
      if (S.trend === "slot_score") return l.slot_score;
      if (S.trend === "reach") return l.raw.reach;
      const metricKey = S.trend as keyof CompMetrics;
      return l.comp[metricKey] ?? 0;
    };
    const vs = ks.map(
      (k) => +(bw[k].reduce((a, x) => a + pk(x), 0) / bw[k].length).toFixed(1),
    );
    if (tc) tc.destroy();
    const trendChartEl = document.getElementById(
      "trendChart",
    ) as HTMLCanvasElement | null;
    if (trendChartEl) {
      tc = new Chart(trendChartEl, {
        type: "line",
        data: {
          labels: ks.map((k) => k.slice(5)),
          datasets: [
            {
              data: vs,
              borderColor: "#6366f1",
              backgroundColor: "rgba(99,102,241,.08)",
              fill: true,
              tension: 0.35,
              pointRadius: 2.2,
              borderWidth: 2,
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: { legend: { display: false } },
          scales: {
            x: {
              grid: { display: false },
              ticks: { font: { size: 9 }, color: TICK() },
            },
            y: {
              grid: { color: GRID() },
              ticks: { font: { size: 9 }, color: TICK() },
            },
          },
        },
      });
    }

    const pts: number[] = [];
    const ref: number[] = [];
    const dk = 1 - r.rawArr / 100;
    for (let i = 0; i <= 20; i++) {
      const t = i / 20;
      pts.push(+(100 * Math.exp(-dk * t * 2.2)).toFixed(1));
      ref.push(+(100 * Math.exp(-0.55 * t * 2.2)).toFixed(1));
    }
    if (pc2) pc2.destroy();
    const dropChartEl = document.getElementById(
      "dropChart",
    ) as HTMLCanvasElement | null;
    if (dropChartEl) {
      pc2 = new Chart(dropChartEl, {
        type: "line",
        data: {
          labels: pts.map((_, i) => Math.round((i / 20) * r.duration) + "′"),
          datasets: [
            {
              label: S.prog,
              data: pts,
              borderColor: "#6366f1",
              backgroundColor: "rgba(99,102,241,.08)",
              fill: true,
              tension: 0.3,
              pointRadius: 0,
              borderWidth: 2,
            },
            {
              label: "TB khung giờ",
              data: ref,
              borderColor: "#94a3b8",
              borderDash: [5, 4],
              fill: false,
              tension: 0.3,
              pointRadius: 0,
              borderWidth: 1.5,
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              position: "bottom",
              labels: { boxWidth: 9, font: { size: 10 }, color: TICK() },
            },
          },
          scales: {
            x: {
              grid: { display: false },
              ticks: { font: { size: 9 }, color: TICK(), maxTicksLimit: 8 },
            },
            y: {
              grid: { color: GRID() },
              min: 0,
              max: 105,
              ticks: {
                font: { size: 9 },
                color: TICK(),
                callback: (v: number) => v + "%",
              },
            },
          },
        },
      });
    }
  }

  function rSlot(): void {
    const rows = agg(fLogs());
    const W = S.blkW;
    const g: Record<string, AggregatedItem[]> = {};
    rows.forEach((r) => {
      const k = blockLabel(r.hour, W);
      (g[k] = g[k] || []).push(r);
    });
    const ks = Object.keys(g).sort((a, b) => parseInt(a) - parseInt(b));
    const blkBody = document.getElementById("blk-body");
    if (blkBody) {
      blkBody.innerHTML = ks
        .map((k) => {
          const a = g[k].sort((x, y) => y.content_score - x.content_score);
          const av = (f: (item: AggregatedItem) => number): number =>
            a.reduce((x, y) => x + f(y), 0) / a.length;
          const cs = a.map((x) => x.content_score);
          const sp = Math.max(...cs) - Math.min(...cs);
          return `<tr class="hover:bg-slate-50 dark:hover:bg-slate-800/50">
   <td class="px-3 py-2.5 font-semibold whitespace-nowrap" style="padding-left:15px">${k}</td>
   <td class="px-3 py-2.5">${a
     .map(
       (x) => `<div class="flex items-center gap-2 py-0.5">
     <span class="text-[11px]">${x.name}</span><span class="text-[9px] text-slate-400">${x.channel}</span></div>`,
     )
     .join("")}</td>
   <td class="px-3 py-2.5 text-right">${a.map((x) => `<div class="py-0.5 text-[11px] font-bold ${cc(x.content_score)}">${x.n >= 4 ? x.content_score : "—"}</div>`).join("")}</td>
   <td class="px-3 py-2.5 text-right grp-s font-medium">${av((x) => x.rawRt).toFixed(2)}%</td>
   <td class="px-3 py-2.5 text-right grp-s font-medium">${fk(Math.round(av((x) => x.reach)))}</td>
   <td class="px-3 py-2.5 text-right grp-s">${av((x) => x.rawLi).toFixed(0)}%</td>
   <td class="px-3 py-2.5 text-right grp-s">${av((x) => x.rawLo).toFixed(0)}%</td>
   <td class="px-3 py-2.5 text-right font-bold ${sp > 25 ? "text-emerald-600" : "text-slate-400"}">${a.length > 1 ? sp.toFixed(0) : "—"}</td></tr>`;
        })
        .join("");
    }

    const rm: Record<string, number[]> = {};
    const om: Record<string, number[]> = {};
    rows.forEach((r) => {
      const k = blockLabel(r.hour, W);
      (rm[k] = rm[k] || []).push(r.reach);
      (om[k] = om[k] || []).push(r.rawOvr);
    });
    const sc = rows
      .map((r) => {
        const k = blockLabel(r.hour, W);
        const rr = r.reach / (rm[k].reduce((a, b) => a + b, 0) / rm[k].length);
        const o = r.rawOvr / (om[k].reduce((a, b) => a + b, 0) / om[k].length);
        let v: string;
        let c: string;
        if (rr >= 1 && o < 0.85) {
          v = "Đang hưởng lợi";
          c = "text-amber-600 bg-amber-50 dark:bg-amber-950/30";
        } else if (rr < 0.9 && o > 1.1) {
          v = "Đang gánh";
          c = "text-emerald-600 bg-emerald-50 dark:bg-emerald-950/30";
        } else {
          v = "Trung tính";
          c = "text-slate-500 bg-slate-100 dark:bg-slate-800";
        }
        return { ...r, blk: k, rr, o, v, c, gap: o - rr };
      })
      .sort((a, b) => a.gap - b.gap);

    const slotBody = document.getElementById("slot-body");
    if (slotBody) {
      slotBody.innerHTML = sc
        .map(
          (r) => `<tr class="hover:bg-slate-50 dark:hover:bg-slate-800/50">
  <td class="px-3 py-2.5" style="padding-left:15px"><div class="font-medium">${r.name}</div><div class="text-[10px] text-slate-400">${r.channel}</div></td>
  <td class="px-3 py-2.5 font-semibold whitespace-nowrap">${r.blk}</td>
  <td class="px-3 py-2.5 text-slate-500">${r.genre}</td>
  <td class="px-3 py-2.5 text-right font-extrabold ${cc(r.content_score)}">${r.content_score}</td>
  <td class="px-3 py-2.5 text-right"><div class="font-medium">${fk(r.reach)}</div><div class="text-[10px] ${r.rr >= 1 ? "text-emerald-600" : "text-amber-600"}">${((r.rr - 1) * 100).toFixed(0)}% vs nền</div></td>
  <td class="px-3 py-2.5 text-right"><div class="font-medium">${r.rawOvr}%</div><div class="text-[10px] ${r.o >= 1 ? "text-emerald-600" : "text-amber-600"}">${((r.o - 1) * 100).toFixed(0)}% vs nền</div></td>
  <td class="px-3 py-2.5 text-right text-slate-500">${r.rawLi}%</td>
  <td class="px-3 py-2.5"><span class="px-2 py-0.5 rounded text-[10px] font-bold ${r.c}">${r.v}</span></td></tr>`,
        )
        .join("");
    }

    const chr = [...rows].sort((a, b) => a.hour - b.hour);
    const chainEl = document.getElementById("chain");
    if (chainEl) {
      chainEl.innerHTML =
        chr
          .map((r, i) => {
            const nx = chr[i + 1];
            if (!nx || nx.hour === r.hour) return "";
            const p = r.rawLo;
            const cl =
              p > 50
                ? "text-emerald-600"
                : p > 35
                  ? "text-amber-500"
                  : "text-slate-400";
            const bg =
              p > 50
                ? "bg-emerald-500"
                : p > 35
                  ? "bg-amber-500"
                  : "bg-slate-300";
            return `<div class="grid grid-cols-[1fr_88px_1fr] items-center gap-3">
   <div class="rounded-lg border border-slate-200 dark:border-slate-800 p-2.5">
    <div class="text-[11px] font-medium">${hh(r.hour)} · ${r.name}</div>
    <div class="text-[10px] text-slate-400 mt-0.5">Sức khỏe ${r.content_score} · Reach ${fk(r.reach)} · Chủ động ${r.rawOvr}%</div></div>
   <div class="text-center"><div class="text-[15px] font-extrabold ${cl}">${p}%</div>
    <div class="h-0.5 rounded ${bg} my-1"></div><div class="text-[9px] uppercase tracking-wide text-slate-400">ở lại</div></div>
   <div class="rounded-lg border border-slate-200 dark:border-slate-800 p-2.5">
    <div class="text-[11px] font-medium">${hh(nx.hour)} · ${nx.name}</div>
    <div class="text-[10px] text-slate-400 mt-0.5">Sức khỏe ${nx.content_score} · Reach ${fk(nx.reach)} · Chủ động ${nx.rawOvr}%</div></div>
  </div>`;
          })
          .join("") ||
        '<div class="text-[11px] text-slate-400">Không đủ dữ liệu cho bộ lọc hiện tại</div>';
    }
  }

  function rDet(): void {
    let lg = fLogs();
    if (S.dtS) {
      lg = lg.filter((l) => l.name.toLowerCase().includes(S.dtS.toLowerCase()));
    }
    lg = lg
      .sort((a, b) => b.dateObj.getTime() - a.dateObj.getTime())
      .slice(0, 400);
    const dtCount = document.getElementById("dt-count");
    if (dtCount) dtCount.textContent = lg.length + " lượt phát";

    const dtBody = document.getElementById("dt-body");
    if (dtBody) {
      dtBody.innerHTML = lg
        .map(
          (l) => `<tr class="hover:bg-slate-50 dark:hover:bg-slate-800/50">
  <td class="px-3 py-2 text-slate-500" style="padding-left:15px">${l.date}</td><td class="px-3 py-2 font-medium">${l.name}</td>
  <td class="px-3 py-2 text-right grp-c border-l border-slate-100 dark:border-slate-800 font-extrabold ${cc(l.content_score)}">${l.content_score}</td>
  <td class="px-2 py-2 text-right grp-c text-slate-500">${l.comp.wte.toFixed(0)}</td>
  <td class="px-2 py-2 text-right grp-c text-slate-500">${l.comp.rvr.toFixed(0)}</td>
  <td class="px-2 py-2 text-right grp-c text-slate-500">${l.comp.ovr.toFixed(0)}</td>
  <td class="px-2 py-2 text-right grp-c text-slate-500">${l.comp.arr.toFixed(0)}</td>
  <td class="px-2 py-2 text-right grp-c">${fk(l.raw.reach)}</td>
  <td class="px-3 py-2 text-right grp-s border-l border-slate-100 dark:border-slate-800 font-extrabold text-sky-600">${l.slot_score}</td>
  <td class="px-2 py-2 text-right grp-s text-slate-500">${l.comp.rating.toFixed(0)}</td>
  <td class="px-2 py-2 text-right grp-s text-slate-500">${l.comp.leadin.toFixed(0)}</td>
  <td class="px-2 py-2 text-right grp-s text-slate-500">${l.comp.leadout.toFixed(0)}</td>
  <td class="px-3 py-2 border-l border-slate-100 dark:border-slate-800 text-slate-500">${l.channel}</td>
  <td class="px-3 py-2 text-slate-500">${blockLabel(l.hour, S.blkW)}</td></tr>`,
        )
        .join("");
    }
  }

  function rLab(): void {
    let min: Date;
    let max: Date = new Date();
    if (S.days === "custom" && S.start && S.end) {
      min = new Date(S.start);
      max = new Date(S.end);
    } else {
      min = new Date();
      min.setDate(min.getDate() - Number(S.days));
    }
    const f = (d: Date): string =>
      ("0" + d.getDate()).slice(-2) +
      "/" +
      ("0" + (d.getMonth() + 1)).slice(-2);
    const rangeLabel = document.getElementById("range-label");
    if (rangeLabel) {
      rangeLabel.textContent = f(min) + " – " + f(max);
    }
  }

  function render(): void {
    rLab();
    if (S.tab === "t1") rOv();
    if (S.tab === "t2") rProg();
    if (S.tab === "t3") rSlot();
    if (S.tab === "t4") rDet();
  }

  function sortBy(f: string): void {
    const key = f as keyof AggregatedItem;
    if (S.sort === key) {
      S.asc = !S.asc;
    } else {
      S.sort = key;
      S.asc = false;
    }
    rOv();
  }
  (window as any).sortBy = sortBy;

  document.querySelectorAll<HTMLElement>(".nav-tab").forEach(
    (b) =>
      (b.onclick = () => {
        document.querySelectorAll<HTMLElement>(".nav-tab").forEach((x) => {
          x.className = x.className.replace(
            "border-brand-600 text-brand-600",
            "border-transparent text-slate-500",
          );
        });
        b.className = b.className.replace(
          "border-transparent text-slate-500",
          "border-brand-600 text-brand-600",
        );
        document
          .querySelectorAll(".tab-content")
          .forEach((s) => s.classList.remove("active"));
        const tabId = b.dataset.tab;
        if (tabId) {
          const tabEl = document.getElementById(tabId);
          if (tabEl) tabEl.classList.add("active");
          S.tab = tabId;
        }
        const fbar = document.getElementById("fbar");
        if (fbar) {
          fbar.style.display = S.tab === "t5" ? "none" : "flex";
        }
        render();
      }),
  );

  document.querySelectorAll<HTMLButtonElement>("#date-pills button").forEach(
    (b) =>
      (b.onclick = () => {
        document
          .querySelectorAll<HTMLButtonElement>("#date-pills button")
          .forEach(
            (x) =>
              (x.className =
                "px-3 py-1.5 rounded-md text-[11px] font-semibold text-slate-500"),
          );
        b.className =
          "px-3 py-1.5 rounded-md text-[11px] font-semibold bg-white dark:bg-slate-700 shadow-sm";
        S.days =
          b.dataset.days === "custom" ? "custom" : Number(b.dataset.days);
        const customRange = document.getElementById("custom-range");
        if (customRange) {
          customRange.className =
            S.days === "custom"
              ? "flex items-center gap-1.5"
              : "hidden items-center gap-1.5";
        }
        render();
      }),
  );

  document.querySelectorAll<HTMLButtonElement>("#blk-res button").forEach(
    (b) =>
      (b.onclick = () => {
        document
          .querySelectorAll<HTMLButtonElement>("#blk-res button")
          .forEach(
            (x) =>
              (x.className =
                "px-3 py-1.5 rounded-md text-[11px] font-semibold text-slate-500"),
          );
        b.className =
          "px-3 py-1.5 rounded-md text-[11px] font-semibold bg-white dark:bg-slate-700 shadow-sm";
        S.blkW = Number(b.dataset.w);
        rSlot();
      }),
  );

  const dStart = document.getElementById("d-start") as HTMLInputElement | null;
  if (dStart) {
    dStart.onchange = (e) => {
      S.start = (e.target as HTMLInputElement).value;
      render();
    };
  }

  const dEnd = document.getElementById("d-end") as HTMLInputElement | null;
  if (dEnd) {
    dEnd.onchange = (e) => {
      S.end = (e.target as HTMLInputElement).value;
      render();
    };
  }

  const ovSearch = document.getElementById(
    "ov-search",
  ) as HTMLInputElement | null;
  if (ovSearch) {
    ovSearch.oninput = (e) => {
      S.ovS = (e.target as HTMLInputElement).value;
      rOv();
    };
  }

  const dtSearch = document.getElementById(
    "dt-search",
  ) as HTMLInputElement | null;
  if (dtSearch) {
    dtSearch.oninput = (e) => {
      S.dtS = (e.target as HTMLInputElement).value;
      rDet();
    };
  }

  const progSelect = document.getElementById(
    "prog-select",
  ) as HTMLSelectElement | null;
  if (progSelect) {
    progSelect.onchange = (e) => {
      S.prog = (e.target as HTMLSelectElement).value;
      rProg();
    };
  }

  const trendMetric = document.getElementById(
    "trend-metric",
  ) as HTMLSelectElement | null;
  if (trendMetric) {
    trendMetric.onchange = (e) => {
      S.trend = (e.target as HTMLSelectElement).value;
      rProg();
    };
  }

  const themeBtn = document.getElementById("theme-btn");
  if (themeBtn) {
    themeBtn.onclick = () => {
      document.documentElement.classList.toggle("dark");
      render();
    };
  }

  pills("f-channel", CHANNELS, "channel");
  pills("f-time", TIME_GROUPS, "time");
  pills("f-weekday", WEEKDAYS, "weekday");
  render();

  watch(
    [
      () => dashboard?.Chart1113?.value,
      () => dashboard?.Chart1121?.value,
      () => dashboard?.Chart1114?.value,
    ],
    () => {
      if (S.tab === "t1") {
        rDistChart();
        rRisk();
      }
    },
    { deep: true },
  );
});
</script>
