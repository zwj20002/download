<template>
  <div class="container">
    <div class="content">
      <div class="bg-top">
        <img src="../assets/bg-top.png" alt="" />
      </div>
      <div class="logo-bg">
        <div class="logo"><img src="/logo.png" alt="" /></div>
      </div>
      <div class="tilte-count" style="position: relative; z-index: 1">
        <div class="title">{{ t("project") }}</div>
        <div class="entitle">Light Year Service Center</div>
      </div>
      <div class="download">
        <div class="change-language" @click="toggleLanguage">
          {{ currentLang === "en" ? "中文" : "EN" }}
          <div class="icons"><img src="../assets/change.svg" alt="" /></div>
        </div>
        <div class="icon">
          <img src="../assets/download.png" alt="" />
        </div>
        <div class="download-font">{{ t("download") }}</div>
        <div class="discript">
          <div class="sub">{{ t("desc_one") }}</div>
          <div class="sub">{{ t("desc_two") }}</div>
          <div class="sub">{{ t("desc_three") }}</div>
        </div>
        <div class="down-type">
          <div class="down-component" @click="goDownload('ios')">
            {{ t("ios_download") }}
          </div>
          <div class="down-component" @click="goDownload('android')">
            {{ t("android_download") }}
          </div>
          <div class="down-component" @click="goDownload('android_32')">
            {{ t("android_32bit_download") }}
          </div>
          <div class="down-component" @click="goDownload('google')">
            {{ t("android_google_play_download") }}
          </div>
        </div>
      </div>
      <div class="join">{{ t("join") }}</div>
      <div class="join-group" @click="getLink">
        <div class="lf">
          <div class="font">{{ t("group") }}</div>
          <div class="icon"><img src="../assets/qq.png" alt="" /></div>
        </div>
        <div class="rg"><img src="../assets/next.svg" alt="" /></div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { t, currentLang, setLanguage } from "../utils/language";

const toggleLanguage = () => {
  setLanguage(currentLang.value === "zh" ? "en" : "zh");
};

// 获取q群链接
const getLink = () => {
  fetch("https://api-internal.lightyeartech.cn/app/getInfo")
    .then((res) => res.json())
    .then((data) => {
      goQQGroup(data.data.qqUrl);
    })
    .catch((err) => {
      console.log(err);
    });
};

const goQQGroup = (url) => {
  window.location.href = url;
};

const goDownload = (type) => {
  switch (type) {
    case "ios":
      window.location.href =
        "https://apps.apple.com/us/app/%E7%B1%81%E7%89%B9%E6%98%93%E8%80%B3/id6463790725";
      break;
    case "android":
      window.location.href =
        "https://nb1-cdn.lightyeartech.cn/app/LightYear-release.apk";
      break;
    case "android_32":
      window.location.href =
        "https://nb1-cdn.lightyeartech.cn/app/LightYear-release_32.apk";
      break;
    case "google":
      window.location.href =
        "https://play.google.com/store/apps/details?id=cn.lightyeartech.android";
      break;
    default:
      break;
  }
};
</script>

<style scoped lang="scss">
@media (prefers-color-scheme: dark) {
  .container {
    background-color: #121212 !important;
  }

  .content {
    background: #1e1e1e !important;
    color: #e0e0e0;

    .bg-top {
      display: none;
    }

    .title,
    .entitle {
      color: #ffffff;
    }

    .download {
      background-color: #2d2d2d !important;
      border: 1px solid #3d3d3d;
      .download-font {
        color: #ffffff !important;
      }

      .discript {
        color: #9e9e9e !important;
      }

      .down-component {
        background-color: #3a3a3a !important;
        color: #ff8a65 !important; // 橙色变体，比原来的浅
        border: 1px solid #4a4a4a;
      }
    }

    .join {
      color: #9e9e9e !important;
    }

    .join-group {
      background-color: #2d2d2d !important;
      border: 1px solid #3d3d3d;
      .font {
        color: #e0e0e0 !important;
      }

      .rg img {
        filter: invert(80%); // 使箭头图标在深色模式下可见
      }
    }

    .change-language {
      background-color: #3a3a3a !important;
      color: #e0e0e0 !important;
    }
  }
  .logo img {
    filter: invert(1); /* 直接反相 */
  }
}
@media (min-width: 501px) {
  .container .content {
    max-width: 375px;
  }
}

.container {
  // display: flex;
  // justify-content: center;
  background-color: #f0f0f0;
  .content {
    padding-top: 100px;
    position: relative;
    min-height: 100vh;
    padding-bottom: 50px;
    margin: 0 auto;
    box-shadow: 0 0 10px #0000001a;
    background: linear-gradient(
      -90deg,
      rgba(243, 244, 246, 1) 0%,
      rgba(242, 233, 225, 1) 100%
    );
    .bg-top {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: auto; /* 添加高度自适应 */
      overflow: hidden; /* 防止溢出 */
    }

    .bg-top img {
      width: 100%;
      height: auto; /* 保持宽高比 */
      object-fit: cover; /* 确保图片覆盖但不失真 */
      object-position: top; /* 对齐顶部 */
    }
    .logo-bg {
      position: relative;
      display: flex;
      justify-content: center;
      z-index: 1;
      .logo {
        width: 85px;
        height: 40px;
        img {
          width: 100%;
          height: 100%;
        }
      }
    }

    .title {
      text-align: center;
      font-size: 24px;
      margin-top: 20px;
    }

    .entitle {
      text-align: center;
      font-size: 14px;
      margin-top: 10px;
    }

    .download {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 330px;
      background-color: #fff;
      border-radius: 15px;
      margin: 0 auto;
      margin-top: 45px;
      padding: 30px 10px;
      position: relative;
      z-index: 1;
      .change-language {
        display: flex;
        align-items: center;
        position: absolute;
        top: -250px;
        right: 0px;
        font-size: 12px;
        color: #fff;
        border-radius: 5px;
        padding: 5px 10px;
        background-color: #FCBB8D;
        cursor: pointer;
        .icons {
          display: flex;
          justify-content: center;
          align-items: center;
          img {
            width: 15px;
            height: 18px;
            margin-left: 3px;
          }
        }
      }
      .icon {
        width: 45px;
        height: 47px;

        img {
          width: 100%;
          height: 100%;
        }
      }

      .download-font {
        font-size: 20px;
        margin-top: 15px;
        text-align: center;
      }

      .discript {
        font-size: 12px;
        color: #bcbcbc;
        margin-top: 15px;

        .sub {
          text-align: center;
        }
      }

      .down-type {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        margin-top: 20px;
        .down-component {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 150px;
          background-color: #fef1e7;
          border-radius: 10px;
          color: #ff6800;
          margin-bottom: 10px;
          text-align: center;
          padding: 10px 0px;
          font-size: 14px;
          padding: 10px 10px;
          white-space: pre-line;
          cursor: pointer;
        }
      }
    }

    .join {
      width: 330px;
      text-align: center;
      font-size: 12px;
      color: #bcbcbc;
      margin: 0 auto;
      margin-top: 20px;
    }

    .join-group {
      display: flex;
      justify-content: space-between;
      width: 330px;
      background-color: #fff;
      margin: 0 auto;
      border-radius: 10px;
      padding: 20px;
      margin-top: 20px;
      cursor: pointer;
      .lf {
        display: flex;
        align-items: center;

        .icon {
          width: 20px;
          height: 20px;
          margin-left: 5px;

          img {
            width: 100%;
            height: 100%;
          }
        }
      }

      .rg {
        width: 17px;
        height: 14px;

        img {
          width: 100%;
          height: 100%;
        }
      }
    }
  }
}
</style>
