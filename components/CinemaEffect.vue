<!-- <template lang="pug">
.outer-scratch
    .inner-scratch
        .grain
</template>

<style>
.outer-scratch:after, .inner-scratch:after {
  content: '';
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  /* padding-left: 100px; */
  opacity: .08;
  background: url('@/assets/scratch.png') repeat center center;
  animation: scratch 1.6s steps(1) infinite;
}

.inner-scratch:after {
  left: 30%;
  animation: inner-scratch 2s infinite;
}

.grain:after {
  content: '';
  width: 100%;
  height: 100%;
  position: absolute;
  /* top: -5%;
  left: -5%; */
  opacity: .11;
  background: url('@/assets/grain.jpg') repeat center center;
  animation: grain 1.7s steps(1) infinite;
}

@keyframes grain {
  0%, 100% {
    transform: translate(0, 0, 0);
  }

  10% {
    transform: translate(-1%, -1%);
  }

  20% {
    transform: translate(1%, 1%);
  }

  30% {
    transform: translate(-2%, -2%);
  }

  40% {
    transform: translate(3%, 3%);
  }

  50% {
    transform: translate(-3%, -3%);
  }

  60% {
    transform: translate(4%, 4%);
  }

  70% {
    transform: translate(-4%, -4%);
  }

  80% {
    transform: translate(2%, 2%);
  }

  90% {
    transform: translate(-3%, -3%);
  }
}

@keyframes scratch {
  0%, 100% {
    transform: translateX(0);
    opacity: 0.075;
  }

  10% {
    transform: translateX(-1%);
  }

  20% {
    transform: translateX(1%);
  }

  30% {
    transform: translateX(-2%);
        opacity: 0.09;
  }

  40% {
    transform: translateX(3%);
  }

  50% {
    transform: translateX(-3%);
    opacity: 0.05;
  }

  60% {
    transform: translateX(8%);
  }

  70% {
    transform: translateX(-3%);
  }

  80% {
    transform: translateX(10%);
    opacity: 0.02;
  }

  90% {
    transform: translateX(-2%);
  }
}

@keyframes inner-scratch {
  0% {
    transform: translateX(0);
    opacity: 0.08;
  }

  10% {
    transform: translateX(-1%);
  }

  20% {
    transform: translateX(1%);
  }

  30% {
    transform: translateX(-2%);
  }

  40% {
    transform: translateX(3%);
  }

  50% {
    transform: translateX(-3%);
    opacity: 0.06;
  }

  60% {
    transform: translateX(8%);
  }

  70% {
    transform: translateX(-3%);
  }

  80% {
    transform: translateX(10%);
    opacity: 0.03;
  }

  90% {
    transform: translateX(20%);
  }

  100% {
    transform: translateX(30%);
  }
}

/* Simple Title Animation */
@keyframes draw {
  0% {
    width: 0%;
  }

  100% {
    width: 110%;
  }
}

@keyframes draw-bottom {
  0% {
    width: 0%;
  }

  100% {
    width: 100%;
  }
}

@keyframes fade {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}
</style> -->
